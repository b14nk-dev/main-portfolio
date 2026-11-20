import type { IProjectData } from "../types";
import { asciiArt } from "./ascii-art";
import { assistant } from "./assistant";
import { fitclub } from "./fitclub";
import { goldRates } from "./gold-rates";
import { quickWatch } from "./quick-watch";
import { rishtey } from "./rishtey";
import { terminalPortfolio } from "./terminal-portfolio";
import { thaiTourism } from "./thai-tourism";

/** Projects keyed by the display title used across the site. */
export const PROJECTS: Record<string, IProjectData> = {
  "Fitclub Gym CRM": fitclub,
  "Rishtey — Matchmaking Platform": rishtey,
  "Live Gold Rates App": goldRates,
  "The Thai Tourism Platform": thaiTourism,
  "Portfolio AI Assistant": assistant,
  "Quick Watch": quickWatch,
  "Terminal UI Portfolio": terminalPortfolio,
  "ASCII Art Generator": asciiArt,
};
