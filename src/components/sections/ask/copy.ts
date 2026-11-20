export const SUGGESTIONS = [
  "What has Ritik shipped at Callsmaster?",
  "What is his backend stack?",
  "What did he build for Fitclub?",
  "Is he open to full-time roles?",
];

export const MIN_LENGTH = 5;
export const MAX_LENGTH = 500;

// The backend emits a `rate_limit` event before the error when the model
// provider is out of capacity. Show a calm, retryable message instead of a
// failure, and say how long the wait actually is.
const BUSY_MESSAGE =
  "I'm answering a lot of questions right now, so that one didn't go through. Give it a moment and try again — or email Ritik directly.";

// Waits longer than this are not worth counting down or retrying in place —
// the per-IP limit is measured in hours, so an immediate retry just fails.
export const LONG_WAIT = 120;

export const formatWait = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? "" : "s"}`;
  }
  if (seconds < 3600) {
    const minutes = Math.round(seconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }
  if (seconds < 86400) {
    const hours = Math.round(seconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }
  const days = Math.round(seconds / 86400);
  return `${days} day${days === 1 ? "" : "s"}`;
};

export const busyMessage = (seconds: number | null) =>
  seconds
    ? `${
        seconds > LONG_WAIT
          ? "I've hit my usage limit for now."
          : "I'm answering a lot of questions right now."
      } You can try that again in about ${formatWait(seconds)} — or email Ritik directly.`
    : BUSY_MESSAGE;

export const clientLimitMessage = (seconds: number | null) =>
  seconds
    ? `You've reached the question limit. Please try again in about ${formatWait(seconds)} — or email Ritik directly.`
    : "You've reached the question limit. Please try again later — or email Ritik directly.";
