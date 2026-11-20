import { ClientRateLimitError, parseRetryAfter } from "./limits";
import type { AskEvent } from "./types";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
).replace(/\/+$/, "");

/**
 * Wakes a sleeping host (free tiers spin down when idle). Resolves once the
 * API answers; rejects when it cannot be reached.
 */
export async function warmup(): Promise<void> {
  try {
    await fetch(`${API_URL}/api/v1/ai/warmup`, {
      method: "GET",
      cache: "no-store",
    });
  } catch {
    throw new Error(
      "The assistant can't be reached right now — please email me instead."
    );
  }
}

/**
 * Streams an answer from the portfolio AI service (NDJSON, one event per line).
 */
export async function askQuestion(
  question: string,
  onEvent: (event: AskEvent) => void
): Promise<void> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}/api/v1/ai/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
  } catch {
    throw new Error(
      "The assistant can't be reached right now — please email me instead."
    );
  }

  if (response.status === 429) {
    throw new ClientRateLimitError(
      parseRetryAfter(response.headers.get("Retry-After"))
    );
  }

  if (!response.ok || !response.body) {
    throw new Error(
      response.status === 422
        ? "Questions need to be between 5 and 500 characters."
        : "The assistant is unavailable right now — please email me instead."
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  const handleLine = (line: string) => {
    if (!line.trim()) return;
    try {
      onEvent(JSON.parse(line) as AskEvent);
    } catch {
      // Ignore a malformed line rather than dropping the rest of the answer.
    }
  };

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      lines.forEach(handleLine);
    }

    buffer += decoder.decode();
    handleLine(buffer);
  } catch {
    throw new Error(
      "The connection dropped mid-answer — please try again or email me."
    );
  }
}
