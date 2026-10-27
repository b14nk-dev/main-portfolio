import { DATA } from "@/app/data";
import { cn } from "@/lib/utils";
import { MaskReveal } from "../ui/mask-reveal";
import { Reveal } from "../ui/reveal";

const LINKS = [
  { label: "Résumé", href: DATA.HEADER.RESUME, download: true },
  { label: "Email", href: `mailto:${DATA.HEADER.EMAIL}` },
  { label: "GitHub", href: DATA.HEADER.GITHUB, external: true },
  { label: "LinkedIn", href: DATA.HEADER.LINKEDIN, external: true },
];

export function Header() {
  const data = DATA.HEADER;

  return (
    <section className="pb-16 pt-20 sm:pb-24 sm:pt-28">
      <Reveal>
        <p className="label flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>{data.LOCATION}</span>
          <span aria-hidden className="text-muted-foreground/40">
            —
          </span>
          <span>{data.AVAILABILITY}</span>
        </p>
      </Reveal>

      <h1 className="display mt-7 text-[clamp(3.25rem,10vw,7.5rem)] text-foreground">
        <MaskReveal>
          Ritik <span className="italic">Negi</span>
        </MaskReveal>
      </h1>

      <Reveal delay={0.08}>
        <p className="mt-7 text-base text-foreground/80">{data.ROLE}</p>

        <p className="mt-4 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground sm:text-[18px]">
          {data.SUMMARY}
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-base">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.download
                  ? { download: "Ritik-Negi-Resume.pdf" }
                  : {})}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link text-foreground/90 transition-colors duration-500 hover:text-foreground"
              >
                {link.label}
                {link.external && (
                  <span
                    aria-hidden
                    className="ml-1 text-muted-foreground/60"
                  >
                    ↗
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

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
    </section>
  );
}
