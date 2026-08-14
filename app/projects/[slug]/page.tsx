import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProjectDetailAnimated } from "@/components/motion/project-detail-animated";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/content/projects";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <ProjectDetailAnimated project={project} />
      </main>
      <Footer />
    </>
  );
}
