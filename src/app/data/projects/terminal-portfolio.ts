import Terminal_portfolio_Image from "@/assets/teminal-portfolio.png";
import type { IProjectData } from "../types";

export const terminalPortfolio: IProjectData = {
  SLUG: "terminal-portfolio",
  DATE: "2023",
  CATEGORY: "personal",
  LIVE_PREVIEW: "https://terminal-blank.vercel.app",
  GITHUB: "https://github.com/b14nk-dev/Terminal-Portofolio",
  DESCRIPTION: [
    "A portfolio that looks and functions like a terminal — visitors explore the work by typing commands.",
    "Clean, text-first interface with a command parser and keyboard-driven navigation.",
  ],
  TECH_STACK: ["Next.js", "Sass (SCSS)", "Axios"],
  IMAGE: Terminal_portfolio_Image,
};
