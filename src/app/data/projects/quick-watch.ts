import Quick_watch_Image from "@/assets/quick-watch.png";
import type { IProjectData } from "../types";

export const quickWatch: IProjectData = {
  SLUG: "quick-watch",
  LIVE_PREVIEW: "https://quickwatch.vercel.app",
  DATE: "2025",
  CATEGORY: "personal",
  DESCRIPTION: [
    "Online movie and TV show streaming platform with a searchable catalog and third-party streaming player.",
    "Full-stack build covering data modelling, API routes and interactive UI.",
  ],
  TECH_STACK: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Framer Motion",
  ],
  IMAGE: Quick_watch_Image,
};
