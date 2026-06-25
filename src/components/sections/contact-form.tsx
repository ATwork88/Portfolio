"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line p-5 shadow-soft sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          Name
          <input className="h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition-colors focus:border-ink" required />
        </label>
        <label className="space-y-2 text-sm font-medium">
          Email
          <input type="email" className="h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition-colors focus:border-ink" required />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm font-medium">
        Project focus
        <select className="h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition-colors focus:border-ink">
          <option>AI system</option>
          <option>Workflow automation</option>
          <option>SaaS architecture</option>
          <option>Systems integration</option>
        </select>
      </label>
      <label className="mt-4 block space-y-2 text-sm font-medium">
        What needs to change?
        <textarea className="min-h-36 w-full resize-none rounded-xl border border-line bg-canvas p-4 outline-none transition-colors focus:border-ink" required />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-ink bg-ink px-5 text-sm font-medium text-canvas transition-opacity hover:opacity-85 sm:w-auto"
      >
        Send Inquiry <Send size={16} />
      </button>
      <AnimatePresence>
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-5 flex items-center gap-3 rounded-xl border border-line p-4 text-sm"
          >
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-ink text-canvas">
              <Check size={15} />
            </span>
            Message staged. This demo form is ready to connect to your preferred email or CRM endpoint.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
