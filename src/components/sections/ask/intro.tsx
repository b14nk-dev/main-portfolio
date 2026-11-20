import { SUGGESTIONS } from "./copy";
import { ROW_LABEL } from "./styles";
import type { AskFn } from "./types";

type IntroProps = {
  warming: boolean;
  showSuggestions: boolean;
  pending: boolean;
  cooldown: number;
  onAsk: AskFn;
};

export function Intro({
  warming,
  showSuggestions,
  pending,
  cooldown,
  onAsk,
}: IntroProps) {
  return (
    <>
      <div className="flex gap-3">
        <span className={ROW_LABEL}>AI</span>
        <p className="max-w-[46ch] text-pretty text-[15px] leading-[1.7] text-foreground/90">
          {warming ? (
            <>
              Setting up the assistant. This can take up to a minute or more on a
              cold start — the chat opens as soon as it&apos;s ready.
            </>
          ) : (
            <>
              Hi — I&apos;m Ritik&apos;s assistant. Ask about his experience,
              stack, projects or availability. Not sure where to start? Pick a
              question:
            </>
          )}
        </p>
      </div>

      {showSuggestions && (
        <div className="ml-11 flex flex-col items-start gap-1.5">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onAsk(suggestion)}
              disabled={pending || cooldown > 0}
              className="link text-left text-[13px] leading-relaxed text-muted-foreground transition-colors duration-500 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
