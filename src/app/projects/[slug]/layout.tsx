import { DATA, getProjectData } from "@/app/data";
import { Navbar } from "@/components/sections";
import { Metadata } from "next";

export const revalidate = 604800;

type LayoutProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectData(resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Ritik Negi",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: `${project[0]} | Ritik Negi`,
    description: project[1].DESCRIPTION[0],
    openGraph: {
      title: `${project[0]} | Ritik Negi`,
      description: project[1].DESCRIPTION[0],
      images: project[1].IMAGE
        ? [
            {
              url: project[1].IMAGE.src,
              width: 1200,
              height: 630,
              alt: project[0],
            },
          ]
        : undefined,
    },
  };
}

export function generateStaticParams() {
  return Object.values(DATA.PROJECTS).map((project) => ({
    slug: project.SLUG,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl px-6 pb-4 sm:px-10">
        {children}
      </main>
    </div>
  );
}
