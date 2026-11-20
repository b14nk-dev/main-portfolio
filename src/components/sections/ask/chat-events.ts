import { rateLimitDelay, type AskEvent, type AskRateLimit } from "@/lib/ask";
import { busyMessage, LONG_WAIT } from "./copy";
import type { Message } from "./types";

/** Mutable progress of one answer, as the stream arrives. */
export type Session = {
  /** A token reached the client, so the answer can no longer be retried. */
  started: boolean;
  limit: AskRateLimit | null;
};

type Handlers = {
  setStatus: (status: string | null) => void;
  setCooldown: (seconds: number) => void;
  updateAnswer: (updater: (message: Message) => Message) => void;
  email: string;
};

/** Applies one NDJSON event to the current answer row. */
export function handleEvent(
  event: AskEvent,
  session: Session,
  { setStatus, setCooldown, updateAnswer, email }: Handlers
) {
  switch (event.type) {
    case "status":
      setStatus("thinking");
      return;

    case "token":
      session.started = true;
      setStatus(null);
      updateAnswer((message) => ({
        ...message,
        content: message.content + event.text,
      }));
      return;

    case "followups":
      updateAnswer((message) => ({ ...message, followups: event.items }));
      return;

    case "links":
      updateAnswer((message) => ({ ...message, links: event.items }));
      return;

    case "rate_limit":
      session.limit = event;
      return;

    case "error": {
      setStatus(null);
      const { message } = event;

      // A limit is signalled by the backend before it gives up, so trust it
      // over guessing from the error text. Anything that failed before the
      // first token is worth retrying with a real wait time.
      const limited =
        !session.started &&
        (session.limit?.retry_after !== undefined ||
          /usage limit|rate.?limit/i.test(message));

      if (limited) {
        const delay = session.limit ? rateLimitDelay(session.limit) : null;
        // Count down short waits and offer a retry; for a long reset show the
        // real wait but hide the retry, which would just fail again.
        const retryable = delay === null || delay <= LONG_WAIT;
        setCooldown(retryable ? (delay ?? 0) : 0);
        updateAnswer((answer) => ({
          ...answer,
          content: busyMessage(delay),
          error: true,
          busy: true,
          retryable,
        }));
        return;
      }

      updateAnswer((answer) =>
        answer.content.trim()
          ? { ...answer, content: `${answer.content}\n\n${message}`, error: true }
          : { ...answer, content: message, error: true }
      );
      return;
    }

    case "done":
      updateAnswer((message) =>
        message.content.trim() || message.error
          ? message
          : {
              ...message,
              content: `I don't have that in my notes. Email ${email} and Ritik will answer directly.`,
            }
      );
  }
}
