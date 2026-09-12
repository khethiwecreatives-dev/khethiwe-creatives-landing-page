import { notFound } from "next/navigation";
import VideoPlayer from "../../components/VideoPlayer";
import { getProjectBySlug } from "@/src/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">

        {/* Project Category */}
        <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
          {project.category}
        </p>

        {/* Project Title */}
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-black md:text-6xl">
          {project.title}
        </h1>

        {/* Project Type */}
        <p className="mt-3 font-body text-sm text-black/50">
          {project.type}
        </p>

        {/* ======================================================
            PROJECT MEDIA
            ====================================================== */}

        <div className="mt-12">
          {project.media.video ? (
            <VideoPlayer
            src={project.media.video}
            poster={project.media.thumbnail}
            title={project.title}
            />
            ) : project.media.image ? (
            <div className="relative overflow-hidden">
            <img
            src={project.media.image}
            alt={project.title}
            className="h-auto w-full"
            />
            </div>
            ) : null}
           </div>

        {/* ======================================================
            DESCRIPTION
            ====================================================== */}

        {project.description && (
          <div className="mt-12 max-w-2xl">
            <p className="font-body text-base leading-relaxed text-black/70">
              {project.description}
            </p>
          </div>
        )}

        {/* ======================================================
            SERVICES
            ====================================================== */}

        {project.services && project.services.length > 0 && (
          <div className="mt-10">
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-black/40">
              Services
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-black/15 px-4 py-2 font-body text-xs text-black/70"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}