import { cache } from "react";
import { ABOUT } from "./about";
import { EDUCATION } from "./education";
import { EXPERIENCE } from "./experience";
import { ALL_PROJECTS, HEADER, STATS } from "./header";
import { PROJECTS } from "./projects";
import { SKILLS } from "./skills";
import type { IProjectData } from "./types";

export type { IProjectData };

export const DATA = {
  HEADER,
  STATS,
  ABOUT,
  EXPERIENCE,
  PROJECTS,
  ALL_PROJECTS,
  SKILLS,
  EDUCATION,
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(([, value]) => value.SLUG === title) as
      | [string, IProjectData]
      | undefined
);
