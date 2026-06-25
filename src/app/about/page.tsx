import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ajay Thakur, a full stack developer and AI automation engineer based in Pennsylvania, USA.",
};

const principles = [
  "Build products end to end, from clean user interfaces to secure backend APIs.",
  "Use AI and automation to remove repetitive work, not to add complexity.",
  "Design systems around performance, security, maintainability, and responsive UX.",
  "Act as a long-term technical partner who owns outcomes, not just tasks.",
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "FastAPI",
  "REST APIs",
  "C#",
  ".NET",
  "OpenAI API",
  "AI Automation",
  "n8n",
  "Make.com",
  "SaaS Architecture",
  "MVP Development",
  "Stripe",
  "PayPal",
  "Google Maps API",
  "PHP",
  "WordPress",
  "Laravel",
  "Webflow",
  "Tailwind CSS",
  "Bootstrap",
];

const history = [
  ["AI Engineer", "Chariot Solutions", "January 2025 - November 2025"],
  ["Full-stack Developer", "Atlasiko", "March 2020 - December 2024"],
  ["Web and App Developer", "Web Wizard Development", "February 2019 - November 2019"],
];

export default function AboutPage() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">About Ajay</p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
            Full stack development, AI implementation, and automation-first product architecture.
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="sticky top-28 rounded-2xl border border-line bg-canvas p-6">
              <p className="text-sm text-muted">Profile</p>
              <p className="mt-4 text-2xl font-semibold leading-snug">
                Ajay Thakur - PA, USA. Full Stack Developer & AI/Automation Engineer.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-line p-3">
                  <p className="text-muted">Upwork</p>
                  <p className="mt-1 font-medium">10K+ / Top Rated</p>
                </div>
                <div className="rounded-xl border border-line p-3">
                  <p className="text-muted">Rate</p>
                  <p className="mt-1 font-medium">$60/hr</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="space-y-10 text-lg leading-8 text-muted">
            <Reveal>
              <p>
                I am a Full Stack AI Developer with professional experience building modern web applications, AI-powered systems, workflow automations, and scalable SaaS platforms for startups, businesses, and growing organizations.
              </p>
            </Reveal>
            <Reveal>
              <p>
                My work spans the full product lifecycle: designing clean interfaces, building high-performance backend APIs, integrating third-party services, and turning operational workflows into reliable software. On the backend, I use Python, FastAPI, API-first design, and clean architecture. On the frontend, I build responsive product experiences with React, Next.js, Tailwind CSS, and modern JavaScript frameworks.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I also integrate AI into real products through OpenAI APIs, automation workflows, and orchestration tools like n8n and Make.com. Beyond custom applications, I work with WordPress, Laravel, Webflow, and PHP-based systems for CMS-driven products, custom admin panels, and faster business delivery.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-canvas p-6">
                <p className="text-sm text-muted">0{index + 1}</p>
                <p className="mt-6 text-xl font-medium leading-8">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-3xl font-semibold">Employment History</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {history.map(([role, company, date]) => (
                <div key={`${role}-${company}`} className="py-5">
                  <p className="font-medium">{role}</p>
                  <p className="mt-1 text-sm text-muted">{company}</p>
                  <p className="mt-2 text-sm text-muted">{date}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-line bg-canvas p-6">
              <p className="text-sm text-muted">Education</p>
              <p className="mt-3 text-xl font-semibold">North Carolina State University</p>
              <p className="mt-1 text-muted">Bachelor of Computer Science, 2017-2021</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl font-semibold">Core Skills & Technologies</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-line bg-canvas px-4 py-2 text-sm text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
