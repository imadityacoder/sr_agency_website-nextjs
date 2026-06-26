"use client";

import { motion } from "framer-motion";
import { Clock3, Gauge, Rocket, Star, WandSparkles } from "lucide-react";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { reveal, stagger } from "@/components/motion/variants";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroStats } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:min-h-screen sm:pb-0 sm:pt-40">
      <AmbientParticles count={28} />
      <div className="section-shell relative z-10 grid items-center gap-12 sm:min-h-[calc(100vh-160px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div
            variants={reveal}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80 backdrop-blur-xl"
          >
            <WandSparkles className="size-4" />
            Futuristic digital agency for ambitious brands
          </motion.div>
          <motion.h1
            variants={reveal}
            className="font-display max-w-5xl text-[2.75rem] font-bold leading-[1.04] tracking-tight sm:text-7xl lg:text-[80px]"
          >
            <span className="gradient-text">We Build Digital Experiences That Grow Businesses.</span>
          </motion.h1>
          <motion.p 
            variants={reveal} 
            className="mt-6 max-w-xl text-base leading-relaxed text-white/66 sm:mt-7 sm:text-lg sm:leading-8 text-balance"
          >
            Modern websites, AI-powered workflows, and premium brand experiences for ambitious businesses.
          </motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row">
            <ButtonLink href="#contact">Book a Free Consultation</ButtonLink>
            <ButtonLink href="#portfolio" variant="secondary">
              View Our Work
            </ButtonLink>
          </motion.div>
          <motion.div variants={reveal} className="mt-10 mb-4 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-[18px] border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-xl sm:rounded-[20px] transition-colors hover:border-cyan-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-2.5 flex items-center gap-2 text-cyan-100">
                  {index === 0 ? <Rocket className="size-4" /> : index === 1 ? <Star className="size-4" /> : index === 2 ? <Clock3 className="size-4" /> : <Gauge className="size-4" />}
                </div>
                <p className="text-[0.8rem] font-semibold leading-5 text-white sm:text-sm">{stat}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#030406] to-transparent" />
    </section>
  );
}
