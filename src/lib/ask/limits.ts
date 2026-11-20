import type { AskRateLimit } from "./types";

/** The backend's per-client limit rejected the request before streaming. */
export class ClientRateLimitError extends Error {
  readonly retryAfter: number | null;

  constructor(retryAfter: number | null) {
    super(
      "You've reached the question limit. Please try again later — or email Ritik directly."
    );
    this.name = "ClientRateLimitError";
    this.retryAfter = retryAfter;
  }
}

const DURATION = /(\d+(?:\.\d+)?)\s*(ms|s|m|h)/g;
const SCALE: Record<string, number> = { ms: 0.001, s: 1, m: 60, h: 3600 };

/** Converts a provider duration such as `7.66s` or `2m59.56s` to seconds. */
export function parseDuration(value?: string): number | null {
  if (!value) return null;

  const parts = [...value.matchAll(DURATION)];
  if (parts.length) {
    return parts.reduce(
      (total, [, amount, unit]) => total + Number(amount) * SCALE[unit],
      0
    );
  }

  const seconds = Number(value);
  return Number.isFinite(seconds) ? seconds : null;
}

/** Seconds to wait before retrying, preferring the provider's own reset time. */
export function rateLimitDelay(info: AskRateLimit): number | null {
  const candidates = [
    info.retry_after,
    parseDuration(info.reset_tokens),
    parseDuration(info.reset_requests),
  ];
  const seconds = candidates.find(
    (value): value is number => typeof value === "number" && value >= 0
  );

  return seconds === undefined ? null : Math.ceil(seconds);
}

/**
 * Reads `Retry-After`, which is either a number of seconds or an HTTP date.
 * Returns whole seconds to wait, or null when the header is missing/invalid.
 */
export function parseRetryAfter(value: string | null): number | null {
  if (!value) return null;

  const seconds = Number(value);
  if (Number.isFinite(seconds)) {
    return seconds > 0 ? Math.ceil(seconds) : null;
  }

  const date = Date.parse(value);
  if (Number.isNaN(date)) return null;

  const remaining = Math.ceil((date - Date.now()) / 1000);
  return remaining > 0 ? remaining : null;
}
