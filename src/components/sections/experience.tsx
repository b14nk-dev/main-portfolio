import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/reveal";

interface IExperienceData {
  WEBSITE: string;
  POSITION: string;
  LOCATION: string;
  DURATION: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
}

export function Experience({
  data,
}: {
  data: Record<string, IExperienceData>;
}) {
  return (
    <section id="experience" className="border-t border-border py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 className="section-label sm:sticky sm:top-24 sm:self-start">
          experience
        </h2>

        <div>
          {Object.entries(data).map(([company, value], index) => (
            <Reveal key={company} delay={index * 0.06}>
              <article
                className={index > 0 ? "border-t border-border pt-10" : ""}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <h3 className="font-serif text-2xl text-foreground sm:text-[28px]">
                    {value.POSITION}
                  </h3>
                  <p className="label">{value.DURATION}</p>
                </div>

                <p className="mt-2 text-base text-muted-foreground">
                  <a
                    href={value.WEBSITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-foreground"
                  >
                    {company}
                    <ArrowUpRight
                      className="ml-0.5 inline size-3"
                      strokeWidth={1.5}
                    />
                  </a>
                  <span className="mx-2 text-border">/</span>
                  {value.LOCATION}
                </p>

                <ul className="mt-6 max-w-2xl space-y-3">
                  {value.DESCRIPTION.map((desc, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-base leading-[1.7] text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-[9px] size-[3px] shrink-0 rounded-full bg-muted-foreground/60"
                      />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground/70">
                  {value.TECH_STACK.join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
