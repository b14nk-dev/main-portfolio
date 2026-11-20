import { getProjectData } from "@/app/data";
import { ProjectBody } from "@/components/projects/project-body";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectMetrics } from "@/components/projects/project-metrics";
import Image from "next/image";

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
      <ProjectHeader title={title} value={value} />

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

      {value.METRICS && <ProjectMetrics metrics={value.METRICS} />}

      <ProjectBody value={value} />
    </article>
  );
}
