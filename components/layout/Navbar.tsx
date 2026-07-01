"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { inherits } from "util";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const compact = useTransform(scrollY, [0, 160], [0, 1]);
  const scale = useTransform(compact, [0, 1], [1, 0.985]);
  const y = useTransform(compact, [0, 1], [18, 10]);

  // Spring-animated scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.header
      style={{ scale, y }}
      className="fixed left-0 right-0 top-0 z-50 mx-auto w-full px-4"
    >
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/12 bg-black/40 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-5 overflow-hidden">
        <a href="#top" className="flex items-center gap-3 relative z-50 outline-none">
          <span className="grid size-10 place-items-center overflow-hidden rounded-full border border-cyan-200/25 bg-transparent shadow-[0_0_24px_rgba(93,244,255,0.18)]">
            <Image
              src="/logo/logo.png"
              alt="SR Studio logo"
              width={40}
              height={40}
              priority
              className="size-10 object-contain p-1"
            />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide">SR Studio</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-white/66 transition hover:bg-white/8 hover:text-white outline-none focus-visible:ring-1 focus-visible:ring-cyan-100"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold !text-black transition hover:bg-cyan-100 md:inline-flex relative z-50"

        >
          Book Call
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid size-10 place-items-center rounded-full border border-white/10 bg-white/8 md:hidden outline-none focus-visible:ring-1 focus-visible:ring-cyan-100"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Dynamic Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-rose-400 origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 -z-10 flex h-screen w-screen flex-col justify-between bg-black/94 p-6 pt-32 pb-8 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-200/60">
                Menu Overview
              </span>
              <div className="flex flex-col gap-1">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                    className="font-display text-3xl font-semibold text-white/90 transition hover:text-cyan-200 py-2.5 active:scale-95"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 text-center">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white text-sm font-bold text-black shadow-[0_0_24px_rgba(93,244,255,0.22)] active:scale-98 transition"
              >
                Book a Free Consultation
              </a>
              <div className="text-xs text-white/40 leading-5">
                iamadityafreelancer@gmail.com <br /> +91 88771 30087
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
