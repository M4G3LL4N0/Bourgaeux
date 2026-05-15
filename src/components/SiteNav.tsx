"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#recommend", label: "Early access" },
  { href: "#how-it-works", label: "How it works" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070705]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
          onClick={() => setOpen(false)}
        >
          Bourgaeux
        </Link>
        <nav className="hidden items-center gap-3 sm:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="btn-secondary text-sm">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:hidden">
          <a href="#recommend" className="btn-secondary px-3 py-1.5 text-xs">
            Access
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
            aria-expanded={open}
            aria-controls="bourgaeux-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="bourgaeux-mobile-nav"
          className="border-t border-white/10 px-4 py-4 sm:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
