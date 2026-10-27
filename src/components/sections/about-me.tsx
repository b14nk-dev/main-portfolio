import { DATA } from "@/app/data";
import { Reveal } from "../ui/reveal";

export function AboutMe() {
  const data = DATA.ABOUT;

  return (
    <section id="about" className="border-t border-border py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 className="section-label sm:sticky sm:top-24 sm:self-start">
          about
        </h2>

        <Reveal>
          <p className="display max-w-2xl text-[clamp(1.6rem,3.4vw,2.5rem)] text-pretty text-foreground">
            {data.LEDE}
          </p>

          <p className="mt-8 max-w-xl text-pretty text-base leading-[1.75] text-muted-foreground">
            {data.SUMMARY}
          </p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-[1.75] text-muted-foreground">
            {data.DETAIL}
          </p>

          <p className="mt-10 text-sm leading-relaxed text-muted-foreground/80">
            {data.FOCUS.join("  ·  ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
