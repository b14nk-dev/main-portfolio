import type { IProjectData } from "../types";

export const assistant: IProjectData = {
  SLUG: "portfolio-ai-assistant",
  LIVE_PREVIEW: "/#ask",
  DATE: "2026",
  CATEGORY: "personal",
  DESCRIPTION: [
    "The ask-me hero on this site — visitors ask questions and get answers from a curated knowledge base about my work instead of a generic chatbot.",
    "FastAPI backend prefetches only the notes a question needs, then streams answers token by token over NDJSON from a Gemini-hosted LLM.",
    "Next.js frontend consumes the stream directly, showing status stages and rendering the answer as it arrives.",
  ],
  METRICS: [
    { VALUE: "1", LABEL: "REST endpoint" },
    { VALUE: "Streamed", LABEL: "Token-by-token answers" },
  ],
  TECH_STACK: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "Gemini",
    "NDJSON",
  ],
  NOTE: "Answers stay scoped to the knowledge base; out-of-scope questions fall back to email.",
};
