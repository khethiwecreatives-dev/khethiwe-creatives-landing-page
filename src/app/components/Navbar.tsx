"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg-light/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 md:px-10">

        {/* ───────────────── TOP ROW ───────────────── */}

        <div className="flex items-center justify-between">

          {/* Brand Typeface Logo */}
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-black"
          >
            <img src="/Khethiwe Creatives Word Version-01.png" 
              alt=""
              className="h-auto w-32  object-contain sm:w-40 md:w-44" />
          </a>

          {/* Symbol Logo */}
          <a
            href="#top"
            aria-label="Home"
            className="hidden sm:block"
          >
            <img
              src="/Khethiwe Creatives Logo Mark Version tr-01.png"
              alt="Logo"
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
          </a>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-md bg-black px-5 py-2.5 text-[11px] text-bg-light transition-colors hover:bg-accent md:inline-block"
          >
            Start a project
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-[1.5px] w-6 bg-black transition-transform ${
                open
                  ? "translate-y-[3.5px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-6 bg-black transition-transform ${
                open
                  ? "-translate-y-[3.5px] -rotate-45"
                  : ""
              }`}
            />
          </button>

        </div>

        {/* ───────────────── DESKTOP NAV ───────────────── */}

        <div className="mt-4 hidden justify-center md:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-[11px] text-black transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>

      {/* ───────────────── MOBILE MENU ───────────────── */}

      {open && (
        <div className="border-t border-black/10 bg-bg-light px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">

            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm text-black transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-md bg-black px-5 py-2.5 text-[11px] text-bg-light transition-colors hover:bg-accent"
              >
                Start a project
              </a>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}