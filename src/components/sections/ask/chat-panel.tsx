"use client";

import { DATA } from "@/app/data";
import { useEffect, useRef } from "react";
import { ChatHeader } from "./chat-header";
import { Composer } from "./composer";
import { MIN_LENGTH } from "./copy";
import { Intro } from "./intro";
import { MessageRow } from "./message-row";
import { useAskChat } from "./use-ask-chat";

/** The assistant panel: header, transcript and composer. */
export function ChatPanel() {
  const { EMAIL } = DATA.HEADER;
  const {
    messages,
    input,
    setInput,
    status,
    pending,
    cooldown,
    warming,
    ask,
    submit,
  } = useAskChat(EMAIL);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (element) element.scrollTop = element.scrollHeight;
  }, [messages, status, warming]);

  // While the host wakes up, or a question is in flight, the composer is closed.
  const closed = pending || warming;
  const canSend =
    !closed && cooldown === 0 && input.trim().length >= MIN_LENGTH;

  return (
    <div className="overflow-hidden border border-border bg-background">
      <ChatHeader warming={warming} status={status} />

      <div
        ref={scrollRef}
        role="log"
        aria-label="Conversation with Ritik's assistant"
        className="flex min-h-[420px] max-h-[560px] flex-col gap-5 overflow-y-auto px-5 py-6"
      >
        <Intro
          warming={warming}
          showSuggestions={!warming && messages.length === 0}
          pending={pending}
          cooldown={cooldown}
          onAsk={ask}
        />

        {messages.map((message, index) => {
          const isLast = index === messages.length - 1;
          const streaming = pending && isLast && message.role === "assistant";

          return (
            <MessageRow
              key={index}
              message={message}
              streaming={streaming}
              showExtras={isLast && !streaming}
              pending={pending}
              cooldown={cooldown}
              email={EMAIL}
              onAsk={ask}
            />
          );
        })}
      </div>

      <Composer
        input={input}
        setInput={setInput}
        closed={closed}
        canSend={canSend}
        warming={warming}
        email={EMAIL}
        onSubmit={submit}
      />
    </div>
  );
}
