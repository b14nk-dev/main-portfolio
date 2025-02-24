import { IProjectData } from "@/app/data";
import { ArrowUpRight } from "lucide-react";

export function Projects({
  data,
  all,
  title,
}: {
  data: Record<string, IProjectData>;
  all?: string;
  title: string;
}) {
  return (
    <div id="projects" className="py-10">
      <h2 className="text-base font-medium text-primary/90">{title}.</h2>

      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <div className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg text-primary/90">
                    {key}
                    <span className="ml-2 rounded bg-secondary px-2 py-1 text-xs inline-block max-sm:mb-2">
                      {value.DATE}
                    </span>
                  </p>

                  <p className="flex items-center gap-1 text-sm">
                    {value.LIVE_PREVIEW && (
                      <a
                        className="flex items-center gap-1"
                        href={value.LIVE_PREVIEW}
                      >
                        live preview <ArrowUpRight size={18} />
                      </a>
                    )}
                    {value.GITHUB && (
                      <a
                        className="flex items-center gap-1"
                        href={value.GITHUB}
                      >
                        github <ArrowUpRight size={18} />
                      </a>
                    )}
                  </p>
                </div>
              </div>

              <ul className="mt-4 list-disc space-y-1 pl-3 text-sm text-muted-foreground text-justify">
                {value.DESCRIPTION.map((desc, index) => (
                  <li key={index}>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-2 flex flex-wrap items-center gap-2 pl-3">
                {value.TECH_STACK.map((tech, index) => (
                  <li
                    key={index}
                    className="rounded bg-muted px-2 py-1 text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div
        className="mt-8 justify-center"
        style={{ display: all ? "flex" : "none" }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 text-sm text-muted-foreground"
          href={all}
        >
          View all projects
        </a>
      </div>
    </div>
  );
}
