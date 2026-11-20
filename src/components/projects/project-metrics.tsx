import type { IProjectData } from "@/app/data";

export function ProjectMetrics({
  metrics,
}: {
  metrics: NonNullable<IProjectData["METRICS"]>;
}) {
  return (
    <dl className="mt-10 grid grid-cols-2 border-t border-border sm:grid-cols-4">
      {metrics.map((metric, index) => (
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
  );
}
