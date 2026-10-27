import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Ritik Negi — Software Engineer, Full Stack / Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_DIR = path.join(process.cwd(), "src", "assets", "fonts");

const FONT_FILES = {
  serif: "instrument-serif-400.ttf",
  serifItalic: "instrument-serif-400-italic.ttf",
  sans: "inter-400.ttf",
  sansMedium: "inter-500.ttf",
};

const STATS = [
  { value: "3 yrs", label: "In production" },
  { value: "15k+", label: "Monthly users" },
  { value: "40%", label: "Faster loads" },
];

function toArrayBuffer(buffer: Buffer) {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  ) as ArrayBuffer;
}

async function loadFont(file: string) {
  return toArrayBuffer(await readFile(path.join(FONT_DIR, file)));
}

export default async function Image() {
  let fonts:
    | {
        name: string;
        data: ArrayBuffer;
        weight: 400 | 500;
        style: "normal" | "italic";
      }[]
    | undefined;

  try {
    const [serif, serifItalic, sans, sansMedium] = await Promise.all([
      loadFont(FONT_FILES.serif),
      loadFont(FONT_FILES.serifItalic),
      loadFont(FONT_FILES.sans),
      loadFont(FONT_FILES.sansMedium),
    ]);

    fonts = [
      { name: "Serif", data: serif, weight: 400, style: "normal" },
      { name: "Serif", data: serifItalic, weight: 400, style: "italic" },
      { name: "Sans", data: sans, weight: 400, style: "normal" },
      { name: "Sans", data: sansMedium, weight: 500, style: "normal" },
    ];
  } catch (error) {
    console.error("OG font load failed:", error);
    fonts = undefined;
  }

  const serif = fonts ? "Serif" : "serif";
  const sans = fonts ? "Sans" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "64px 72px",
          fontFamily: sans,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 15,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#8a8681",
          }}
        >
          <span>Ritik Negi — Portfolio</span>
          <span>ritik-negi.vercel.app</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontFamily: serif,
              fontSize: 112,
              lineHeight: 1,
              letterSpacing: -1,
              color: "#f1efea",
            }}
          >
            <span>Ritik </span>
            <span style={{ fontStyle: "italic" }}>Negi</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 25,
              color: "#c9c4bc",
            }}
          >
            Software Engineer — Full Stack / Backend
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 19,
              lineHeight: 1.5,
              color: "#8a8681",
              maxWidth: 780,
            }}
          >
            Production web and mobile applications with React, Next.js,
            Node.js and Express.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.14)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 64 }}>
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontFamily: serif,
                    fontSize: 34,
                    lineHeight: 1.1,
                    color: "#f1efea",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "#7c7972",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <span style={{ fontSize: 16, color: "#8a8681" }}>
            negiritik01@gmail.com
          </span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
