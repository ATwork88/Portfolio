import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) return {};

  return {
    title: study.title,
    description: `${study.problem} ${study.outcome}.`,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <article>
      <section className="border-b border-line px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">{study.eyebrow}</p>
            <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
              {study.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">{study.solution}</p>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {[
            ["Problem", study.problem],
            ["Solution", study.solution],
            ["Results", study.outcome],
          ].map(([title, body], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-line p-6">
                <p className="text-sm text-muted">{title}</p>
                <p className="mt-5 text-xl font-medium leading-8">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-b border-line px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Architecture</p>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              A simple operating path with explicit ownership.
            </h2>
          </Reveal>
          <div className="mt-10">
            <ArchitectureDiagram items={study.architecture} />
          </div>
        </div>
      </section>
      <section className="border-b border-line px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <DetailList title="Challenges" items={study.challenges} />
          <DetailList title="Results" items={study.results} />
          <DetailList title="Tech Stack" items={study.stack} />
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Gallery</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Workflow map", "Review console", "System health"].map((label) => (
                <div key={label} className="aspect-[4/3] rounded-2xl border border-line bg-canvas p-5">
                  <div className="h-full rounded-xl border border-line p-4">
                    <p className="text-sm font-medium">{label}</p>
                    <div className="mt-8 space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-ink/10 dark:bg-white/15" />
                      <div className="h-3 w-1/2 rounded-full bg-ink/10 dark:bg-white/15" />
                      <div className="h-20 rounded-xl border border-line" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
          {items.map((item) => (
            <li key={item} className="border-b border-line pb-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
