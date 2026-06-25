import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a call or contact a senior full stack developer, AI engineer, and automation architect.",
};

export default function ContactPage() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">Contact</p>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
            Let us map the manual work worth eliminating.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Bring the process, bottleneck, or system constraint. The first conversation is about clarity: what is manual, what is risky, and what should become software.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://cal.com" className="inline-flex h-12 items-center rounded-full border border-ink bg-ink px-5 text-sm font-medium text-canvas">
              Book a Call
            </a>
            <a href="mailto:hello@example.com" className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium hover:border-ink">
              <Mail size={16} /> Email
            </a>
            <a href="https://linkedin.com" className="inline-flex size-12 items-center justify-center rounded-full border border-line hover:border-ink" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://github.com" className="inline-flex size-12 items-center justify-center rounded-full border border-line hover:border-ink" aria-label="GitHub">
              <Github size={17} />
            </a>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
