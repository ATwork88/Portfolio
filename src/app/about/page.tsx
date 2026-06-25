import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the systems-first approach behind AI automation, product architecture, and business process transformation.",
};

const principles = [
  "Start with the business process, not the technology inventory.",
  "Design systems that make the correct path obvious and the risky path visible.",
  "Use AI where it reduces decision load, accelerates judgment, or improves quality.",
  "Build architecture that can be operated by the team that owns the outcome.",
];

export default function AboutPage() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">About</p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
            Systems thinking for businesses ready to remove manual work.
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="sticky top-28 rounded-2xl border border-line p-6">
              <p className="text-sm text-muted">Positioning</p>
              <p className="mt-4 text-2xl font-semibold leading-snug">
                Senior Full Stack Developer, AI Engineer, and Automation Architect.
              </p>
            </div>
          </Reveal>
          <div className="space-y-10 text-lg leading-8 text-muted">
            <Reveal>
              <p>
                The work is not about adding another dashboard, another integration, or another AI demo. It is about understanding how a business actually moves, then designing software that removes bottlenecks without creating new operational debt.
              </p>
            </Reveal>
            <Reveal>
              <p>
                That requires product judgment, backend architecture, automation design, and enough AI implementation experience to know where intelligence helps and where deterministic systems are better. The result is software that can be trusted by operators, extended by teams, and measured by leadership.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Engagements typically begin with a messy process: manual document review, spreadsheet-led reporting, missed follow-ups, duplicated data, or teams stitching work together across tools. The output is a clear system: interfaces, workflows, data contracts, observability, and automation that compounds over time.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-line p-6">
                <p className="text-sm text-muted">0{index + 1}</p>
                <p className="mt-6 text-xl font-medium leading-8">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
