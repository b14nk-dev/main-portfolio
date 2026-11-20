import type { IProjectData } from "../types";

export const thaiTourism: IProjectData = {
  SLUG: "thai-tourism-platform",
  DATE: "2025",
  CATEGORY: "work",
  DESCRIPTION: [
    "Built reusable City, Product and Attraction pages with Next.js and React across 10+ tourism sections.",
    "Developed Taxi Transfer REST APIs with Express.js and PostgreSQL for booking, search and transfer management.",
    "Integrated TanStack Query for server-state management and caching, reducing redundant API calls by 30%.",
  ],
  METRICS: [
    { VALUE: "10+", LABEL: "Tourism sections" },
    { VALUE: "30%", LABEL: "Fewer API calls" },
  ],
  TECH_STACK: [
    "Next.js",
    "React",
    "Express.js",
    "PostgreSQL",
    "TanStack Query",
  ],
};
