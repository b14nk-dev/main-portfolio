import Rishtey_ncr_Image from "@/assets/rishtey-ncr.jpg";
import type { IProjectData } from "../types";

export const rishtey: IProjectData = {
  SLUG: "rishtey-ncr",
  LIVE_PREVIEW: "https://rishteyncr.com/",
  DATE: "Jul 2023 – Nov 2025",
  CATEGORY: "work",
  DESCRIPTION: [
    "Matchmaking platform with profiles, matchmaking, subscriptions and onboarding workflows for ~8,000 user profiles.",
    "Implemented PayU subscriptions, JWT authentication and backend APIs for premium workflows.",
    "Reduced page-load time by 35%+ through SSR, query optimization and lazy loading.",
  ],
  METRICS: [
    { VALUE: "8k", LABEL: "User profiles" },
    { VALUE: "35%+", LABEL: "Faster page loads" },
  ],
  TECH_STACK: [
    "Next.js",
    "Node.js",
    "MySQL",
    "Sequelize",
    "PayU",
    "JWT",
    "Tailwind CSS",
  ],
  IMAGE: Rishtey_ncr_Image,
};
