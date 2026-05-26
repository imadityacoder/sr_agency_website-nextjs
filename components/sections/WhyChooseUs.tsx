"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Check, Gem, ShieldCheck, Zap } from "lucide-react";
import { reveal, stagger } from "@/components/motion/variants";
import { advantages } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative py-16 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              <BrainCircuit className="size-3.5" />
              Why SR Studio
            </span>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.04] tracking-tight sm:text-5xl">
              Built to look premium, move fast, and convert better.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              We combine SaaS-grade design discipline with local-business practicality: fast pages, precise funnels, AI-assisted operations, and brand systems that immediately raise perceived value.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-2.5 sm:mt-8 sm:gap-3">
              {[
                ["2.5x", "faster launches"],
                ["90+", "mobile score"],
                ["24/7", "lead capture"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileInView={{ scale: [0.92, 1.04, 1] }}
                  viewport={{ once: true }}
                  className="rounded-[18px] border border-white/10 bg-white/[0.045] p-3 sm:rounded-[22px] sm:p-4"
                >
                  <p className="font-display text-xl font-semibold text-cyan-100 sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[0.7rem] leading-4 text-white/52 sm:text-xs">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {advantages.map(([title, copy], index) => (
              <motion.div
                key={title}
                variants={reveal}
                whileHover={{ x: 4 }}
                className="rounded-[22px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-full bg-white/8 text-cyan-100">
                    {index % 3 === 0 ? <Zap className="size-4" /> : index % 3 === 1 ? <Gem className="size-4" /> : <ShieldCheck className="size-4" />}
                  </span>
                  <Check className="size-4 text-emerald-200" />
                </div>
                <h3 className="font-display font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/56">{copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
