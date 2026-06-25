import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/data";

export function CaseStudiesPreview() {
  return (
    <section className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Case Studies</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Practical systems with measurable business outcomes.
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium">
            View all work <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.04}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block min-h-[330px] rounded-2xl border border-line bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{study.eyebrow}</p>
                  <ArrowUpRight className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink" size={18} />
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{study.title}</h3>
                <div className="mt-8 space-y-5 text-sm leading-6">
                  <p>
                    <span className="block text-muted">Problem</span>
                    {study.problem}
                  </p>
                  <p>
                    <span className="block text-muted">Solution</span>
                    {study.solution}
                  </p>
                  <p className="font-medium">
                    <span className="block text-muted">Outcome</span>
                    {study.outcome}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
