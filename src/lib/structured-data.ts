import { DATA } from "@/app/data";
import { SITE_URL } from "./site";

const { HEADER, SKILLS, EXPERIENCE } = DATA;

const [employer, employerData] = Object.entries(EXPERIENCE)[0];

const skills = Array.from(
  new Set(
    Object.values(SKILLS)
      .flat()
      .filter((skill) => skill.length <= 24)
  )
);

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: HEADER.NAME,
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack engineer with ~3 years of experience building production web and mobile applications with React, Next.js, Node.js and Express.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  email: `mailto:${HEADER.EMAIL}`,
  telephone: `+${HEADER.PHONE.replace(/\D/g, "")}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: employer,
    url: employerData.WEBSITE,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "IGNOU",
  },
  knowsAbout: skills,
  sameAs: [HEADER.GITHUB, HEADER.LINKEDIN],
};
