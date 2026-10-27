import { Reveal } from "../ui/reveal";

export function Skills({ data }: { data: Record<string, string[]> }) {
  return (
    <section id="skills" className="border-t border-border py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 className="section-label sm:sticky sm:top-24 sm:self-start">
          skills
        </h2>

        <Reveal>
          <dl className="border-t border-border">
            {Object.entries(data).map(([group, items]) => (
              <div
                key={group}
                className="grid gap-1 border-b border-border py-4 sm:grid-cols-[170px_1fr] sm:gap-6"
              >
                <dt className="text-sm text-muted-foreground">{group}</dt>
                <dd className="text-base leading-[1.7] text-muted-foreground">
                  {items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
