export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg-light px-6 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Typeface Logo */}
        <a
          href="#top"
          aria-label="Khethiwe Creatives"
          className="block"
        >
          <img
            src="/Khethiwe Creatives Word Version-01.png"
            alt="Khethiwe Creatives"
            className="h-auto w-48 object-contain sm:w-56 md:w-[18rem]"
          />
        </a>

        {/* Main Statement */}
        <h1 className="mt-10 max-w-4xl font-display text-[2.4rem] leading-[1.05] tracking-tight text-black text-balance sm:mt-12 sm:text-5xl md:text-6xl">
          We create the visual world
          <br className="hidden sm:block" />
          <span className="text-accent"> around your vision.</span>
        </h1>

        {/* Studio Image */}
        <div className="mt-10 aspect-[3/2] w-full max-w-4xl overflow-hidden sm:mt-12">
          <img
            src="/KC--Studio.jpg"
            alt="Khethiwe Creatives creative workspace"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Cinematic Description */}
        <p className="mt-7 max-w-2xl font-body text-sm leading-relaxed text-black/70 sm:text-base md:text-lg">
          We make people, places, ideas and moments impossible to overlook.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-black px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.08em] text-bg-light transition-colors hover:bg-accent sm:w-auto"
          >
            Start a project
          </a>

          <a
            href="#work"
            className="w-full rounded-full border border-black/20 px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.08em] text-black transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            See the work
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center gap-6 font-body text-[10px] uppercase tracking-[0.12em] text-black/50 sm:mt-14">
          <a
            href="https://www.instagram.com/khethiwecreatives2024?igsi=MXRkYnZuYnU0cHh1OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Instagram
          </a>

          <span className="h-1 w-1 rounded-full bg-black/30" />

          <a
            href="https://www.behance.net/khethiwcreativ"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Behance
          </a>

          <span className="h-1 w-1 rounded-full bg-black/30" />

          <a
            href="https://www.linkedin.com/in/khethiwe-creatives-undefined-065435433/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}