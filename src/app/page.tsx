import { DATA, IProjectData } from "@/app/data";
import {
  AboutMe,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
} from "@/components/sections";

const projects = Object.entries(DATA.PROJECTS) as [string, IProjectData][];

const workProjects = Object.fromEntries(
  projects.filter(([, project]) => project.CATEGORY === "work")
);

const personalProjects = Object.fromEntries(
  projects.filter(([, project]) => project.CATEGORY === "personal")
);

export default function Page() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 pb-4 sm:px-10">
        <Header />
        <AboutMe />
        <Experience data={DATA.EXPERIENCE} />
        <Projects
          id="work"
          eyebrow="selected work"
          title="Production applications, with the numbers attached."
          description="Client and product work — user scale, payments and performance."
          data={workProjects}
        />
        <Projects
          id="projects"
          eyebrow="side projects"
          title="Smaller builds, built for the fun of it."
          description="Experiments with interfaces, tooling and ideas."
          data={personalProjects}
          all={DATA.ALL_PROJECTS}
        />
        <Skills data={DATA.SKILLS} />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
