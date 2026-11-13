"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile, signalPath } from "@/data/content";

const terminal = [
  "sensor reading captured on device",
  "published over MQTT",
  "processed in the cloud",
  "packet delivered: sensor → screen",
];

const ease = [0.2, 0.7, 0.2, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const [line, setLine] = useState(terminal.length - 1);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setLine((l) => (l + 1) % terminal.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  const up = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease },
        };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 pt-20 pb-16 md:px-8 md:pt-24 md:pb-20">
        <div className="flex min-w-0 flex-[1.35_1_560px] flex-col gap-7">
          <motion.div {...up(0)} className="flex items-center gap-4">
            <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-signal bg-panel-2">
              {profile.photo ? (
                <Image src={profile.photo} alt="Photo of Muhammad Anas" fill sizes="72px" className="object-cover" priority />
              ) : (
                <span className="flex h-full w-full items-center justify-center font-display text-xl font-bold text-signal">MA</span>
              )}
            </div>
            <p className="flex items-center gap-2.5 font-mono text-[13px] tracking-wide text-signal">
              <span className="live-dot inline-block h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
              {profile.role} · {profile.location}
            </p>
          </motion.div>

          <motion.h1
            {...up(1)}
            className="font-display text-[clamp(44px,5.4vw,72px)] leading-[1.04] font-semibold tracking-[-0.03em]"
          >
            <span className="lg:whitespace-nowrap">From circuit board</span>
            <br />
            to cloud<span className="text-signal">.</span>
          </motion.h1>

          <motion.p {...up(2)} className="max-w-[560px] text-lg text-muted md:text-[19px]">
            I&apos;m Muhammad Anas. I build real-time systems end to end: firmware on the device, the data pipeline to
            the cloud, and the dashboard people use every day.
          </motion.p>

          <motion.div {...up(3)} className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="rounded-[10px] bg-signal px-6 py-3.5 font-semibold text-signal-ink transition-transform hover:-translate-y-0.5"
            >
              See my projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="rounded-[10px] border border-line-2 px-6 py-3.5 font-medium transition-colors hover:border-signal hover:text-signal"
            >
              Download resume
            </a>
          </motion.div>

          <motion.div {...up(4)} className="flex flex-wrap gap-5 text-sm text-dim">
            <a href={profile.github} target="_blank" rel="noopener" className="hover:text-signal">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="hover:text-signal">LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`} className="hover:text-signal">{profile.email}</a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="flex min-w-0 flex-[1_1_420px] flex-col gap-5 rounded-[18px] border border-line bg-panel p-7"
        >
          <div className="flex justify-between font-mono text-xs text-dim">
            <span>signal.path</span>
            <span className="text-signal">● live</span>
          </div>

          <div className="relative flex flex-col gap-[22px] pl-[34px]">
            <div className="absolute top-[14px] bottom-[14px] left-[11px] w-0.5 bg-line-2" aria-hidden="true">
              {!reduce &&
                [0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute -left-1 h-2.5 w-2.5 rounded-full bg-packet shadow-[0_0_12px_#f5b841]"
                    initial={{ top: "0%", opacity: 0 }}
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: i * 1.07 }}
                  />
                ))}
            </div>

            {signalPath.map((n, i) => (
              <motion.div
                key={n.step}
                initial={reduce ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease }}
                className="relative rounded-xl border border-line bg-deep px-4 py-3.5"
              >
                <span
                  className="absolute top-[18px] -left-[29px] h-3 w-3 rounded-full border-2 border-signal bg-ink"
                  aria-hidden="true"
                />
                <div className="font-mono text-[11px] tracking-wide text-signal uppercase">{n.step}</div>
                <div className="font-semibold">{n.title}</div>
                <div className="font-mono text-xs text-dim">{n.detail}</div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-dashed border-line pt-3.5 font-mono text-xs text-dim">
            &gt; {terminal[line]}
            <span className="caret text-signal">▍</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
