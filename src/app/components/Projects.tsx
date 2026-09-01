import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "Project Name",
    category: "Photography",
    type: "Editorial Photography",
    image: "/projects/photography-01.jpg",
    slug: "project-name",
  },
  {
    title: "Project Name",
    category: "Photography",
    type: "Portrait Photography",
    image: "/projects/photography-02.jpg",
    slug: "project-name-2",
  },
  {
    title: "Project Name",
    category: "Videography",
    type: "Artist Visual",
    image: "/projects/video-01.jpg",
    slug: "project-name-3",
  },
  {
    title: "Project Name",
    category: "Videography",
    type: "Event Film",
    image: "/projects/video-02.jpg",
    slug: "project-name-4",
  },
  {
    title: "Project Name",
    category: "Graphic Design & Brand Identity",
    type: "Brand Identity",
    image: "/projects/branding-01.jpg",
    slug: "project-name-5",
  },
  {
    title: "Project Name",
    category: "Graphic Design & Brand Identity",
    type: "Campaign Design",
    image: "/projects/design-01.jpg",
    slug: "project-name-6",
  },
  {
    title: "Project Name",
    category: "Web Design & Development",
    type: "Website",
    image: "/projects/web-01.jpg",
    slug: "project-name-7",
  },
  {
    title: "Project Name",
    category: "Web Design & Development",
    type: "Digital Experience",
    image: "/projects/web-02.jpg",
    slug: "project-name-8",
  },
];

const CATEGORIES = [
  "Photography",
  "Videography",
  "Graphic Design & Brand Identity",
  "Web Design & Development",
];

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-bg-light py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
            Selected Work
          </p>

          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-6xl">
            A selection of work across
            <span className="text-accent"> image, motion, identity and digital.</span>
          </h2>
        </div>

        {/* Projects by category */}
        <div className="mt-20 space-y-20">

          {CATEGORIES.map((category) => {
            const categoryProjects = PROJECTS.filter(
              (project) => project.category === category
            );

            return (
              <div key={category}>

                {/* Category heading */}
                <div className="mb-7 flex items-center justify-between border-b border-black/15 pb-4">
                  <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-black">
                    {category}
                  </h3>

                  <span className="font-body text-[11px] text-black/40">
                    {String(categoryProjects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Projects */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {categoryProjects.map((project, index) => (
                    <Reveal
                      key={project.slug}
                      delay={index * 100}
                      className="group"
                    >
                      <Link href={`/work/${project.slug}`}>
                        <article>

                          <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                          </div>

                          <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-display text-xl text-black">
                                {project.title}
                              </h4>

                              <p className="mt-1 font-body text-xs text-black/50">
                                {project.type}
                              </p>
                            </div>

                            <span className="text-black/40 transition-colors group-hover:text-accent">
                              ↗
                            </span>
                          </div>

                        </article>
                      </Link>
                    </Reveal>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* View all */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/work"
            className="inline-flex rounded-full bg-black px-8 py-4 font-body text-[11px] uppercase tracking-[0.1em] text-bg-light transition-colors hover:bg-accent"
          >
            View all projects
          </Link>
        </div>

      </div>
    </section>
  );
}