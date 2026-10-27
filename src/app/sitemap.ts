import { DATA } from "@/app/data";
import { SITE_URL } from "@/lib/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoute: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = Object.values(DATA.PROJECTS).map(
    (project) => ({
      url: `${SITE_URL}/projects/${project.SLUG}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticRoute, ...projectRoutes];
}
