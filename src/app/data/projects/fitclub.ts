import Fitclub_crm_mage from "@/assets/fitclub-crm.jpg";
import type { IProjectData } from "../types";

export const fitclub: IProjectData = {
  SLUG: "fitclub-gym-crm",
  LIVE_PREVIEW: "https://fitclub.co.in/login",
  DATE: "Jul 2024 – Feb 2026",
  CATEGORY: "work",
  DESCRIPTION: [
    "Gym management platform covering membership, attendance, billing and administration for ~10,000 member records.",
    "Implemented JWT/RBAC, Razorpay payments and secure file uploads across core modules.",
    "Optimized PostgreSQL queries and API flows, improving dashboard performance by 35%+.",
  ],
  METRICS: [
    { VALUE: "10k", LABEL: "Member records" },
    { VALUE: "35%+", LABEL: "Faster dashboard" },
  ],
  TECH_STACK: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "React.js",
    "Tailwind CSS",
    "JWT",
    "Razorpay",
  ],
  IMAGE: Fitclub_crm_mage,
};
