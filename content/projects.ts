import type { Project } from "@/lib/types";

export const projects: readonly Project[] = [
  {
    slug: "aquarium-planet",
    number: "01",
    title: "Aquarium Planet",
    category: "Full-Stack E-Commerce Platform",
    status: "Currently in development",
    description:
      "A modern e-commerce web application for an aquarium and fish business, designed around product discovery, shopping workflows, responsive interfaces, and maintainable application architecture.",
    overview:
      "Aquarium Planet is an in-progress e-commerce platform focused on helping customers discover aquarium products and complete shopping workflows through a clean, responsive interface and maintainable full-stack architecture.",
    aiDevelopmentNote:
      "This project is being developed using modern AI-assisted and agentic development workflows — including Cursor, Claude Code, Git-based development, planning, implementation, review, and iteration. All code is developed and reviewed by me; AI tools support the workflow rather than replacing engineering judgment.",
    technologies: [],
    technologiesNote: "Technology stack is being finalized as the project develops.",
  },
  {
    slug: "motionmate",
    number: "02",
    title: "MotionMate",
    category: "Senior Project — Physiotherapy Clinic Management Platform",
    context: "Senior university project",
    description:
      "A comprehensive clinic management platform designed around real physiotherapy workflows, helping clinics manage patients, appointments, clinical documentation, treatment workflows, billing, reporting, and internal operations.",
    overview:
      "MotionMate is my senior university project — a clinic management platform built around real physiotherapy workflows, covering patient management, appointments, clinical documentation, billing, reporting, and internal operations.",
    technologies: ["Django", "PostgreSQL", "JavaScript", "AI-assisted functionality"],
  },
  {
    slug: "identica",
    number: "03",
    title: "Identica",
    category: "Dental Clinic Management System",
    context: "Developed during software development internship at RODOK SARL",
    description:
      "A full-stack clinic management platform designed to support dental clinic operations through structured workflows and role-based access.",
    overview:
      "Identica is a full-stack dental clinic management system developed during my internship at RODOK SARL, focused on structured clinic workflows and role-based access for different staff and patient roles.",
    technologies: [],
    features: [
      "Role-based access for Admin Dentist, Dentist, Assistant, and Patient",
      "Database architecture",
      "Appointment workflows",
      "Medical and patient records",
      "Dynamic data handling using REST/AJAX concepts",
      "System architecture focused on real clinic workflows",
    ],
  },
  {
    slug: "blood-donation",
    number: "04",
    title: "Blood Donation Management System",
    category: "ASP.NET Web Application",
    context: "Developed during software development internship at TechTalks",
    description:
      "A web-based system for managing blood donors and blood donation requests.",
    overview:
      "A web-based blood donation management system developed during my internship at TechTalks, supporting donor management and blood donation request workflows.",
    technologies: ["ASP.NET"],
    features: [
      "ASP.NET development",
      "Backend logic",
      "Database connectivity",
      "User interface development",
      "Full application workflow",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
