export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <a
            href="#top"
            aria-label="Khethiwe Creatives"
            className="flex items-center gap-4"
          >
            <img
              src="/Khethiwe Creatives Logo Mark Version tr-01.png"
              alt="Khethiwe Creatives"
              className="h-9 w-9 object-contain"
            />

            <span className="font-display text-lg tracking-tight text-black">
              Khethiwe Creatives
            </span>
          </a>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-body text-[10px] uppercase tracking-[0.12em] text-black/50">
            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              Instagram ↗
            </a>

            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              Behance ↗
            </a>

            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>

            <a
              href="#"
              className="transition-colors hover:text-accent"
            >
              TikTok ↗
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          
          <p className="font-body text-[10px] uppercase tracking-[0.1em] text-black/40">
            © {new Date().getFullYear()} Khethiwe Creatives. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="font-body text-[10px] uppercase tracking-[0.1em] text-black/40">
              South Africa
            </span>

            <a
              href="#top"
              className="font-body text-[10px] uppercase tracking-[0.1em] text-black/50 transition-colors hover:text-accent"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}