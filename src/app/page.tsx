"use client";

import { DATA } from "@/app/data";
import {
  AboutMe,
  Experience,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
} from "@/components/sections";

export default function Page() {
  return (
    <div className="bg-background text-foreground mx-auto px-4 w-full lg:w-2/3 xl:w-1/2 pt-6 sm:pt-12">
      <Navbar />

      <main className="min-h-lvh px-4">
        <Header data={DATA.HEADER} />
        <AboutMe data={DATA.ABOUT_ME} />
        <Experience data={DATA.EXPERIENCE} />
        <Projects
          data={DATA.PROFFESIONALPROJECTS}
          title="professional projects"
        />
        <Projects
          data={DATA.PROJECTS}
          all={DATA.ALL_PROJECTS}
          title="personal projects"
        />
        <Skills data={DATA.SKILLS} />
        <Footer />
      </main>
    </div>
  );
}
