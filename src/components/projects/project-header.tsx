import type { IProjectData } from "@/app/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ProjectHeader({
  title,
  value,
}: {
  title: string;
  value: IProjectData;
}) {
  return (
    <>
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
    </>
  );
}
