import { IProjectData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../ui/reveal";

function ProjectRow({ project }: { project: [string, IProjectData] }) {
  const [title, value] = project;

  return (
    <article className="group border-b border-border py-8">
      <div className="flex items-start justify-between gap-6 sm:gap-12">
        <div className="min-w-0">
          <h3 className="font-serif text-xl text-foreground sm:text-2xl">
            <Link
              href={`/projects/${value.SLUG}`}
              className="link inline-block transition-transform duration-700 ease-sleek group-hover:translate-x-1"
            >
              {title}
            </Link>
          </h3>

          <p className="mt-2 max-w-lg text-pretty text-base leading-[1.7] text-muted-foreground">
            {value.DESCRIPTION[0]}
          </p>

          {value.METRICS && (
            <p className="mt-4 text-sm text-muted-foreground/80">
              {value.METRICS.map(
                (metric) => `${metric.VALUE} ${metric.LABEL.toLowerCase()}`
              ).join("  ·  ")}
            </p>
          )}

          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground/60">
            {value.TECH_STACK.join(" · ")}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {value.LIVE_PREVIEW && (
              <a
                href={value.LIVE_PREVIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="link transition-colors duration-500 hover:text-foreground"
              >
                Live
              </a>
            )}
            {value.GITHUB && (
              <a
                href={value.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="link transition-colors duration-500 hover:text-foreground"
              >
                Code
              </a>
            )}
            <Link
              href={`/projects/${value.SLUG}`}
              className="link transition-colors duration-500 hover:text-foreground"
            >
              Case study
            </Link>
          </div>
        </div>

        {value.IMAGE && (
          <Link
            href={`/projects/${value.SLUG}`}
            tabIndex={-1}
            aria-hidden
            className="relative aspect-[16/10] w-24 shrink-0 overflow-hidden bg-secondary sm:w-44"
          >
            <Image
              src={value.IMAGE}
              alt=""
              fill
              sizes="(max-width: 640px) 96px, 176px"
              className="object-cover object-top grayscale transition-[transform,filter] duration-1000 ease-sleek group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </Link>
        )}
      </div>
    </article>
  );
}

export function Projects({
  id,
  data,
  all,
  title,
  eyebrow,
  description,
}: {
  id: string;
  data: Record<string, IProjectData>;
  all?: string;
  title: string;
  eyebrow: string;
  description?: string;
}) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 className="section-label sm:sticky sm:top-24 sm:self-start">
          {eyebrow}
        </h2>

        <div>
          <Reveal>
            <p className="display max-w-xl text-[clamp(1.5rem,3vw,2rem)] text-pretty text-foreground">
              {title}
            </p>
            {description && (
              <p className="mt-3 max-w-lg text-base leading-[1.7] text-muted-foreground">
                {description}
              </p>
            )}
          </Reveal>

          <div className="mt-10 border-t border-border">
            {Object.entries(data).map((project, index) => (
              <Reveal key={project[1].SLUG} delay={index * 0.05}>
                <ProjectRow project={project} />
              </Reveal>
            ))}
          </div>

          {all && (
            <div className="mt-8">
              <a
                href={all}
                target="_blank"
                rel="noopener noreferrer"
                className="link label transition-colors duration-500 hover:text-foreground"
              >
                All repositories
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
