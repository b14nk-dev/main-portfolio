"use client";

import { cn } from "@/lib/utils";
import { Markdown } from "../../ui/markdown";
import { MessageActions } from "./message-actions";
import { ROW_LABEL } from "./styles";
import type { AskFn, Message } from "./types";
import { TypingDots } from "./typing-dots";

type MessageRowProps = {
  message: Message;
  /** The last assistant row while its answer is still streaming. */
  streaming: boolean;
  /** Extras only render once the answer has finished. */
  showExtras: boolean;
  pending: boolean;
  cooldown: number;
  email: string;
  onAsk: AskFn;
};

export function MessageRow({ message, streaming, ...rest }: MessageRowProps) {
  if (message.role === "user") {
    return (
      <div className="flex gap-3">
        <span className={ROW_LABEL}>You</span>
        <p className="max-w-[85%] whitespace-pre-wrap text-pretty text-[15px] leading-[1.7] text-foreground">
          {message.content}
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <span className={ROW_LABEL}>AI</span>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div
          className={cn(
            "max-w-[46ch] text-[15px] leading-[1.7] text-foreground/90",
            message.error && !message.busy && "text-destructive",
            message.busy && "text-muted-foreground"
          )}
        >
          {message.content ? (
            <Markdown caret={streaming} className="space-y-2">
              {message.content}
            </Markdown>
          ) : (
            <TypingDots />
          )}
        </div>

        {rest.showExtras ? (
          <MessageActions
            message={message}
            pending={rest.pending}
            cooldown={rest.cooldown}
            email={rest.email}
            onAsk={rest.onAsk}
          />
        ) : null}
      </div>
    </div>
  );
}
