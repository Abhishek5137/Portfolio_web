export type SectionHeadingProps = {
  title: string;
  subtitle?: string;
}

export type SkillCategory = {
  name: string;
  skills: string[];
}

export type Education = {
  degree: string;
  school: string;
  duration: string;
  description?: string;
}

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string; // Optional field for project demos or repositories
};