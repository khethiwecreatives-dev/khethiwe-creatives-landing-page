import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";

type Project = {
  title: string;
  category: string;
  type: string;
  image: string;
  slug: string;

  // Controls the shape of the media
  aspect: "portrait" | "landscape" | "square";

  // Controls how much space the project occupies
  size: "small" | "medium" | "large" | "wide";

  // Controls where the image sits inside its frame
  objectPosition?: string;
};

const projects: Project[] = [
  // ============================================================
  // PHOTOGRAPHY
  // ============================================================

  {
    title: "CHPTR IV - Chriselda",
    category: "Photography",
    type: "Editorial Photography",
    image: "/portfolio/photography/Editorial/Chriselda--BY-01.jpg",
    slug: "chptr-iv-chriselda",

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  {
    title: "Teekay & Nokwanda Couple Moment",
    category: "Photography",
    type: "Portrait Photography",
    image: "/portfolio/photography/portrait/TK--Nokwanda-01.jpg",
    slug: "teekay-nokwanda-couple-moment",

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  // ============================================================
  // VIDEOGRAPHY
  // ============================================================

  {
    title: "Long Target - Ngimuhle (Cover)",
    category: "Videography",
    type: "Music Video",
    image:
      "/portfolio/videography/artistVisuals/LongTarget-Ngimuhle Cover.jpg",
    slug: "long-target-ngimuhle",

    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
  },

  {
    title: "Sellwane",
    category: "Videography",
    type: "Editorial Short Clip",
    image:
      "/portfolio/videography/editorial/Sellwane-EditorialWalk.png",
    slug: "sellwane",

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  // ============================================================
  // GRAPHIC DESIGN & BRAND IDENTITY
  // ============================================================

  {
    title: "Project Name",
    category: "Graphic Design & Brand Identity",
    type: "Brand Identity",
    image: "/projects/branding-01.jpg",
    slug: "project-name-5",

    aspect: "square",
    size: "medium",
    objectPosition: "center",
  },

  {
    title: "Project Name",
    category: "Graphic Design & Brand Identity",
    type: "Campaign Design",
    image: "/projects/design-01.jpg",
    slug: "project-name-6",

    aspect: "landscape",
    size: "medium",
    objectPosition: "center",
  },

  // ============================================================
  // WEB DESIGN & DEVELOPMENT
  // ============================================================

  {
    title: "Project Name",
    category: "Web Design & Development",
    type: "Website",
    image: "/projects/web-01.jpg",
    slug: "project-name-7",

    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
  },

  {
    title: "Project Name",
    category: "Web Design & Development",
    type: "Digital Experience",
    image: "/projects/web-02.jpg",
    slug: "project-name-8",

    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
  },
];

const CATEGORIES = [
  "Photography",
  "Videography",
  "Graphic Design & Brand Identity",
  "Web Design & Development",
];

const aspectClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
};

const sizeClasses = {
  small: "md:col-span-4",
  medium: "md:col-span-6",
  large: "md:col-span-8",
  wide: "md:col-span-12",
};

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-bg-light py-10 md:py-15"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
            Selected Work
          </p>

          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-6xl">
            A selection of work across
            <span className="text-accent">
              {" "}
              image, motion, identity and digital.
            </span>
          </h2>
        </div>

        {/* ======================================================
            PROJECTS BY CATEGORY
        ====================================================== */}

        <div className="mt-20 space-y-24">

          {CATEGORIES.map((category) => {
            const categoryProjects = projects.filter(
              (project) => project.category === category
            );

            // Don't render empty categories
            if (categoryProjects.length === 0) {
              return null;
            }

            return (
              <div key={category}>

                {/* ==================================================
                    CATEGORY HEADING
                ================================================== */}

                <div className="mb-7 flex items-center justify-between border-b border-black/15 pb-4">
                  <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-black">
                    {category}
                  </h3>

                  <span className="font-body text-[11px] text-black/40">
                    {String(categoryProjects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* ==================================================
                    PROJECT GRID
                ================================================== */}

                <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-20">

                  {categoryProjects.map((project, index) => (

                    <Reveal
                      key={project.slug}
                      delay={index * 100}
                      className={`group col-span-1 ${sizeClasses[project.size]}`}
                    >

                      <Link href={`/work/${project.slug}`}>
                        <article>

                          {/* ==================================================
                              IMAGE
                          ================================================== */}

                          <div
                            className={`relative w-full overflow-hidden bg-black/5 ${
                              aspectClasses[project.aspect]
                            }`}
                          >

                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="
                                (max-width: 768px) 100vw,
                                (max-width: 1200px) 66vw,
                                1200px
                              "
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                              style={{
                                objectPosition:
                                  project.objectPosition || "center",
                              }}
                            />

                            {/* Hover overlay */}

                            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                          </div>

                          {/* ==================================================
                              PROJECT INFORMATION
                          ================================================== */}

                          <div className="mt-4 flex items-start justify-between gap-4">

                            <div>

                              <h4 className="font-display text-xl tracking-tight text-black">
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

        {/* ======================================================
            VIEW ALL
        ====================================================== */}

        <div className="mt-20 flex justify-center">

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