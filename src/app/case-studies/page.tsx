import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { ProjectShowcase } from "@/components/sections/project-showcase";

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
            Project showcases organized by the kind of business system they improve.
          </h1>
        </Reveal>
        <div className="mt-14">
          <ProjectShowcase />
        </div>
      </div>
    </section>
  );
}
