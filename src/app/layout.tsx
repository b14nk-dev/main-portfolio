import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Instrument_Serif, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { personSchema } from "@/lib/structured-data";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen w-full overflow-x-hidden font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
