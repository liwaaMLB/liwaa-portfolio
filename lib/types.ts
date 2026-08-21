export type SiteLinks = {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  featured?: boolean;
  width?: number;
  height?: number;
};

export type ProjectCapability = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  status?: string;
  context?: string;
  description: string;
  overview?: string;
  contribution?: string;
  engineeringApproach?: string;
  aiDevelopmentNote?: string;
  technologies: readonly string[];
  technologiesNote?: string;
  features?: readonly string[];
  capabilities?: readonly ProjectCapability[];
  github?: string;
  live?: string;
  heroImage?: ProjectImage;
  gallery?: readonly ProjectImage[];
  confidentialityNote?: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  project: string;
  focus: string;
};

export type SkillCategory = {
  title: string;
  skills: readonly string[];
  note?: string;
};

export type LearningEntry = {
  title: string;
  provider: string;
  status: "In Progress" | "Completed";
  areas: readonly string[];
};
