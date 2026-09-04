import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
  size: "small" | "medium" | "large" | "wide";
  objectPosition?: string;
  href: string;
};

const projects: Project[] = [
  // ---------------------------------------------------------
  // PHOTOGRAPHY
  // ---------------------------------------------------------

  {
    title: "Editorial Series",
    category: "Photography",
    year: "2026",
    image: "/portfolio/photography/editorial/01.jpg",
    aspect: "portrait",
    size: "large",
    objectPosition: "center",
    href: "/work/editorial-series",
  },

  {
    title: "Portrait Study",
    category: "Photography",
    year: "2026",
    image: "/portfolio/photography/portraits/01.jpg",
    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
    href: "/work/portrait-study",
  },

  {
    title: "Landscape Series",
    category: "Photography",
    year: "2026",
    image: "/portfolio/photography/landscape/01.jpg",
    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
    href: "/work/landscape-series",
  },

  // ---------------------------------------------------------
  // VIDEOGRAPHY
  // ---------------------------------------------------------

  {
    title: "Artist Visual",
    category: "Videography",
    year: "2026",
    image: "/portfolio/video/artist-visual/thumbnail.jpg",
    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
    href: "/work/artist-visual",
  },

  {
    title: "Social Film",
    category: "Videography",
    year: "2026",
    image: "/portfolio/video/social-film/thumbnail.jpg",
    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
    href: "/work/social-film",
  },

  // ---------------------------------------------------------
  // GRAPHIC / BRAND
  // ---------------------------------------------------------

  {
    title: "Brand Campaign",
    category: "Brand Identity",
    year: "2026",
    image: "/portfolio/branding/brand-campaign/01.jpg",
    aspect: "square",
    size: "medium",
    objectPosition: "center",
    href: "/work/brand-campaign",
  },

  // ---------------------------------------------------------
  // WEB
  // ---------------------------------------------------------

  {
    title: "Aurevo",
    category: "Web Design & Development",
    year: "2026",
    image: "/portfolio/web/aurevo/01.jpg",
    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
    href: "/work/aurevo",
  },
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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-bg-light">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="px-6 pb-16 pt-36 sm:px-8 md:px-10 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl">

          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-black/50">
            Khethiwe Creatives
          </p>

          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
              Selected
              <span className="text-accent"> work.</span>
            </h1>

            <p className="max-w-sm font-body text-sm leading-relaxed text-black/60">
              A collection of photography, film, design, branding and digital
              experiences created by Khethiwe Creatives.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="border-y border-black/10 px-6 sm:px-8 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto py-5">

          <button className="whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] text-black">
            All Work
          </button>

          <button className="whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-accent">
            Photography
          </button>

          <button className="whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-accent">
            Videography
          </button>

          <button className="whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-accent">
            Graphic Design
          </button>

          <button className="whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-accent">
            Brand Identity
          </button>

          <button className="whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] text-black/40 transition-colors hover:text-accent">
            Web Design & Development
          </button>

        </div>
      </section>

      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-12 md:gap-y-20">

            {projects.map((project) => (
              <article
                key={project.title}
                className={`group col-span-1 ${sizeClasses[project.size]}`}
              >
                <Link
                  href={project.href}
                  className="block"
                >

                  {/* Media */}

                  <div
                    className={`relative w-full overflow-hidden bg-black/5 ${aspectClasses[project.aspect]}`}
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

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  </div>

                  {/* Information */}

                  <div className="mt-4 flex items-start justify-between gap-6">

                    <div>
                      <h2 className="font-display text-lg tracking-tight text-black">
                        {project.title}
                      </h2>

                      <p className="mt-1 font-body text-[10px] uppercase tracking-[0.12em] text-black/45">
                        {project.category}
                      </p>
                    </div>

                    <span className="font-body text-[10px] uppercase tracking-[0.12em] text-black/40">
                      {project.year}
                    </span>

                  </div>

                </Link>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <section className="border-t border-black/10 px-6 py-24 sm:px-8 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">

          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-black/40">
            Have a project in mind?
          </p>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h2 className="max-w-3xl font-display text-4xl leading-[1] tracking-tight text-black sm:text-5xl md:text-6xl">
              Let's create something
              <span className="text-accent"> worth seeing.</span>
            </h2>

            <Link
              href="/#contact"
              className="inline-flex w-fit rounded-full bg-black px-7 py-3.5 font-body text-[10px] uppercase tracking-[0.12em] text-bg-light transition-colors hover:bg-accent"
            >
              Start a project
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}