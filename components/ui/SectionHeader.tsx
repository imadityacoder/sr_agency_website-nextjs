"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { reveal } from "@/components/motion/variants";

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
    >
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </span>
      <h2 className="font-display text-[2rem] font-bold leading-[1.06] tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg sm:leading-8 text-balance">
        {copy}
      </p>
    </motion.div>
  );
}
