"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import BackButton from "../components/BackButton";
import BackToTop from "../components/BackToTop";

import { projects, CATEGORIES } from "@/src/lib/projects";

const SUBCATEGORIES: Record<string, string[]> = {
  Photography: [
    "Portraits",
    "Editorial",
    "Events",
    "Artist Photography",
  ],

  Videography: [
    "Artist Visuals",
    "Editorial",
    "Cinematic Short Films",
  ],

  "Graphic Design & Brand Identity": [
    "Music Cover Art",
    "Poster Designs",
    "Marketing Design",
  ],
};

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
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Work") {
      return projects;
    }

    const categoryProjects = projects.filter(
      (project) => project.category === activeCategory
    );

    if (activeSubcategory === "All") {
      return categoryProjects;
    }

    return categoryProjects.filter(
      (project) => project.subcategory === activeSubcategory
    );
  }, [activeCategory, activeSubcategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveSubcategory("All");
  };

  const subcategories =
    SUBCATEGORIES[activeCategory] || [];

  return (
    <main className="min-h-screen bg-bg-light">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="px-6 pb-16 pt-36 sm:px-8 md:px-10 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl">

          <BackButton />
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-black/50">
            Khethiwe Creatives
          </p>

          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
              Selected
              <span className="text-accent"> work.</span>
            </h1>

            <p className="max-w-sm font-body text-sm leading-relaxed text-black/60">
              A collection of photography, film, design,
              branding and digital experiences created by
              Khethiwe Creatives.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN CATEGORY NAVIGATION
      ===================================================== */}

      <section className="border-y border-black/10 px-6 sm:px-8 md:px-10">

        <div className="mx-auto max-w-6xl overflow-x-auto">

          <div className="flex min-w-max items-center gap-6 py-5">

            <button
              type="button"
              onClick={() =>
                handleCategoryChange("All Work")
              }
              className={`whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] transition-colors ${
                activeCategory === "All Work"
                  ? "text-black"
                  : "text-black/40 hover:text-accent"
              }`}
            >
              All Work
            </button>

            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] transition-colors ${
                  activeCategory === category
                    ? "text-black"
                    : "text-black/40 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SUB NAVIGATION
      ===================================================== */}

      {subcategories.length > 0 && (
        <section className="border-b border-black/10 px-6 sm:px-8 md:px-10">

          <div className="mx-auto max-w-6xl overflow-x-auto">

            <div className="flex min-w-max items-center gap-5 py-4">

              <span className="mr-2 font-body text-[9px] uppercase tracking-[0.16em] text-black/30">
                {activeCategory}
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveSubcategory("All")
                }
                className={`whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] transition-colors ${
                  activeSubcategory === "All"
                    ? "text-accent"
                    : "text-black/40 hover:text-black"
                }`}
              >
                All
              </button>

              {subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  type="button"
                  onClick={() =>
                    setActiveSubcategory(subcategory)
                  }
                  className={`whitespace-nowrap font-body text-[10px] uppercase tracking-[0.12em] transition-colors ${
                    activeSubcategory === subcategory
                      ? "text-accent"
                      : "text-black/40 hover:text-black"
                  }`}
                >
                  {subcategory}
                </button>
              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          ACTIVE FILTER
      ===================================================== */}

      <section className="px-6 pt-12 sm:px-8 md:px-10">

        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <p className="font-body text-[10px] uppercase tracking-[0.16em] text-black/40">
            {activeCategory === "All Work"
              ? "All Work"
              : activeSubcategory === "All"
              ? activeCategory
              : `${activeCategory} / ${activeSubcategory}`}
          </p>

          <p className="font-body text-[10px] uppercase tracking-[0.12em] text-black/30">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1
              ? "Project"
              : "Projects"}
          </p>

        </div>

      </section>


      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <section className="px-6 py-14 sm:px-8 md:px-10 md:py-20">

        <div className="mx-auto max-w-6xl">

          {filteredProjects.length > 0 ? (

            <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-12 md:gap-y-20">

              {filteredProjects.map((project) => (

                <article
                  key={project.slug}
                  className={`group col-span-1 ${sizeClasses[project.size]}`}
                >

                  <Link
                    href={`/work/${project.slug}`}
                    className="block"
                  >

                    {/* Media */}

                    <div
                      className={`relative w-full overflow-hidden bg-black/5 ${aspectClasses[project.aspect]}`}
                    >

                      <Image
                        src={project.media.thumbnail}
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
                            project.objectPosition ||
                            "center",
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
                          {project.subcategory
                            ? ` / ${project.subcategory}`
                            : ""}
                        </p>

                      </div>

                      <span className="font-body text-[10px] uppercase tracking-[0.12em] text-black/40">
                        2026
                      </span>

                    </div>

                  </Link>

                </article>

              ))}

            </div>

          ) : (

            <div className="py-24 text-center">

              <p className="font-display text-2xl tracking-tight text-black">
                No projects yet.
              </p>

              <p className="mt-3 font-body text-sm text-black/50">
                More work will be added soon.
              </p>

            </div>

          )}

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
              <span className="text-accent">
                {" "}worth seeing.
              </span>
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
      <BackToTop />
    </main>
  );
}

