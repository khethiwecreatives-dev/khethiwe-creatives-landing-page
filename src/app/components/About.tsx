import Reveal from "./Reveal";

const STATS = [
  { value: "6+", label: "Years in business" },
  { value: "40+", label: "Brands launched" },
  { value: "Gauteng", label: "Based in Benoni, working across SA" },
];

export default function About() {
  return (
    <section id="about" className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          <Reveal className="reveal">
            <p className="mono-tag text-[11px] text-clay">About</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink text-balance md:text-5xl">
              Design is a series of choices. We make them carefully.
            </h2>
            <div className="mt-7 max-w-md space-y-4 text-[15px] leading-relaxed text-[--text-on-bone-mute]">
              <p>
                Khethiwe Creatives started with a simple frustration:
                brands rushed to market with a logo, a template site and
                nothing that actually held together. We wanted to build the
                opposite — work considered enough to earn the name
                &ldquo;chosen.&rdquo;
              </p>
              <p>
                We&rsquo;re a small, hands-on studio based in Benoni, Gauteng,
                working with founders and small teams across South Africa who
                care about craft as much as they care about growth.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="reveal crop crop-tight text-ink">
            <dl className="grid grid-cols-1 gap-8 border border-[--line-on-bone] bg-bone-soft p-8 sm:grid-cols-3 md:p-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl text-clay">
                    {stat.value}
                  </dd>
                  <p className="mono-tag mt-2 text-[10px] leading-snug text-[--text-on-bone-mute]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
