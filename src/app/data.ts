import Rishtey_ncr_Image from "@/assets/rishtey-ncr.jpg";
import Fitclub_crm_mage from "@/assets/fitclub-crm.jpg";
import Gold_app_Image from "@/assets/gold-app.jpg";
import Quick_watch_Image from '@/assets/quick-watch.png'
import Terminal_portfolio_Image from '@/assets/teminal-portfolio.png'
import Ascii_art_Image from '@/assets/ascii-art.png'
import { StaticImageData } from "next/image";
import { cache } from "react";

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

export const DATA = {
  HEADER: {
    NAME: "Ritik Negi",
    ROLE: "Software Engineer — Full Stack / Backend",
    LOCATION: "New Delhi, India",
    AVAILABILITY: "available for full-time roles",
    SUMMARY:
      "I build and run production web and mobile applications with React, Next.js, Node.js and Express — owning features end to end, from database and API design through payments and deployment. Products I've worked on serve 15,000+ monthly users.",
    RESUME: "/Resume.pdf",
    EMAIL: "negiritik01@gmail.com",
    PHONE: "+91 88001 60543",
    GITHUB: "https://github.com/ritikNegi2022",
    LINKEDIN: "https://www.linkedin.com/in/ritik-negi-39a1a32b8/",
  },

  STATS: [
    { VALUE: "3 yrs", LABEL: "Shipping production software" },
    { VALUE: "15k+", LABEL: "Monthly users served" },
    { VALUE: "40%", LABEL: "Faster page loads shipped" },
    { VALUE: "1.5k", LABEL: "Monthly transactions handled" },
  ],

  ABOUT: {
    LEDE: "Most of what I enjoy is the unglamorous work — the query that takes a second off every page, the auth boundary that holds, the payment webhook that never double-charges.",
    SUMMARY:
      "I'm a full-stack engineer with ~3 years of experience building and operating production applications. My work covers backend services and REST APIs, relational and NoSQL data modelling, JWT authentication and role-based access control, payment integrations and production performance work.",
    DETAIL:
      "I've taken features from requirements to release across web, mobile and browser extensions — including Chrome extensions used by 15,000+ people every month. I care about measurable outcomes: faster dashboards, fewer redundant API calls and systems that stay reliable under real traffic.",
    FOCUS: [
      "Backend & API design",
      "Performance optimization",
      "Authentication & payments",
      "End-to-end ownership",
    ],
  },

  EXPERIENCE: {
    "Callsmaster": {
      WEBSITE: "https://www.callsmaster.com/",
      POSITION: "Full-Stack Developer",
      LOCATION: "New Delhi, India",
      DURATION: "Jun 2023 – Present",
      DESCRIPTION: [
        "Owned end-to-end development of production web and mobile applications across frontend, backend, databases, authentication, payments and deployment.",
        "Built backend services and REST APIs with Node.js and Express on PostgreSQL, MySQL and MongoDB, using modular application architecture.",
        "Reduced dashboard and page-load latency by 30–40% through SSR, query optimization, indexing, lazy loading, code splitting and caching.",
        "Integrated PayU, Razorpay and 5+ third-party services into transaction workflows, including webhook processing and API orchestration supporting ~1,500 monthly transactions.",
        "Implemented JWT authentication and role-based access control across 10+ modules with reusable middleware and authorization flows.",
        "Built Chrome Extensions serving 15,000+ monthly users, improving runtime performance, memory efficiency and browser compatibility.",
        "Delivered features across React, Next.js, Node.js and React Native in Agile cycles, working directly with product and engineering requirements.",
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Next.js",
        "React Native",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "Razorpay",
        "AWS",
        "Vercel",
      ],
    },
  },

  PROJECTS: {
    "Fitclub Gym CRM": {
      SLUG: "fitclub-gym-crm",
      LIVE_PREVIEW: "https://fitclub.coupontodeal.com",
      DATE: "Jul 2024 – Feb 2026",
      CATEGORY: "work",
      DESCRIPTION: [
        "Gym management platform covering membership, attendance, billing and administration for ~10,000 member records.",
        "Implemented JWT/RBAC, Razorpay payments and secure file uploads across core modules.",
        "Optimized PostgreSQL queries and API flows, improving dashboard performance by 35%+.",
      ],
      METRICS: [
        { VALUE: "10k", LABEL: "Member records" },
        { VALUE: "35%+", LABEL: "Faster dashboard" },
      ],
      TECH_STACK: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "React.js",
        "Tailwind CSS",
        "JWT",
        "Razorpay",
      ],
      IMAGE: Fitclub_crm_mage,
    },
    "Rishtey — Matchmaking Platform": {
      SLUG: "rishtey-ncr",
      LIVE_PREVIEW: "https://rishteyncr.com/",
      DATE: "Jul 2023 – Nov 2025",
      CATEGORY: "work",
      DESCRIPTION: [
        "Matchmaking platform with profiles, matchmaking, subscriptions and onboarding workflows for ~8,000 user profiles.",
        "Implemented PayU subscriptions, JWT authentication and backend APIs for premium workflows.",
        "Reduced page-load time by 35%+ through SSR, query optimization and lazy loading.",
      ],
      METRICS: [
        { VALUE: "8k", LABEL: "User profiles" },
        { VALUE: "35%+", LABEL: "Faster page loads" },
      ],
      TECH_STACK: [
        "Next.js",
        "Node.js",
        "MySQL",
        "Sequelize",
        "PayU",
        "JWT",
        "Tailwind CSS",
      ],
      IMAGE: Rishtey_ncr_Image,
    },
    "Live Gold Rates App": {
      SLUG: "live-gold-rates-app",
      LIVE_PREVIEW:
        "https://play.google.com/store/apps/details?id=com.kanhacraftjewels",
      DATE: "Aug 2023",
      CATEGORY: "work",
      DESCRIPTION: [
        "Cross-platform mobile app for real-time gold and silver tracking, pricing calculations and jewelry-business catalog workflows.",
        "Built admin and inventory features with optimized state management and API usage.",
        "Admin dashboard manages live rates, product catalogs and banners, giving the business direct control over app content.",
      ],
      METRICS: [{ VALUE: "Android + iOS", LABEL: "Cross-platform release" }],
      TECH_STACK: ["React Native", "Redux Toolkit", "REST APIs"],
      IMAGE: Gold_app_Image,
    },
    "The Thai Tourism Platform": {
      SLUG: "thai-tourism-platform",
      DATE: "2025",
      CATEGORY: "work",
      DESCRIPTION: [
        "Built reusable City, Product and Attraction pages with Next.js and React across 10+ tourism sections.",
        "Developed Taxi Transfer REST APIs with Express.js and PostgreSQL for booking, search and transfer management.",
        "Integrated TanStack Query for server-state management and caching, reducing redundant API calls by 30%.",
      ],
      METRICS: [
        { VALUE: "10+", LABEL: "Tourism sections" },
        { VALUE: "30%", LABEL: "Fewer API calls" },
      ],
      TECH_STACK: [
        "Next.js",
        "React",
        "Express.js",
        "PostgreSQL",
        "TanStack Query",
      ],
    },
    "Quick Watch": {
      SLUG: "quick-watch",
      LIVE_PREVIEW: "https://quickwatch.vercel.app",
      DATE: "2025",
      CATEGORY: "personal",
      DESCRIPTION: [
        "Online movie and TV show streaming platform with a searchable catalog and third-party streaming player.",
        "Full-stack build covering data modelling, API routes and interactive UI.",
      ],
      TECH_STACK: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Framer Motion",
      ],
      IMAGE: Quick_watch_Image,
    },
    "Terminal UI Portfolio": {
      SLUG: "terminal-portfolio",
      DATE: "2023",
      CATEGORY: "personal",
      LIVE_PREVIEW: "https://terminal-blank.vercel.app",
      GITHUB: "https://github.com/ritikNegi2022/Terminal-Portofolio",
      DESCRIPTION: [
        "A portfolio that looks and functions like a terminal — visitors explore the work by typing commands.",
        "Clean, text-first interface with a command parser and keyboard-driven navigation.",
      ],
      TECH_STACK: ["Next.js", "Sass (SCSS)", "Axios"],
      IMAGE: Terminal_portfolio_Image,
    },
    "ASCII Art Generator": {
      SLUG: "ascii-art",
      DATE: "2025",
      CATEGORY: "personal",
      LIVE_PREVIEW: "https://ascii-art-generator-nextjs.vercel.app/",
      GITHUB: "https://github.com/ritikNegi2022/ascii-art",
      DESCRIPTION: [
        "Converts uploaded images into ASCII art with adjustable settings and live preview.",
        "Export the result as an image or text file from a responsive, client-side UI.",
      ],
      TECH_STACK: ["TypeScript", "Next.js", "Tailwind CSS"],
      IMAGE: Ascii_art_Image,
    },
  },

  ALL_PROJECTS: "https://github.com/ritikNegi2022?tab=repositories",

  SKILLS: {
    Languages: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    Frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Framer Motion",
    ],
    "Backend & APIs": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "RBAC",
      "Sequelize",
      "Webhooks",
    ],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
    "Cloud & Tooling": [
      "Docker",
      "AWS",
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "CI/CD",
      "Chrome Extensions",
    ],
  },

  EDUCATION: [
    {
      DEGREE: "MCA (Pursuing)",
      INSTITUTION: "IGNOU",
      DURATION: "2024 – Present",
    },
    { DEGREE: "B.A., History", INSTITUTION: "IGNOU", DURATION: "2021 – 2024" },
    {
      DEGREE: "Senior Secondary (XII)",
      INSTITUTION: "NIOS",
      DURATION: "2018 – 2020",
    },
    {
      DEGREE: "Secondary (X)",
      INSTITUTION: "CBSE",
      DURATION: "2016 – 2017",
    },
  ],
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(([, value]) => value.SLUG === title) as
    | [string, IProjectData]
    | undefined
);
