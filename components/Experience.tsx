import { experience } from "@/data/content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="work" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-[72px] md:px-8">
      <SectionHeading eyebrow="experience" title="Where I've shipped" />

      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 0.08}>
          <article className="flex flex-wrap gap-9 rounded-[18px] border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2f4a42] md:p-9">
            <div className="flex flex-[1_1_260px] flex-col gap-2">
              <span className="font-mono text-xs text-dim">{job.when}</span>
              <h3 className="font-display text-[28px] font-semibold">{job.company}</h3>
              <span className="font-medium text-signal">{job.role}</span>
              <span className="text-[15px] text-dim">{job.about}</span>
            </div>
            <ul className="flex flex-[2_1_480px] list-disc flex-col gap-2.5 pl-[18px] text-soft marker:text-signal">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="flex basis-full flex-wrap gap-2">
              {job.tech.map((t) => (
                <span key={t} className="rounded-md bg-panel-2 px-2.5 py-1.5 font-mono text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      ))}

      <Reveal>
        <p className="font-mono text-[13px] text-dim">
          Earlier: Software Intern at Pakistan International Airlines (2020) and Pakistan Civil Aviation Authority (2020).
        </p>
      </Reveal>
    </section>
  );
}
