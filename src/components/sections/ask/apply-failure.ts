import { ClientRateLimitError } from "@/lib/ask";
import { clientLimitMessage, LONG_WAIT } from "./copy";
import type { Message } from "./types";

type FailureHandlers = {
  setCooldown: (seconds: number) => void;
  updateAnswer: (updater: (message: Message) => Message) => void;
  email: string;
};

/** Turns a failed request into a visible, retryable answer row. */
export function handleFailure(
  error: unknown,
  { setCooldown, updateAnswer, email }: FailureHandlers
) {
  if (error instanceof ClientRateLimitError) {
    const { retryAfter } = error;
    const retryable = retryAfter === null || retryAfter <= LONG_WAIT;
    setCooldown(retryable ? (retryAfter ?? 0) : 0);
    updateAnswer((answer) => ({
      ...answer,
      content: clientLimitMessage(retryAfter),
      error: true,
      busy: true,
      retryable,
    }));
    return;
  }

  const message =
    error instanceof Error
      ? error.message
      : `Something went wrong — please email ${email}.`;
  updateAnswer((answer) => ({ ...answer, content: message, error: true }));
}
