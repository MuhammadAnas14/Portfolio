import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-[1200px] px-6 pt-24 pb-[72px] md:px-8">
        <Reveal>
          <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-3xl border border-line bg-panel px-7 py-14 md:px-12 md:py-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <p className="relative font-mono text-[13px] text-signal">// open a connection</p>
            <h2 className="relative max-w-[820px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] font-semibold tracking-tight">
              Let&apos;s build something that runs in real time.
            </h2>
            <p className="relative max-w-[600px] text-muted">
              I&apos;m open to full-stack, cloud and IoT roles in Germany. The fastest way to reach me is email.
            </p>
            <div className="relative flex flex-wrap gap-3.5">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-[10px] bg-signal px-6 py-3.5 font-semibold text-signal-ink transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener" className="rounded-[10px] border border-line-2 px-6 py-3.5 transition-colors hover:border-signal hover:text-signal">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noopener" className="rounded-[10px] border border-line-2 px-6 py-3.5 transition-colors hover:border-signal hover:text-signal">
                GitHub ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-3 px-6 pt-6 pb-12 font-mono text-[13px] text-dim md:px-8">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
        <span>Built with Next.js · Hosted on Vercel</span>
      </footer>
    </>
  );
}
