import type { AskLink } from "@/lib/ask";

/** One row of the visible conversation. */
export type Message = {
  role: "user" | "assistant";
  content: string;
  error?: boolean;
  busy?: boolean;
  retry?: string;
  followups?: string[];
  links?: AskLink[];
  /** False when retrying straight away cannot succeed (e.g. a daily limit). */
  retryable?: boolean;
};

export type AskFn = (
  question: string,
  options?: { resend?: boolean }
) => void;
