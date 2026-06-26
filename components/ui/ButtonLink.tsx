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
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-[0.02em] transition-all duration-300 outline-none ${
        variant === "primary"
          ? "bg-white !text-black shadow-[0_0_36px_rgba(93,244,255,0.28)] hover:bg-cyan-50 hover:shadow-[0_0_48px_rgba(93,244,255,0.45)]"
          : "border border-white/14 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10 hover:border-cyan-300/30"
      }`}
    >
      <span className={variant === "primary" ? "!text-black" : "text-white"}>
        {children}
      </span>

      <ArrowRight
        className={`size-4 transition-transform duration-300 group-hover:translate-x-1 ${
          variant === "primary" ? "!text-black" : "text-white"
        }`}
      />
    </motion.a>
  );
}