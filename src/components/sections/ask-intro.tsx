import { DATA } from "@/app/data";
import { Reveal } from "../ui/reveal";

const LINKS = [
  { label: "Résumé", href: DATA.HEADER.RESUME, download: true },
  { label: "Email", href: `mailto:${DATA.HEADER.EMAIL}` },
  { label: "GitHub", href: DATA.HEADER.GITHUB, external: true },
  { label: "LinkedIn", href: DATA.HEADER.LINKEDIN, external: true },
];

/** Name/role heading and the links beside the assistant panel. */
export function AskIntro() {
  const data = DATA.HEADER;

  return (
    <Reveal>
      <p className="label flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-foreground/80">{data.NAME}</span>
        <span aria-hidden className="text-muted-foreground/40">
          /
        </span>
        <span>{data.ROLE}</span>
      </p>

      <h1 className="display mt-6 text-[clamp(2.4rem,4.6vw,3.6rem)] text-foreground">
        <span className="sr-only">{data.NAME} — </span>
        Ask me anything
        <br />
        <span className="italic">about my work.</span>
      </h1>

      <p className="mt-6 max-w-md text-pretty text-base leading-[1.75] text-muted-foreground">
        {data.SUMMARY}
      </p>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground/80">
        The assistant answers from a knowledge base I maintain — experience,
        projects, stack and availability. If a question falls outside it, it will
        say so.
      </p>

      <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.download ? { download: "Ritik-Negi-Resume.pdf" } : {})}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="link text-foreground/90 transition-colors duration-500 hover:text-foreground"
            >
              {link.label}
              {link.external && (
                <span aria-hidden className="ml-1 text-muted-foreground/60">
                  ↗
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted-foreground/70">
        {data.LOCATION} — {data.AVAILABILITY}
      </p>
    </Reveal>
  );
}
