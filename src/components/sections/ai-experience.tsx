"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const prompts = [
  "What projects have you built?",
  "Do you work with AI?",
  "Experience with automation?",
  "Experience with SaaS?",
];

const answers: Record<string, string> = {
  "What projects have you built?":
    "Loan-processing automation, AI cold-calling systems, restaurant analytics dashboards, CRM pipelines, SaaS platforms, and CMS-driven business websites.",
  "Do you work with AI?":
    "Yes. I integrate OpenAI, voice agents, AI automation, structured workflows, and human review paths into real products.",
  "Experience with automation?":
    "Automation is a core focus: Make.com, n8n, webhooks, CRM workflows, API integrations, routing rules, and operational alerts.",
  "Experience with SaaS?":
    "Yes. I build SaaS architecture, MVPs, dashboards, REST APIs, payments with Stripe or PayPal, admin panels, and responsive product interfaces.",
};

export function AIExperience() {
  const [active, setActive] = useState(prompts[0]);

  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">AI Experience</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            A conversational layer for the portfolio.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            The interface demonstrates how complex experience can be made searchable, explainable, and calm.
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-line bg-canvas shadow-soft">
          <div className="border-b border-line p-5">
            <p className="text-sm font-medium">Ask about systems, AI, automation, or SaaS.</p>
          </div>
          <div className="space-y-4 p-5">
            <div className="flex justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="max-w-[82%] rounded-2xl bg-ink px-4 py-3 text-sm leading-6 text-canvas"
                >
                  {active}
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={answers[active]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="max-w-[88%] rounded-2xl border border-line px-4 py-3 text-sm leading-6 text-muted"
              >
                {answers[active]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="grid gap-2 border-t border-line p-4 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setActive(prompt)}
                className="inline-flex min-h-11 items-center justify-between rounded-xl border border-line px-3 text-left text-sm transition-colors hover:border-ink"
              >
                <span>{prompt}</span>
                <Send size={14} />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
