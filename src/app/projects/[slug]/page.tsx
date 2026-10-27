import { getProjectData } from "@/app/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectData(resolvedParams.slug);

  if (!project) {
    return (
      <div className="py-24 text-center text-muted-foreground">
        Project not found
      </div>
    );
  }

  const [title, value] = project;

  return (
    <article className="pb-16 pt-12 sm:pt-16">
      <Link
        href="/#work"
        className="label link inline-flex items-center gap-2 transition-colors duration-500 hover:text-foreground"
      >
        <ArrowLeft className="size-3" strokeWidth={1.5} />
        Back
      </Link>

      <header className="mt-10 border-b border-border pb-10">
        <p className="label">{value.DATE}</p>
        <h1 className="display mt-4 max-w-2xl text-[clamp(2.25rem,6vw,4rem)] text-foreground">
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 text-base">
          {value.LIVE_PREVIEW && (
            <a
              href={value.LIVE_PREVIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              Live preview ↗
            </a>
          )}
          {value.GITHUB && (
            <a
              href={value.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-muted-foreground transition-colors duration-500 hover:text-foreground"
            >
              Source code ↗
            </a>
          )}
        </div>
      </header>

      {value.IMAGE && (
        <div className="mt-10 overflow-hidden bg-secondary">
          <Image
            src={value.IMAGE}
            alt={`${title} preview`}
            className="w-full"
            priority
          />
        </div>
      )}

      {value.METRICS && (
        <dl className="mt-10 grid grid-cols-2 border-t border-border sm:grid-cols-4">
          {value.METRICS.map((metric, index) => (
            <div
              key={metric.LABEL}
              className={
                index > 0
                  ? "flex flex-col-reverse gap-1 py-5 sm:border-l sm:border-border sm:pl-6"
                  : "flex flex-col-reverse gap-1 py-5"
              }
            >
              <dt className="text-sm text-muted-foreground">{metric.LABEL}</dt>
              <dd className="font-serif text-2xl text-foreground">
                {metric.VALUE}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_180px] sm:gap-14">
        <ul className="space-y-3">
          {value.DESCRIPTION.map((desc, index) => (
            <li
              key={index}
              className="flex gap-3 text-base leading-[1.75] text-muted-foreground"
            >
              <span
                aria-hidden
                className="mt-[9px] size-[3px] shrink-0 rounded-full bg-muted-foreground/60"
              />
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        <div>
          <h2 className="text-sm text-muted-foreground">Stack</h2>
          <p className="mt-3 text-base leading-[1.8] text-muted-foreground">
            {value.TECH_STACK.join(" · ")}
          </p>
        </div>
      </div>

      {value.NOTE && (
        <p className="mt-8 text-base text-muted-foreground">{value.NOTE}</p>
      )}
    </article>
  );
}
