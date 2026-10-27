import { DATA } from "@/app/data";
import { Reveal } from "../ui/reveal";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 className="section-label sm:sticky sm:top-24 sm:self-start">
          education
        </h2>

        <Reveal>
          <ul className="border-t border-border">
            {DATA.EDUCATION.map((item) => (
              <li
                key={item.DEGREE}
                className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-border py-4"
              >
                <p className="text-base text-foreground">{item.DEGREE}</p>
                <p className="text-base text-muted-foreground">
                  {item.INSTITUTION}
                  <span className="mx-2 text-border">/</span>
                  <span className="tabular-nums">{item.DURATION}</span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
