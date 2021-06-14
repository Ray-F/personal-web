interface ProjectTheme {
  bgColour: string,
  colour: string
}

type Url = string;

interface Project {
  name: string
  link: Url
  description: string
  highlights: string[]
  technology: string[]
  role: string
  workPeriod: string
  purpose: string
  theme: ProjectTheme
}

export type {
  Project,
  ProjectTheme,
};
