"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { impact } from "@/data/content";
import Reveal from "./Reveal";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      {value}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section aria-label="Impact" className="border-y border-line bg-deep">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {impact.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08} className="flex flex-col gap-1.5">
            <div className="font-display text-5xl leading-none font-semibold text-signal">
              <CountUp to={item.value} suffix={item.suffix} />
            </div>
            <p className="text-[15px] text-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
