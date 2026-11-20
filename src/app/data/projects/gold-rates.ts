import Gold_app_Image from "@/assets/gold-app.jpg";
import type { IProjectData } from "../types";

export const goldRates: IProjectData = {
  SLUG: "live-gold-rates-app",
  LIVE_PREVIEW:
    "https://play.google.com/store/apps/details?id=com.kanhacraftjewels",
  DATE: "Aug 2023",
  CATEGORY: "work",
  DESCRIPTION: [
    "Cross-platform mobile app for real-time gold and silver tracking, pricing calculations and jewelry-business catalog workflows.",
    "Built admin and inventory features with optimized state management and API usage.",
    "Admin dashboard manages live rates, product catalogs and banners, giving the business direct control over app content.",
  ],
  METRICS: [{ VALUE: "Android + iOS", LABEL: "Cross-platform release" }],
  TECH_STACK: ["React Native", "Redux Toolkit", "REST APIs"],
  IMAGE: Gold_app_Image,
};
