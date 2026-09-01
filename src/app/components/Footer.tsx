export default function Footer() {
  return (
    <footer className="bg-bg-light  w-full py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-10 text-center sm:flex-row sm:text-left md:px-10">
        <p className="font-display text-sm text-bone">
          Khethiwe <span className="italic text-marigold">Creatives</span>
        </p>
        <p className="mono-tag text-[10px] text-[--text-on-ink-mute]">
          © {new Date().getFullYear()} Khethiwe Creatives. All rights
          reserved.
        </p>
        <a
          href="#top"
          className="mono-tag text-[10px] text-[--text-on-ink-mute] hover:text-marigold"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
