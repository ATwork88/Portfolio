import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ProjectShowcase } from "@/components/sections/project-showcase";

export function CaseStudiesPreview() {
  return (
    <section className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Case Studies</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Selected work across AI automation, CRM, SaaS, CMS, and web platforms.
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium">
            View all work <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <div className="mt-12">
          <ProjectShowcase compact />
        </div>
      </div>
    </section>
  );
}
