import { DATA } from "@/app/data";
import { cn } from "@/lib/utils";
import { Reveal } from "../ui/reveal";

/** The four headline numbers below the assistant. */
export function AskStats() {
  return (
    <Reveal delay={0.16}>
      <dl className="mt-16 grid grid-cols-2 border-t border-border sm:mt-20 sm:grid-cols-4">
        {DATA.STATS.map((stat, index) => (
          <div
            key={stat.LABEL}
            className={cn(
              "flex flex-col-reverse gap-1 py-6 sm:py-8",
              index >= 2 && "border-t border-border sm:border-t-0",
              index > 0 && "sm:border-l sm:border-border sm:pl-8"
            )}
          >
            <dt className="text-sm leading-snug text-muted-foreground">
              {stat.LABEL}
            </dt>
            <dd className="font-serif text-3xl text-foreground sm:text-4xl">
              {stat.VALUE}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
