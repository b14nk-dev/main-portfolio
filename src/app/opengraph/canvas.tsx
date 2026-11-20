import { OgFooter } from "./footer";

const MUTED = "#8a8681";
const INK = "#f1efea";

export function OgCanvas({ serif, sans }: { serif: string; sans: string }) {
  return (
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
          color: MUTED,
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
            color: INK,
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
            color: MUTED,
            maxWidth: 780,
          }}
        >
          Production web and mobile applications with React, Next.js, Node.js
          and Express.
        </div>
      </div>

      <OgFooter serif={serif} />
    </div>
  );
}
