"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Check, Gem, ShieldCheck, Zap } from "lucide-react";
import { reveal, stagger } from "@/components/motion/variants";
import { advantages } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-36">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              <BrainCircuit className="size-3.5" />
              Why SR Studio
            </span>
            <h2 className="font-display text-[2rem] font-bold leading-[1.06] tracking-tight sm:text-5xl">
              Built to look premium, move fast, and convert better.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/62 sm:text-lg sm:leading-8">
              We combine SaaS-grade design discipline with local-business practicality: fast pages, precise funnels, AI-assisted operations, and brand systems that immediately raise perceived value.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {[
                ["2.5x", "faster launches"],
                ["90+", "mobile score"],
                ["24/7", "lead capture"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileInView={{ scale: [0.92, 1.04, 1] }}
                  viewport={{ once: true }}
                  className="glass rounded-[18px] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[22px] sm:p-5 text-center"
                >
                  <p className="font-display text-2xl font-extrabold text-cyan-100 sm:text-4xl lg:text-5xl">{value}</p>
                  <p className="mt-2 text-[0.7rem] font-medium leading-4 text-white/52 sm:text-xs uppercase tracking-wider">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {advantages.map(([title, copy], index) => (
              <motion.div
                key={title}
                variants={reveal}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-[22px] border border-white/10 bg-[#090b12] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-full bg-white/8 text-cyan-100">
                    {index % 3 === 0 ? <Zap className="size-4" /> : index % 3 === 1 ? <Gem className="size-4" /> : <ShieldCheck className="size-4" />}
                  </span>
                  <Check className="size-4 text-cyan-200" />
                </div>
                <h3 className="font-display font-bold text-white text-base tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/56">{copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
