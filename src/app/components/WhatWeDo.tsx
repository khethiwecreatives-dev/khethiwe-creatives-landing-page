import Reveal from "./Reveal";

const DISCIPLINES = [
  {
    number: "01",
    title: "Photography",
    description:
      "Images that give people, products, places and moments a distinct visual presence.",
  },
  {
    number: "02",
    title: "Videography",
    description:
      "Moving images that capture attention, communicate stories and bring ideas to life.",
  },
  {
    number: "03",
    title: "Graphic Design & Brand Identity",
    description:
      "Visual identities and design that make businesses, artists and personal brands recognisable.",
  },
  {
    number: "04",
    title: "Web Design & Development",
    description:
      "Digital experiences that connect your vision with the people you're trying to reach.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-bg-light py-2 md:py-2"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Introduction */}
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
              What We Do
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-display text-xl md:text-2xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-6xl">
              We shape the way your
              <span className="text-accent"> vision is seen.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm font-body text-base leading-relaxed text-black/60 md:text-lg">
              From the first frame to the final pixel, we create visual work that gives people,
              businesses, artists and ideas a stronger presence.
            </p>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-20 border-t grid grid-cols-2 md:grid-cols-4 border-black/15">
          {DISCIPLINES.map((discipline, index) => (
            <Reveal
              key={discipline.number}
              delay={index * 100}
              className="border-b border-black/15"
            >
              <article className="group grid gap-6 py-9 md:grid-cols-[10px_1fr] md:items-start md:py-12">
                {/* Number */}
                <span className="font-body text-[8px] tracking-[0.12em] text-black/40">
                  {discipline.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-m leading-tight text-black transition-colors duration-300 group-hover:text-accent mr-5 sm:text-m md:text-lg">
                  {discipline.title}
                </h3>

                <div></div>

                {/* Description */}
                <p className="max-w-md font-body text-xs leading-relaxed text-black/60 md:ml-auto md:text-[15px]">
                  {discipline.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Work CTA */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-body text-sm leading-relaxed text-black/50">
            Explore how these disciplines come together across our
            projects.
          </p>

          <a
            href="#work"
            className="inline-flex w-fit items-center gap-2 font-body text-[11px] uppercase tracking-[0.1em] text-black transition-colors hover:text-accent"
          >
            Explore selected work
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}