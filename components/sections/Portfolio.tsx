"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { reveal, stagger } from "@/components/motion/variants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioItems } from "@/data/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-16 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Portfolio"
          title="Cinematic web systems for high-trust local businesses."
          copy="Each concept is built around a real business outcome: bookings, discovery, qualified leads, repeat customers, and stronger first impressions."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((project, index) => (
            <motion.article
              key={project.title}
              variants={reveal}
              whileHover={{ y: -9 }}
              className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-2.5 backdrop-blur-xl sm:rounded-[28px] sm:p-3"
            >
              <div className={`relative h-48 overflow-hidden rounded-[20px] bg-gradient-to-br sm:h-56 sm:rounded-[22px] ${project.palette}`}>
                <motion.div
                  animate={{ x: ["-25%", "25%", "-25%"] }}
                  transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-1/3 w-24 rotate-12 bg-white/18 blur-2xl"
                />
                <div className="absolute inset-3 rounded-[18px] border border-white/18 bg-black/25 p-3 backdrop-blur-sm sm:inset-4 sm:p-4">
                  <div className="mb-7 flex items-center justify-between sm:mb-9">
                    <span className="rounded-full bg-white/18 px-3 py-1 text-xs font-semibold">{project.sector}</span>
                    <ChevronRight className="size-5 transition group-hover:translate-x-1" />
                  </div>
                  <div className="space-y-2">
                    <span className="block h-3 w-2/3 rounded-full bg-white/78" />
                    <span className="block h-3 w-1/2 rounded-full bg-white/42" />
                    <span className="block h-3 w-5/6 rounded-full bg-white/24" />
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-2xl bg-black/34 px-3 py-2 text-xs font-semibold text-white sm:bottom-4 sm:right-4 sm:text-sm">
                    {project.result}
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.points.map((point) => (
                    <span key={point} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-white/62">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
