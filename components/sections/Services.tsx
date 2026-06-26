"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  CalendarDays,
  Code2,
  LayoutDashboard,
  Palette,
  Search,
  Target,
} from "lucide-react";
import { reveal, stagger } from "@/components/motion/variants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceItems } from "@/data/site";

const serviceIcons = {
  code: Code2,
  dashboard: LayoutDashboard,
  palette: Palette,
  bot: Bot,
  search: Search,
  calendar: CalendarDays,
  target: Target,
  chart: BarChart3,
};

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-36">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Strategy, design, AI, and engineering in one premium studio."
          copy="SR Studio builds the digital surface and the hidden workflows behind it, so your brand feels expensive and your operations feel lighter."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {serviceItems.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.article
                key={service.title}
                variants={reveal}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glow-border group relative min-h-[220px] rounded-[24px] bg-[#090b12] p-[1.5px] sm:min-h-[240px] sm:rounded-[26px] transition-all duration-300"
              >
                <div className="flex h-full flex-col rounded-[23px] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.022))] p-6 backdrop-blur-xl sm:rounded-[25px]">
                  <div className="mb-6 grid size-12 place-items-center rounded-2xl border border-white/10 bg-black/24 text-cyan-100 shadow-[0_0_34px_rgba(93,244,255,0.13)] transition group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/56">{service.copy}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
