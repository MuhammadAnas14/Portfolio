"use client";

import { motion, useReducedMotion } from "motion/react";
import { story } from "@/data/content";
import Reveal from "./Reveal";

export default function Story() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 pt-28 pb-12 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <Reveal className="flex flex-[1_1_520px] flex-col gap-3">
          <p className="font-mono text-[13px] text-signal">// the path so far</p>
          <h2 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            I started with hardware.
            <br />I still think in signals.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="flex-[1_1_380px] text-muted">
          <p>
            Computer Systems Engineering in Karachi taught me how computers work from the circuit board up. Since then I
            have built software that cannot fail: payments for banks, then a platform that carries sensor data from
            greenhouses to a grower&apos;s screen in real time.
          </p>
        </Reveal>
      </div>

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {story.map((s, i) => (
          <li key={s.title} className="relative flex flex-col gap-1.5 pt-[18px]">
            <span className="absolute top-0 left-0 h-0.5 w-full bg-line-2" aria-hidden="true" />
            <motion.span
              className={`absolute top-0 left-0 h-0.5 w-full origin-left ${s.current ? "bg-signal" : "bg-dim/50"}`}
              aria-hidden="true"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            />
            <Reveal delay={i * 0.25 + 0.1} className="flex flex-col gap-1.5">
              <span className={`font-mono text-xs ${s.current ? "text-signal" : "text-dim"}`}>{s.when}</span>
              <strong className="font-display text-xl">{s.title}</strong>
              <span className="text-[15px] text-muted">{s.text}</span>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
