import { StaticImageData } from "next/image";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  HIGHLIGHTS?: string[];
  METRICS?: { VALUE: string; LABEL: string }[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE?: StaticImageData;
  DATE: string;
  CATEGORY: "work" | "personal";
}
