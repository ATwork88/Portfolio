"use client";

import { motion } from "framer-motion";

export function ArchitectureDiagram({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-line p-5">
      <div className="grid gap-3 md:grid-cols-5">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="relative rounded-xl border border-line bg-canvas p-4 text-sm font-medium"
          >
            <span className="mb-5 block text-xs text-muted">0{index + 1}</span>
            {item}
            {index < items.length - 1 ? (
              <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-line md:block" />
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
