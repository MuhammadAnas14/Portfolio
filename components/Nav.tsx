"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/content";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/85" : "border-b border-transparent bg-ink/40"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-signal text-sm text-signal">
            MA
          </span>
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 text-[15px] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-dim transition-colors hover:text-signal">
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-signal px-[18px] py-2.5 font-semibold text-signal-ink transition-transform hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line-2 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-soft">
                  {l.label}
                </a>
              ))}
              <a href={profile.resume} target="_blank" rel="noopener" className="mt-2 rounded-lg bg-signal px-4 py-3 text-center font-semibold text-signal-ink">
                Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
