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
    heroImage: {
      src: "/projects/aquarium-planet/hero.png",
      alt: "Aquarium Planet homepage hero section with the headline \"Enter a world beneath the surface\" over an underwater reef scene",
    },
    gallery: [
      {
        src: "/projects/aquarium-planet/categories.png",
        alt: "Aquarium Planet category browsing section with curated collections for livestock, aquariums, and equipment",
        label: "Category Browsing",
      },
      {
        src: "/projects/aquarium-planet/story.png",
        alt: "Aquarium Planet brand story section with immersive underwater photography and narrative copy",
        label: "Brand Story",
      },
    ],
  },
  {
    slug: "motionmate",
    number: "02",
    title: "MotionMate",
    category: "Senior Project — Physiotherapy Clinic Management Platform",
    context: "Senior university project",
    description:
      "A full-stack clinic management platform for physiotherapy and rehabilitation clinics, built with Django and PostgreSQL — bringing patient management, appointments, clinical documentation, treatment planning, billing, reporting, and AI-assisted treatment and home-exercise workflows into one system.",
    overview:
      "MotionMate is my senior university project — a full-stack clinic management platform for physiotherapy and rehabilitation clinics, built with Django and PostgreSQL. It brings patient management, appointment scheduling, clinical assessments and diagnosis, treatment planning, SOAP documentation, billing, reporting, files, and team collaboration into a single role-based system, with AI-assisted functionality supporting — never replacing — clinical decision-making in treatment planning and home exercise programs.",
    engineeringApproach:
      "MotionMate is built as a full-stack Django application on a PostgreSQL relational database, structured around interconnected clinical and administrative modules rather than isolated screens — a patient's diagnosis, treatment plan, goals, SOAP notes, home exercises, files, and invoices all reference the same underlying records. Role-based access control shapes what each clinic member can see and act on, from therapists managing their own patients to administrative staff handling billing and scheduling. AI-assisted features are integrated as a supporting layer within the treatment-planning and home-exercise workflows, generating starting points the clinician reviews, edits, and approves before they reach a patient.",
    technologies: ["Django", "PostgreSQL", "JavaScript", "AI-assisted functionality"],
    capabilities: [
      {
        title: "Patient Management",
        description:
          "Centralized patient records connecting medical history, clinical assessments, and treatment history in one place.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "Clinic-wide scheduling across therapists, with day and week views and live appointment status.",
      },
      {
        title: "Clinical Assessments & Diagnosis",
        description:
          "Structured assessments and anatomy-based diagnosis records that ground every treatment plan in a documented clinical picture.",
      },
      {
        title: "Treatment Planning & Goals",
        description:
          "Structured treatment plans built around clinical goals and interventions, with AI-assisted plan generation supporting — not replacing — the clinician's judgment.",
      },
      {
        title: "SOAP Notes",
        description:
          "Standardized SOAP documentation for tracking patient progress and clinical decisions across sessions.",
      },
      {
        title: "AI-Assisted Home Exercise Programs",
        description:
          "AI-assisted generation of home exercise programs with progression and re-evaluation support, exportable as patient-ready PDFs.",
      },
      {
        title: "Billing & Invoices",
        description:
          "Billing and invoice management tied directly to patient records and treatment history.",
      },
      {
        title: "Files & Clinical Documents",
        description:
          "Centralized storage for clinical files and documents attached to each patient's record.",
      },
      {
        title: "Reports & Statistics",
        description:
          "Clinic-wide reports and statistics giving therapists and administrators visibility into operations.",
      },
      {
        title: "Clinic Feed & Collaboration",
        description:
          "An internal feed for clinic announcements, tasks, and clinical resources, keeping the team aligned.",
      },
      {
        title: "Role-Based Clinic Workflows",
        description:
          "Role-based access control shaping how admins, therapists, and staff interact with the system.",
      },
    ],
    heroImage: {
      src: "/projects/motionmate/hero.png",
      alt: "MotionMate marketing homepage introducing a cloud-based rehabilitation workspace with clinical documentation, a clinic feed, and AI assistance built in",
    },
    gallery: [
      {
        src: "/projects/motionmate/dashboard.png",
        alt: "MotionMate clinic dashboard showing total patients, today's appointments, treatment plans, pending payments, service distribution, and monthly performance",
        label: "Clinic Dashboard",
        caption:
          "The therapist's daily workspace — patient counts, appointments, treatment plans, and clinic performance at a glance.",
        featured: true,
      },
      {
        src: "/projects/motionmate/treatment-plan.png",
        alt: "MotionMate treatment plan screen with service details, treatment goals, intervention plan, modalities, and an AI-generated treatment plan action",
        label: "Treatment Planning",
        caption:
          "Structured treatment plans — service details, goals, manual therapy, and modalities — with AI-assisted plan generation to support the clinician's decisions.",
      },
      {
        src: "/projects/motionmate/ai-home-exercises.png",
        alt: "MotionMate home exercise program screen with AI-generated exercises, patient education, progression, re-evaluation, and PDF export",
        label: "AI-Assisted Home Exercises",
        caption:
          "AI-assisted home exercise generation with progression, re-evaluation, and discharge criteria, exportable as a patient-ready PDF.",
      },
      {
        src: "/projects/motionmate/appointments.png",
        alt: "MotionMate appointments screen showing a day-view schedule across multiple therapists with confirmed, pending, and completed counts",
        label: "Appointment Scheduling",
        caption:
          "Clinic-wide scheduling across therapists, with day and week views and live appointment status.",
      },
      {
        src: "/projects/motionmate/clinic-feed.png",
        alt: "MotionMate clinic feed showing team posts, tasks, announcements, clinical library resources, and team activity",
        label: "Clinic Feed",
        caption:
          "An internal feed for tasks, announcements, and clinical resources, keeping the clinic team aligned.",
      },
    ],
  },
  {
    slug: "identica",
    number: "03",
    title: "Identica",
    category: "Dental Clinic Management Platform",
    context: "Internship Project — Rodok",
    description:
      "A web-based dental clinic management platform built during my internship at Rodok, bringing together patient management, appointments, treatment tracking, billing, clinical files, and patient-facing services.",
    overview:
      "Identica is a web-based dental clinic management platform designed to centralize clinical and administrative workflows. The system brings together patient management, appointments, treatment tracking, billing, clinical files, communication, and patient-facing services within one unified platform.",
    contribution:
      "During my internship at Rodok, I contributed to the development and refinement of several parts of the Identica platform, working across functional workflows, interface implementation, and system behavior.",
    technologies: ["REST APIs", "AJAX"],
    capabilities: [
      {
        title: "Patient Management",
        description:
          "Centralized patient records bringing together personal information, medical history, and treatment history in one place.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "Clinic-wide appointment scheduling across dentists and staff, keeping the daily schedule organized.",
      },
      {
        title: "Treatment Planning & Progress",
        description:
          "Structured treatment plans that track diagnoses, procedures, and progress across visits.",
      },
      {
        title: "Interactive Dental Chart",
        description:
          "A visual, tooth-by-tooth chart for recording diagnoses and following treatment status by tooth.",
      },
      {
        title: "Billing & Invoices",
        description:
          "Invoice generation and billing management tied directly to each patient's treatment records.",
      },
      {
        title: "Files & X-Rays",
        description:
          "Centralized storage for clinical files, X-rays, and diagnostic images attached to each patient record.",
      },
      {
        title: "Notifications & Messaging",
        description:
          "In-platform notifications and messaging keeping clinic staff and patients informed and connected.",
      },
      {
        title: "Patient Portal",
        description:
          "A dedicated patient-facing workspace for viewing treatment information, appointments, and billing.",
      },
      {
        title: "Reports & Statistics",
        description:
          "Clinic-wide reports and statistics giving staff visibility into appointments, treatments, and billing activity.",
      },
      {
        title: "Role-Based Clinic Workflows",
        description:
          "Role-based access shaping how Admin Dentists, Dentists, Assistants, and Patients interact with the system.",
      },
    ],
    heroImage: {
      src: "/projects/identica/hero.png",
      alt: "Identica dental clinic management platform hero view",
    },
    gallery: [
      {
        src: "/projects/identica/admin-dashboard.png",
        alt: "Identica admin dentist dashboard showing patients, appointments, invoices, notifications, and messaging",
        label: "Admin Dentist Dashboard",
        caption:
          "A centralized clinic overview providing access to patients, appointments, invoices, notifications, messaging, and clinical workflows.",
        featured: true,
      },
      {
        src: "/projects/identica/dental-chart.png",
        alt: "Identica interactive dental chart used to record diagnoses and track treatment progress by tooth",
        label: "Dental Chart & Treatment Tracking",
        caption:
          "A dental-specific clinical workflow for visualizing teeth, recording diagnoses, and following treatment progress.",
      },
      {
        src: "/projects/identica/patient-portal.png",
        alt: "Identica patient portal showing treatment information, appointments, billing, and clinical files",
        label: "Patient Portal",
        caption:
          "A dedicated patient-facing workspace for accessing treatment information, appointments, billing, medical records, and clinical files.",
      },
    ],
    confidentialityNote:
      "Selected interfaces are shown for portfolio demonstration. Additional implementation details and internal workflows are not presented in accordance with company confidentiality requirements.",
  },
  {
    slug: "bloodconnect",
    number: "04",
    title: "BloodConnect",
    category: "Blood Donation Management Platform",
    context: "Full-Stack Web Application",
    description:
      "A web-based blood donation management platform connecting blood donors with hospitals and blood requests through a centralized, role-based system.",
    overview:
      "BloodConnect is a web-based blood donation management platform designed to connect blood donors with hospitals and blood requests through a centralized system. The platform supports donor discovery, hospital blood-request workflows, administrative management, availability tracking, and platform-level monitoring. The system provides dedicated experiences for different types of users, allowing donors, hospitals, and platform administrators to interact with the workflows relevant to their roles.",
    engineeringApproach:
      "BloodConnect is structured as a full-stack ASP.NET web application organized around role-based workflows rather than a single shared interface — donors, hospitals, and platform administrators each get dedicated views and permissions matched to what they need to do. Hospitals can search and filter available donors by location and blood type, create and manage blood requests, and monitor operations through a dedicated dashboard covering requested and received units, pending requests, and successful matches. Donor availability is tracked directly so hospitals can distinguish donors who are currently reachable from those who are not, and configurable notification preferences surface donor matches, request updates, and urgent or critical blood-availability alerts. A platform-administration layer sits above the hospital and donor experiences, giving platform owners visibility into registered hospitals, donors, requests, users, and overall activity, alongside statistics and reporting on donation and request trends.",
    technologies: ["ASP.NET"],
    capabilities: [
      {
        title: "Donor Search",
        description:
          "Search and filter available donors by location and blood type.",
      },
      {
        title: "Donor Availability",
        description:
          "Distinguish available and currently unavailable donors to support more relevant matching.",
      },
      {
        title: "Blood Requests",
        description:
          "Hospital-side workflows for creating and managing blood requests.",
      },
      {
        title: "Hospital Dashboard",
        description:
          "Operational overview of requested units, received units, pending requests, successful matches, trends, and alerts.",
      },
      {
        title: "Hospital Management",
        description:
          "Dedicated hospital portal for managing institutional information and blood donation workflows.",
      },
      {
        title: "Notification Preferences",
        description:
          "Configurable alerts for donor matches, request updates, urgent requests, and critical blood availability.",
      },
      {
        title: "Team Management",
        description:
          "Hospital-side management of users with different operational roles.",
      },
      {
        title: "Platform Administration",
        description:
          "Higher-level administration for hospitals, donors, requests, users, and platform activity.",
      },
      {
        title: "Statistics & Reporting",
        description:
          "Visual monitoring of donation activity, requests, user distribution, and other platform indicators.",
      },
      {
        title: "Role-Based Access",
        description:
          "Separate interfaces and workflows for different platform users.",
      },
    ],
    heroImage: {
      src: "/projects/bloodconnect/hero.png",
      alt: "BloodConnect marketing homepage with the headline \"Be a Hero. Donate Blood.\", search-for-a-donor and become-a-donor actions, and a Join Our Lifesaving Community section",
      width: 1052,
      height: 1280,
    },
    gallery: [
      {
        src: "/projects/bloodconnect/hospital-dashboard.png",
        alt: "BloodConnect hospital portal dashboard showing total units requested and received, pending requests, successful match rate, a request trends chart, demand by blood type, recent requests, and alerts",
        label: "Hospital Operations Dashboard",
        caption:
          "A centralized operational view of blood requests, received units, pending cases, successful matches, demand by blood type, recent requests, and alerts.",
        featured: true,
        width: 1138,
        height: 1280,
      },
      {
        src: "/projects/bloodconnect/donor-search.png",
        alt: "BloodConnect donor search page with location and blood type filters and a grid of donor results, with some donors marked as currently not available",
        label: "Donor Discovery",
        caption:
          "Search and filter donors by location and blood type while clearly distinguishing current donor availability.",
        width: 968,
        height: 1280,
      },
      {
        src: "/projects/bloodconnect/owner-dashboard.png",
        alt: "BloodConnect owner panel showing platform statistics for registered users, donations, active hospitals, and team members, alongside platform activity trends and a user role distribution chart",
        label: "Platform Administration",
        caption:
          "A high-level administrative view of registered users, donations, hospitals, platform activity, role distribution, and recent administrative actions.",
        width: 1170,
        height: 1027,
      },
      {
        src: "/projects/bloodconnect/hospital-settings.png",
        alt: "BloodConnect hospital settings page with hospital profile details, notification preference toggles for email and SMS alerts, and a team management table",
        label: "Hospital & Team Management",
        caption:
          "Hospital profile configuration, notification preferences, and role-based team management within the hospital portal.",
        width: 698,
        height: 1280,
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
