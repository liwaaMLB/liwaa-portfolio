import type { SkillCategory } from "@/lib/types";

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "Java", "C", "SQL"],
  },
  {
    title: "Web / Backend",
    skills: ["Django", "ASP.NET", "REST APIs", "AJAX"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "Responsive Web Development"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Cursor"],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      "Cursor Agent",
      "Claude Code",
      "ChatGPT",
      "AI-assisted / agentic development workflows",
    ],
  },
  {
    title: "Cloud / AI Learning",
    skills: ["Microsoft Azure", "AI/ML infrastructure", "Data pipelines"],
    note: "Currently studying — not claimed as senior-level expertise.",
  },
];
