"use client";

import { ArrowUp } from "lucide-react";
import { FormEvent } from "react";
import { MAX_LENGTH, MIN_LENGTH } from "./copy";

type ComposerProps = {
  input: string;
  setInput: (value: string) => void;
  closed: boolean;
  canSend: boolean;
  warming: boolean;
  email: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function Composer({
  input,
  setInput,
  closed,
  canSend,
  warming,
  email,
  onSubmit,
}: ComposerProps) {
  return (
    <form onSubmit={onSubmit} className="border-t border-border px-5 pb-4 pt-4">
      <div className="flex items-center gap-3 border-b border-border pb-2 transition-colors duration-500 focus-within:border-foreground/40">
        <label htmlFor="ask-question" className="sr-only">
          Message Ritik&apos;s assistant
        </label>
        <input
          id="ask-question"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={
            warming ? "Setting up the assistant…" : "Ask about his work…"
          }
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
          disabled={closed}
          autoComplete="off"
          className="w-full bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          aria-label="Send message"
          disabled={!canSend}
          className="shrink-0 text-muted-foreground transition-colors duration-500 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowUp className="size-4" strokeWidth={1.5} />
        </button>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground/60">
        Press Enter to send · AI-generated answers, for anything official email{" "}
        <a
          href={`mailto:${email}`}
          className="link text-muted-foreground transition-colors duration-500 hover:text-foreground"
        >
          {email}
        </a>
      </p>
    </form>
  );
}
