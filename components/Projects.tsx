"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { projects, type Tag } from "@/data/content";
import Reveal, { SectionHeading } from "./Reveal";

const filters: ("All" | Tag)[] = ["All", "IoT", "Cloud", "AI", "Security"];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | Tag>("All");
  const reduce = useReducedMotion();
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-[72px] md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="projects" title="Things I've built" />
        <Reveal>
          <LayoutGroup id="filters">
            <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const on = f === filter;
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setFilter(f)}
                    className={`relative min-h-11 cursor-pointer rounded-full border px-[18px] text-sm font-medium transition-colors ${
                      on ? "border-signal text-signal-ink" : "border-line-2 text-soft hover:border-signal"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 -z-0 rounded-full bg-signal"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative">{f}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>
      </div>

      <motion.div layout={!reduce} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              key={p.name}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              className="group flex flex-col gap-3.5 rounded-2xl border border-line bg-panel p-[26px] transition-colors duration-300 hover:border-[#2f4a42]"
            >
              <div className="overflow-x-auto rounded-lg border border-line bg-deep px-3 py-2.5 font-mono text-xs whitespace-nowrap text-packet">
                {p.flow}
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
                <span className="font-mono text-[11px] whitespace-nowrap text-dim">{p.kind}</span>
              </div>
              <p className="flex-grow text-[15px] text-muted">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded bg-panel-2 px-2 py-1 font-mono text-[11px] text-muted">
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-sm font-medium text-signal"
              >
                View on GitHub
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                <span className="sr-only">: {p.name}</span>
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
