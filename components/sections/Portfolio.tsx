"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { reveal } from "@/components/motion/variants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/data/projects";
import { FilterButtons, type FilterCategory } from "./FilterButtons";
import { PortfolioGrid } from "./PortfolioGrid";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) =>
      project.filterCategories.includes(activeFilter as any)
    );

  return (
    <section id="works" className="relative py-20 sm:py-36 overflow-hidden">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Works"
          title="Premium products built for high-trust digital presence."
          copy="Each system is designed around measurable business outcomes: higher booking rates, interactive educational showcases, and friction-free user journeys."
        />

        {/* Filter Section */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center"
        >
          <FilterButtons
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </motion.div>

        {/* Dynamic Project Grid */}
        <PortfolioGrid projects={filteredProjects} />

        {/* Let's Build Your Project CTA Card */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="glass mt-16 sm:mt-24 p-8 sm:p-14 rounded-[28px] border border-white/10 bg-gradient-to-br from-[#090b12]/90 to-[#040507]/90 text-center relative overflow-hidden"
        >
          {/* Subtle colored glow spots */}
          <div className="absolute -left-1/4 -top-1/4 size-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -right-1/4 -bottom-1/4 size-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Let's Build Your Project
            </h3>
            <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-white/55 mb-8 text-balance">
              Need a high-performance website, educational portal, or custom mobile application? Let's team up to shape a premium solution tailored specifically for your target audience.
            </p>
            <ButtonLink href="#contact" variant="primary">
              Get Started
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

