"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { floatingProjects } from "@/data/site";

export function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-220, 220], [8, -8]);
  const rotateY = useTransform(mouseX, [-220, 220], [-10, 10]);
  const springX = useSpring(rotateX, { stiffness: 90, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 90, damping: 20 });

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left - rect.width / 2);
        mouseY.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-10 grid w-full max-w-[620px] gap-3 sm:grid-cols-2 md:block md:min-h-[520px] lg:mt-0"
    >
      <div className="cinematic-light left-10 top-2 h-52 w-96 -rotate-12 max-md:hidden" />
      <div className="cinematic-light bottom-10 right-4 h-44 w-80 rotate-12 max-md:hidden" />
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 1.2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass scanline relative rounded-[24px] p-4 sm:col-span-2 sm:p-5 md:absolute md:left-6 md:top-12 md:w-[78%] md:rounded-[28px]"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/60">Live growth system</p>
            <h3 className="font-display text-lg font-semibold sm:text-xl">Shree Ram Classes, Patna</h3>
          </div>
          <div className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold text-emerald-200">
            Active
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[78, 56, 92].map((height, index) => (
            <div key={height} className="rounded-2xl border border-white/10 bg-black/26 p-3">
              <div className="mb-3 h-16 overflow-hidden rounded-xl bg-white/[0.035]">
                <motion.div
                  animate={{ height: [`${height - 24}%`, `${height}%`, `${height - 10}%`] }}
                  transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-auto w-full rounded-xl bg-gradient-to-t from-cyan-300/20 to-cyan-200"
                />
              </div>
              <div className="h-2 w-2/3 rounded-full bg-white/18" />
            </div>
          ))}
        </div>
      </motion.div>

      {floatingProjects.map((project, index) => (
        <motion.div
          key={project.title}
          animate={{ y: [0, index % 2 ? 16 : -16, 0], x: [0, index % 2 ? -8 : 8, 0] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
          className={`glass relative rounded-[22px] p-3 sm:p-4 md:absolute md:w-[220px] md:rounded-[24px] ${index === 0
              ? "md:right-1 md:top-0"
              : index === 1
                ? "md:bottom-24 md:left-0"
                : index === 2
                  ? "md:bottom-0 md:right-8"
                  : "md:left-12 md:top-72"
            }`}
          style={{ transform: `translateZ(${60 + index * 20}px)` }}
        >
          <div className={`mb-3 h-20 rounded-[18px] bg-gradient-to-br ${project.color} p-3 shadow-[0_20px_48px_rgba(0,0,0,0.24)] sm:mb-4 sm:h-24`}>
            <div className="flex h-full flex-col justify-between">
              <div className="flex gap-1">
                <span className="size-2 rounded-full bg-white/80" />
                <span className="size-2 rounded-full bg-white/50" />
                <span className="size-2 rounded-full bg-white/30" />
              </div>
              <div className="space-y-1">
                <span className="block h-2 w-2/3 rounded-full bg-white/72" />
                <span className="block h-2 w-1/2 rounded-full bg-white/42" />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <h4 className="font-display text-sm font-semibold">{project.title}</h4>
              <p className="mt-1 text-xs text-white/52">{project.tag}</p>
            </div>
            <span className="font-display text-lg font-bold text-cyan-100">{project.metric}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
