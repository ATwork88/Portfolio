"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(useTransform(mouseX, [0, 1], [-14, 14]), { stiffness: 80, damping: 20 });
  const y = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), { stiffness: 80, damping: 20 });

  return (
    <section
      className="relative overflow-hidden border-b border-line"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-[420px] max-w-5xl rounded-full border border-line opacity-60 blur-3xl"
      />
      <div className="noise absolute inset-0 opacity-70" />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-sm font-medium uppercase tracking-[0.18em] text-muted"
        >
          Senior Full Stack Developer / AI Engineer / Automation Architect
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-balance text-6xl font-semibold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl"
        >
          I build systems.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-2xl font-medium text-ink sm:text-3xl">AI. Automation. Software.</p>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
            I help businesses replace manual processes with scalable software and intelligent automation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <MagneticButton href="/case-studies">
            View Case Studies <ArrowRight className="ml-2" size={16} />
          </MagneticButton>
          <MagneticButton href="/contact" variant="light">
            Book a Call
          </MagneticButton>
        </motion.div>
        <motion.a
          href="#terminal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-7 left-5 inline-flex items-center gap-2 text-sm text-muted hover:text-ink sm:left-8"
        >
          <ArrowDown size={15} />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
