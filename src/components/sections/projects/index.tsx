import { IProjectData } from "@/app/data";
import { Reveal } from "../../ui/reveal";
import { ProjectRow } from "./project-row";

type ProjectsProps = {
  id: string;
  data: Record<string, IProjectData>;
  all?: string;
  title: string;
  eyebrow: string;
  description?: string;
};

export function Projects({
  id,
  data,
  all,
  title,
  eyebrow,
  description,
}: ProjectsProps) {
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
