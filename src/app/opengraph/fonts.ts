import { readFile } from "node:fs/promises";
import path from "node:path";

const FONT_DIR = path.join(process.cwd(), "src", "assets", "fonts");

const FONT_FILES = {
  serif: "instrument-serif-400.ttf",
  serifItalic: "instrument-serif-400-italic.ttf",
  sans: "inter-400.ttf",
  sansMedium: "inter-500.ttf",
};

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 500;
  style: "normal" | "italic";
};

function toArrayBuffer(buffer: Buffer) {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  ) as ArrayBuffer;
}

async function loadFont(file: string) {
  return toArrayBuffer(await readFile(path.join(FONT_DIR, file)));
}

/** Loads the brand fonts; returns undefined when they are unavailable. */
export async function loadFonts(): Promise<OgFont[] | undefined> {
  try {
    const [serif, serifItalic, sans, sansMedium] = await Promise.all([
      loadFont(FONT_FILES.serif),
      loadFont(FONT_FILES.serifItalic),
      loadFont(FONT_FILES.sans),
      loadFont(FONT_FILES.sansMedium),
    ]);

    return [
      { name: "Serif", data: serif, weight: 400, style: "normal" },
      { name: "Serif", data: serifItalic, weight: 400, style: "italic" },
      { name: "Sans", data: sans, weight: 400, style: "normal" },
      { name: "Sans", data: sansMedium, weight: 500, style: "normal" },
    ];
  } catch (error) {
    console.error("OG font load failed:", error);
    return undefined;
  }
}
