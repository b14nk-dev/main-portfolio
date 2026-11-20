export type AskLink = { label: string; url: string };

/** Model-provider limits, as sent by the backend's `rate_limit` event. */
export type AskRateLimit = {
  limit_requests?: number;
  limit_tokens?: number;
  remaining_requests?: number;
  remaining_tokens?: number;
  reset_requests?: string;
  reset_tokens?: string;
  retry_after?: number;
};

/** One line of the backend's NDJSON response stream. */
export type AskEvent =
  | { type: "status"; stage: "thinking" }
  | { type: "token"; text: string }
  | { type: "followups"; items: string[] }
  | { type: "links"; items: AskLink[] }
  | ({ type: "rate_limit" } & AskRateLimit)
  | { type: "error"; message: string }
  | { type: "done" };
