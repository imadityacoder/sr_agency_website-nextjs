"use client";

import { motion } from "framer-motion";
import { reveal, stagger } from "@/components/motion/variants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-36 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Process"
          title="A clean launch system from idea to live product."
          copy="Every step is structured, visible, and momentum-driven, so premium work still moves with urgency."
        />
        <div className="relative mt-12 sm:mt-16">
          <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-white/12 md:left-1/2 md:block" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6"
          >
            {processSteps.map(([title, copy], index) => (
              <motion.div
                key={title}
                variants={reveal}
                className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? "" : "md:[&>div:first-child]:col-start-2"}`}
              >
                <div className="glass rounded-[26px] border border-white/10 bg-[#090b12] p-6 backdrop-blur-xl sm:p-8 hover:border-cyan-400/20 transition-all duration-300">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-full border border-cyan-200/30 bg-cyan-200/10 font-display text-sm font-extrabold text-cyan-100 shadow-[0_0_28px_rgba(93,244,255,0.16)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{copy}</p>
                </div>
                <span className="absolute left-1/2 top-8 hidden size-4 -translate-x-1/2 rounded-full bg-cyan-100 shadow-[0_0_24px_rgba(93,244,255,0.8)] md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
