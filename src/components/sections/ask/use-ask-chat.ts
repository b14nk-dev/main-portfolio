"use client";

import { askQuestion } from "@/lib/ask";
import { FormEvent, useState } from "react";
import { handleFailure } from "./apply-failure";
import { handleEvent, type Session } from "./chat-events";
import { MAX_LENGTH, MIN_LENGTH } from "./copy";
import type { Message } from "./types";
import { useCooldown } from "./use-cooldown";
import { useWarmup } from "./use-warmup";

/**
 * Conversation state for the assistant panel: sending a question, applying the
 * stream, and turning failures into retryable rows.
 */
export function useAskChat(email: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const warming = useWarmup();
  const { cooldown, setCooldown } = useCooldown();

  const ask = async (
    question: string,
    options?: { resend?: boolean }
  ): Promise<void> => {
    if (
      pending ||
      warming ||
      cooldown > 0 ||
      question.length < MIN_LENGTH ||
      question.length > MAX_LENGTH
    ) {
      return;
    }

    setMessages((prev) => [
      ...(options?.resend ? prev.slice(0, -2) : prev),
      { role: "user", content: question },
      { role: "assistant", content: "", retry: question },
    ]);
    setInput("");
    setPending(true);
    setStatus("thinking");

    const session: Session = { started: false, limit: null };

    const updateAnswer = (updater: (message: Message) => Message) =>
      setMessages((prev) => {
        if (!prev.length) return prev;
        const next = [...prev];
        next[next.length - 1] = updater(next[next.length - 1]);
        return next;
      });

    try {
      await askQuestion(question, (event) =>
        handleEvent(event, session, {
          setStatus,
          setCooldown,
          updateAnswer,
          email,
        })
      );
    } catch (error) {
      handleFailure(error, { setCooldown, updateAnswer, email });
    } finally {
      setPending(false);
      setStatus(null);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input.trim());
  };

  return {
    messages,
    input,
    setInput,
    status,
    pending,
    cooldown,
    warming,
    ask,
    submit,
  };
}
