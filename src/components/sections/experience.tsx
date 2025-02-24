import { extractDomain } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
    <div id="experience" className="py-10">
      <h2 className="text-base font-medium text-primary/90">experience.</h2>

      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <div className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 hover:border-primary">
              <div className="flex flex-col items-start justify-between sm:flex-row">
                <div>
                  <p className="text-lg text-primary/90">
                    {value.POSITION}{" "}
                    <span className="ml-2 rounded bg-secondary px-2 py-1 text-xs inline-block max-sm:mb-2">
                      {value.LOCATION}
                    </span>
                  </p>
                  <p className="flex items-center text-sm">
                    at,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 flex items-center gap-1"
                      href={value.WEBSITE}
                    >
                      {extractDomain(value.WEBSITE)} <ArrowUpRight size={18} />
                    </a>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {value.DURATION}
                </p>
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
    </div>
  );
}
