import type { IProjectData } from "@/app/data";

export function ProjectBody({ value }: { value: IProjectData }) {
  return (
    <>
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
    </>
  );
}
