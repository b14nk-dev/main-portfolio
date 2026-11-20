"use client";

import { Link2, Mail, RotateCcw } from "lucide-react";
import type { AskFn, Message } from "./types";

const ACTION =
  "link inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors duration-500 hover:text-foreground";

const SUGGESTION =
  "link text-left text-[13px] leading-relaxed text-muted-foreground transition-colors duration-500 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50";

type MessageActionsProps = {
  message: Message;
  pending: boolean;
  cooldown: number;
  email: string;
  onAsk: AskFn;
};

/** Extras that only render once the last answer has finished streaming. */
export function MessageActions({
  message,
  pending,
  cooldown,
  email,
  onAsk,
}: MessageActionsProps) {
  return (
    <>
      {message.followups?.length ? (
        <div className="flex flex-col items-start gap-1.5">
          {message.followups.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => onAsk(question)}
              disabled={pending || cooldown > 0}
              className={SUGGESTION}
            >
              {question}
            </button>
          ))}
        </div>
      ) : null}

      {message.error && message.retry ? (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {message.retryable !== false ? (
            <button
              type="button"
              onClick={() => onAsk(message.retry as string, { resend: true })}
              disabled={pending || cooldown > 0}
              className={`${ACTION} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              <RotateCcw className="size-3" strokeWidth={1.5} />
              {cooldown > 0 ? `Try again in ${cooldown}s` : "Try again"}
            </button>
          ) : null}
          <a href={`mailto:${email}`} className={ACTION}>
            <Mail className="size-3" strokeWidth={1.5} />
            Email Ritik
          </a>
        </div>
      ) : null}

      {message.links?.length ? (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {message.links.map((link) => {
            const external = link.url.startsWith("http");
            return (
              <a
                key={link.url}
                href={link.url}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={ACTION}
              >
                <Link2 className="size-3 shrink-0" strokeWidth={1.5} />
                {link.label}
              </a>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
