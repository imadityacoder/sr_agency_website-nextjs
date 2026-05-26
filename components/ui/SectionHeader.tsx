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
      className="mx-auto mb-9 max-w-3xl text-center sm:mb-12"
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </span>
      <h2 className="font-display text-[2rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/62 sm:text-lg">{copy}</p>
    </motion.div>
  );
}
