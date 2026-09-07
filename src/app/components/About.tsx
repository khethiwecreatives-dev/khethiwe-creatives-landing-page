import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-bg-light py-15 md:py-15"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* INTRO */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-accent">
              About
            </p>

            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-black text-balance sm:text-5xl md:text-6xl">
              Built to
              <span className="text-accent"> evolve.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-xl space-y-5 font-body text-[15px] leading-relaxed text-black/65 md:text-base">
              <p>
                Khethiwe Creatives is a creative studio built around one
                belief: nothing meaningful stays the same.
              </p>

              <p>
                People grow, ideas develop, businesses change, and brands
                reach new stages in their journey. We believe creativity
                gives them the freedom to explore what comes next.
              </p>

              <p>
                Our role is to help shape that transition — turning vision
                into creative work that gives people, businesses, artists
                and ideas a stronger presence.
              </p>
            </div>
          </Reveal>
        </div>

        {/* PHILOSOPHY */}
        <div className="mt-24 border-t border-black/10 pt-10 md:mt-32 md:pt-14">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-4">
              <p className="font-body text-[10px] uppercase tracking-[0.16em] text-black/40">
                Our perspective
              </p>
            </div>

            <Reveal className="md:col-span-8">
              <h3 className="max-w-3xl font-display text-3xl leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl">
                We believe in
                <span className="text-accent"> becoming.</span>
              </h3>

              <div className="mt-7 max-w-2xl space-y-5 font-body text-[15px] leading-relaxed text-black/60 md:text-base">
                <p>
                  Every business starts somewhere. Every creator has a
                  first expression. Every personal brand begins with an
                  idea.
                </p>

                <p>
                  And eventually, there comes a point where what you have
                  built no longer reflects where you are going.
                </p>

                <p>
                  That is where evolution begins. As ambitions change,
                  audiences grow and new opportunities emerge, the way we
                  present ourselves should evolve with us.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* WHAT WE BELIEVE */}
        <div className="mt-24 grid gap-10 border-t border-black/10 pt-10 sm:grid-cols-2 md:mt-32 md:grid-cols-3 md:gap-8 md:pt-14">
          <Reveal>
            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-accent">
              01
            </p>

            <h3 className="mt-4 font-display text-2xl tracking-tight text-black">
              Creativity is a calling.
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-black/55">
              Creativity is the ability to see possibility, express what
              matters and turn ideas into something people can experience,
              understand and connect with.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-accent">
              02
            </p>

            <h3 className="mt-4 font-display text-2xl tracking-tight text-black">
              Everything connects.
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-black/55">
              The things we create should not exist in isolation. Every
              visual, story and experience contributes to how people
              understand and remember you.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body text-[10px] uppercase tracking-[0.14em] text-accent">
              03
            </p>

            <h3 className="mt-4 font-display text-2xl tracking-tight text-black">
              Evolution is part of it.
            </h3>

            <p className="mt-4 font-body text-sm leading-relaxed text-black/55">
              Evolution does not mean becoming someone else. It means
              discovering what you are capable of becoming and having
              the freedom to express it.
            </p>
          </Reveal>
        </div>

        {/* CLOSING */}
        <Reveal className="mt-24 md:mt-32">
          <div className="border-t border-black/10 pt-10 md:pt-14">
            <p className="font-body text-[10px] uppercase tracking-[0.16em] text-black/40">
              The next chapter
            </p>

            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h3 className="max-w-3xl font-display text-3xl leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl">
                Wherever you&rsquo;re going, we&rsquo;re here to help you
                <span className="text-accent"> get there.</span>
              </h3>

              <p className="max-w-xs font-body text-sm leading-relaxed text-black/50">
                Whether you are launching something new, redefining what
                already exists, or ready to take your creative presence
                somewhere further.
              </p>
            </div>

            {/* Final CTA */}
            <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-2xl tracking-tight text-accent">
                Evolve Freely.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.12em] text-black transition-colors hover:text-accent"
              >
                Start a project

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}