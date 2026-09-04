import Reveal from "./Reveal";

const SERVICES = [
  {
    number: "01",
    title: "Photography",
    description:
      "Images with intention — from people and products to places, events and campaigns.",
    services: [
      "Portrait",
      "Editorial",
      "Fashion",
      "Events",
      "Lifestyle",
    ],
    pricing: "From R1,000",
    pricingNote: "Final pricing depends on the shoot requirements.",
  },
  {
    number: "02",
    title: "Videography",
    description:
      "Moving image built to capture attention, communicate a story and give your ideas presence.",
    services: [
      "Artist Visuals",
      "Promotional Video",
      "Social Content",
      "Short-form Video",
      "Events",
      "BTS Content",
      "Video Editing",
    ],
    pricing: "R2,500",
    pricingNote:
      "Quoted according to production scope, deliverables and post-production.",
  },
  {
    number: "03",
    title: "Graphic Design & Brand Identity",
    description:
      "Visual systems and design that give businesses, artists and personal brands a recognisable presence.",
    services: [
      "Brand Identity",
      "Logo Design",
      "Typography & Colour",
      "Brand Guidelines",
      "Posters",
      "Social Graphics",
      "Campaign Design",
      "Print & Digital",
    ],
    pricing: "R2,500",
    pricingNote:
      "Smaller design projects may have starting prices; larger identity work is scoped individually.",
  },
  {
    number: "04",
    title: "Web Design & Development",
    description:
      "Digital experiences designed to look considered, work beautifully and give your audience somewhere to connect.",
    services: [
      "Website Design",
      "Web Development",
      "Business Websites",
      "Portfolio Websites",
      "E-commerce",
      "UI/UX Design",
      "Landing Pages",
      "Interactive Experiences",
    ],
    pricing: "R3,500",
    pricingNote:
      "Pricing depends on pages, functionality, integrations and development requirements.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bg-light py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* Section Introduction */}
        <div className="max-w-3xl">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
            Services & Pricing
          </p>

          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-6xl">
            Creative work with purpose,
            <br className="hidden sm:block" />
            <span className="text-accent">not just decoration.</span>
          </h2>

          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-black/65 sm:text-lg">
            From visual storytelling to digital experiences, KC brings
            photography, film, design and technology together to help
            people, businesses, artists and ideas make an impact.
          </p>
        </div>

        {/* Services */}
        <div className="mt-20 border-t border-black/15">

          {SERVICES.map((service, i) => (
            <Reveal
              key={service.number}
              delay={i * 100}
              className="border-b border-black/15"
            >
              <article className="py-10 md:py-14">

                {/* Service Header */}
                <div className="grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-start">

                  {/* Number */}
                  <span className="font-body text-[11px] uppercase tracking-[0.12em] text-black/45">
                    {service.number}
                  </span>

                  {/* Title + Description */}
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-black sm:text-4xl md:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-black/65 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="md:min-w-[150px] md:text-right">
                    <p className="font-display text-xl text-black">
                      {service.pricing}
                    </p>

                    <p className="mt-1 max-w-[190px] font-body text-[11px] leading-relaxed text-black/50 md:ml-auto">
                      {service.pricingNote}
                    </p>
                  </div>
                </div>

                {/* Included Services */}
                <div className="mt-8 md:ml-[100px]">
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {service.services.map((item) => (
                      <span
                        key={item}
                        className="font-body text-[11px] uppercase tracking-[0.06em] text-black/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 md:ml-[100px]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.1em] text-black transition-colors hover:text-accent"
                  >
                    Discuss this service
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

              </article>
            </Reveal>
          ))}

        </div>

        {/* Pricing Note */}
        <div className="mt-12 max-w-2xl">
          <p className="font-body text-xs leading-relaxed text-black/50">
            Every project is different. Final pricing is determined by
            scope, deliverables, production requirements and the needs of
            your project. Starting prices indicate the minimum investment
            for selected services and are not fixed quotations.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-black/15 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="font-display text-2xl text-black sm:text-3xl">
                Have something in mind?
              </p>

              <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-black/60">
                Tell us what you're working on, and we'll work out the
                right creative approach for it.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-black px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.08em] text-bg-light transition-colors hover:bg-accent"
            >
              Start a project
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}