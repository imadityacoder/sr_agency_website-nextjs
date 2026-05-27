"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const compact = useTransform(scrollY, [0, 160], [0, 1]);
  const scale = useTransform(compact, [0, 1], [1, 0.985]);
  const y = useTransform(compact, [0, 1], [18, 10]);

  return (
    <motion.header
      style={{ scale, y }}
      className="fixed left-0 right-0 top-0 z-50 mx-auto w-full px-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/12 bg-black/40 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-5">
        <a href="#top" className="flex items-center gap-3">
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
              className="rounded-full px-4 py-2 text-sm text-white/66 transition hover:bg-white/8 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold !text-black transition hover:bg-cyan-100 md:inline-flex"
        >
          Book Call
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/8 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-[22px] border border-white/12 bg-black/82 p-3 backdrop-blur-2xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-white/78 transition hover:bg-white/8"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
