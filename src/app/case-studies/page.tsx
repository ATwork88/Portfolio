import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Featured AI, automation, integration, and product architecture case studies with measurable business outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Case Studies</p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
            Systems that turn manual operations into durable software.
          </h1>
        </Reveal>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.04}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group grid gap-8 py-9 transition-colors hover:bg-ink/[0.025] md:grid-cols-[0.8fr_1.5fr_0.7fr]"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{study.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-semibold">{study.title}</h2>
                </div>
                <p className="max-w-2xl text-base leading-7 text-muted">{study.solution}</p>
                <div className="flex items-center justify-between gap-4 md:justify-end">
                  <p className="text-sm font-medium">{study.outcome}</p>
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
