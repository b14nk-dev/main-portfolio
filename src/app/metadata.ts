import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ritik Negi | Full Stack / Backend Engineer",
  description:
    "Software engineer with ~3 years of experience building production web and mobile applications with React, Next.js, Node.js and Express. Products serving 15,000+ monthly users.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ritik Negi | Full Stack / Backend Engineer",
    description:
      "Full-stack engineer building production web and mobile applications with React, Next.js, Node.js and Express.",
    url: SITE_URL,
    siteName: "Ritik Negi",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Negi | Full Stack / Backend Engineer",
    description:
      "Full-stack engineer building production web and mobile applications with React, Next.js, Node.js and Express.",
  },
  authors: [{ name: "Ritik Negi", url: SITE_URL }],
  keywords: [
    "Ritik Negi",
    "Full Stack Developer",
    "Backend Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "New Delhi",
  ],
  creator: "Ritik Negi",
  publisher: "Ritik Negi",
};
