import Ascii_art_Image from "@/assets/ascii-art.png";
import type { IProjectData } from "../types";

export const asciiArt: IProjectData = {
  SLUG: "ascii-art",
  DATE: "2025",
  CATEGORY: "personal",
  LIVE_PREVIEW: "https://ascii-art-sigma.vercel.app/",
  GITHUB: "https://github.com/b14nk-dev/ascii-art",
  DESCRIPTION: [
    "Converts uploaded images into ASCII art with adjustable settings and live preview.",
    "Export the result as an image or text file from a responsive, client-side UI.",
  ],
  TECH_STACK: ["TypeScript", "Next.js", "Tailwind CSS"],
  IMAGE: Ascii_art_Image,
};
