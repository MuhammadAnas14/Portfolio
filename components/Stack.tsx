import { extras, stack } from "@/data/content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-[72px] md:px-8">
      <SectionHeading eyebrow="stack, layer by layer" title="The whole chain" />

      <Reveal>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-line">
          {stack.map((row, i) => (
            <div
              key={row.layer}
              className={`group flex flex-wrap gap-4 px-[26px] py-[22px] transition-colors hover:bg-panel-2 ${
                i % 2 ? "bg-[#0f1715]" : "bg-panel"
              } ${i < stack.length - 1 ? "border-b border-line" : ""}`}
            >
              <span className="flex-[0_0_160px] font-mono text-[13px] text-signal">{row.layer}</span>
              <span className="flex-[1_1_400px] text-soft">{row.items}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {extras.map((e, i) => (
          <Reveal key={e.value} delay={i * 0.08}>
            <div className="flex h-full flex-col gap-1 rounded-[14px] border border-line px-[22px] py-5">
              <span className="font-mono text-xs text-dim">{e.label}</span>
              <strong>{e.value}</strong>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
