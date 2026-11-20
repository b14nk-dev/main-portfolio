import { cn } from "@/lib/utils";

type ChatHeaderProps = {
  warming: boolean;
  status: string | null;
};

export function ChatHeader({ warming, status }: ChatHeaderProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border px-5 py-3.5">
      <p className="font-serif text-[19px] leading-none text-foreground">
        Ritik&apos;s assistant
      </p>
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
        <span
          className={cn(
            "size-1 rounded-full bg-foreground/50",
            (warming || status) && "animate-pulse"
          )}
        />
        {warming ? "setting up…" : status ? `${status}…` : "online"}
      </span>
    </div>
  );
}
