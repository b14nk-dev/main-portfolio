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
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  DATE: string
}

export const DATA = {
  HEADER: {
    NAME: "Ritik Negi",
    AGE: "22",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "/Resume.pdf",
    EMAIL: "mailto:negiritik01@gmail.com",
    GITHUB: "https://github.com/ritikNegi2022",
    LINKEDIN: "https://www.linkedin.com/in/ritik-negi-39a1a32b8",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a full-stack developer passionate about crafting high-performance, scalable, and user-friendly applications. I excel at tackling challenging problems, fine-tuning performance, and delivering smooth, engaging experiences.",
    EXPERTISE:
      "My expertise lies in Next.js, TypeScript, Node.js, and Cloud technologies, and I enjoy working across the stack to bring ideas to life.",
  },

  EXPERIENCE: {
    "Callsmaster": {
      WEBSITE: "https://www.callsmaster.com/",
      POSITION: "Fullstack Developer",
      LOCATION: "New-Delhi, India",
      DURATION: "August, 2023 - Present",
      DESCRIPTION: [
        "Developed and maintained scalable web applications to enhance user engagement and operational efficiency.",
        "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
        "Built and optimized backend systems to support high-performance applications and seamless data flow",
        "Created multiple Chrome extensions to enhance productivity and automate workflows",
        "Designed and developed mobile applications using modern frameworks for a smooth and responsive user experience."
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Vercel",
        "Git & Github",
      ],
    },
  },

  PROFFESIONALPROJECTS: {
    "Rishtey NCR": {
      SLUG: "rishtey-ncr",
      LIVE_PREVIEW: "https://rishteyncr.com/",
      DATE: "March 03, 2024",
      DESCRIPTION: [
        "RishteyNCR is a matchmaking website designed to help singles find their life partners.",
        "Built with Next.js, Tailwind CSS, MySQL, and Sequelize.",
        "It offers a seamless experience with subscription-based services for enhanced features.",
        "This project highlights my skills in full-stack development and user-focused design."
      ],
      TECH_STACK: [
        "Next.js",
        "Tailwind CSS",
        "PayU",
        "Redux.JS",
        "Redux Toolkit",
        "MySql",
      ],
      IMAGE: Rishtey_ncr_Image,
    },
    "Fitclub gym crm": {
      SLUG: "fitclub-gym-crm",
      LIVE_PREVIEW: "https://fitclub.coupontodeal.com",
      DATE: "September 08, 2024",
      DESCRIPTION: [
        "Developed a CRM system for gym operations with features like employee and client management etc.",
        "Developed the backend with Node.js and Express with authorization.",
        "Razorpay integration, streamlining workflows and enhancing client experiences."
      ],
      TECH_STACK: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "postgresql", "jwt", "multer"],
      IMAGE: Fitclub_crm_mage,
    },
    "Live Gold Rates App": {
      SLUG: "live-gold-rates-app",
      LIVE_PREVIEW: "https://play.google.com/store/apps/details?id=com.kanhacraftjewels",
      DATE: "December 6, 2024",
      DESCRIPTION: [
        "Developed a cross-platform mobile application (Android and iOS) for a jewelry store.",
        "Featuring real-time gold and silver rate updates, a product showcase, a gold calculator for precise pricing breakdowns.",
        "The app includes an admin dashboard for managing live rates.",
        "updating product catalogs, and modifying banner photos, offering dynamic control over app content.",
      ],
      TECH_STACK: [
        "React native",
        "Redux toolkit",
        "Tailwind CSS",
      ],
      IMAGE: Gold_app_Image,
    },
  },
  PROJECTS: {
    "Quick Watch": {
      SLUG: "quick-watch",
      LIVE_PREVIEW: "https://quickwatch.vercel.app",
      DATE: "January 14, 2025",
      DESCRIPTION: [
        "An online movie and TV show streaming platform built with Next.js, MongoDB, and a third-party streaming player.",
        "This project showcases my skills in full-stack development and creating interactive user experiences.",
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
    "Terminal UI portfolio": {
      SLUG: "terminal-portfolio",
      DATE: "March 9, 2023",
      LIVE_PREVIEW: "https://terminal-blank.vercel.app",
      GITHUB: "https://github.com/ritikNegi2022/Terminal-Portofolio",
      DESCRIPTION: [
        "I designed this portfolio to look and function like a terminal, giving it a unique and interactive feel.",
        "Users can explore my work by typing commands, making the experience dynamic and engaging.",
        "I kept the design clean and text-focused, creating a portfolio that reflects my skills and appeals to tech-savvy users.",
      ],
      TECH_STACK: ["Next.js", "Sass (scss)", "axios"],
      IMAGE: Terminal_portfolio_Image,
    },
    "Ascii art generator": {
      SLUG: "ascii-art",
      LIVE_PREVIEW: "https://ascii-art-generator-nextjs.vercel.app/",
      GITHUB: "https://github.com/ritikNegi2022/ascii-art",
      DATE: "February 25, 2024",
      DESCRIPTION: [
        "I convert uploaded images into ASCII art with adjustable settings for a better visual effect.",
        "I allow users to download the generated ASCII art as an image or text file.",
        "I ensure a smooth and responsive user experience with a clean UI and preview options.",
      ],
      TECH_STACK: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
      IMAGE: Ascii_art_Image,
    },
  },

  ALL_PROJECTS:
    "https://github.com/ritikNegi2022?tab=repositories",

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Express.js",
      "React Native",
      "Expo",
      "Qwik.js",
      "Sass"
    ],
    Libraries: [
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "ShadCN",
      "Material UI",
      "Ant Design",
    ],
    "Database & Backend": [
      "MongoDB",
      "Firebase",
      "PostgresSql",
    ],
    "Cloud & Deployment": [
      "Vercel",
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio Code",
      "pgAdmin4",
      "Mongo compass"
    ],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(([, value]) => value.SLUG === title) as
    | [string, IProjectData]
    | undefined
);
