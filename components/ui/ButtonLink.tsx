"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[0.01em] transition ${
        variant === "primary"
          ? "bg-white !text-black shadow-[0_0_36px_rgba(93,244,255,0.22)]"
          : "border border-white/14 bg-white/[0.045] text-white backdrop-blur-xl hover:border-cyan-200/40"
      }`}
    >
      {children}
      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
    </motion.a>
  );
}
