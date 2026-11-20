import { ImageResponse } from "next/og";
import { OgCanvas } from "./opengraph/canvas";
import { loadFonts } from "./opengraph/fonts";

export const alt = "Ritik Negi — Software Engineer, Full Stack / Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadFonts();
  const serif = fonts ? "Serif" : "serif";
  const sans = fonts ? "Sans" : "sans-serif";

  return new ImageResponse(<OgCanvas serif={serif} sans={sans} />, {
    ...size,
    fonts,
  });
}
