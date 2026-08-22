import type { SiteLinks } from "@/lib/types";

export const site = {
  name: "Liwaa Aljaramani",
  greeting: "Hi, I'm Liwaa.",
  title: "Software Engineer & Full-Stack Developer",
  description:
    "I build modern web applications and software solutions with a focus on clean architecture, usability, and AI-assisted development.",
  availability: "Open to software engineering opportunities",
  location: "Mount Lebanon, Lebanon",
  links: {
    github: "https://github.com/liwaaMLB",
    linkedin: "https://www.linkedin.com/in/liwaa-al-jaramani-033907262",
    email: "mailto:lewaamalaeb122@gmail.com",
    resume: "/resume/Liwaa_Aljaramani_CV.pdf",
  } satisfies SiteLinks,
} as const;

export const about = {
  paragraphs: [
    "I am a Business Computing graduate from the Lebanese University, Faculty of Technology, with a focus on software engineering and full-stack web development.",
    "I enjoy building real-world systems — from backend and database architecture to responsive interfaces — and solving practical problems through structured, maintainable code.",
    "Alongside traditional development, I am increasingly working with AI-assisted and agentic development workflows to plan, implement, review, and iterate on software more effectively.",
  ],
} as const;
