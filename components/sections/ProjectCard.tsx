"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink, Github, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { reveal } from "@/components/motion/variants";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isCompleted = project.status === "Completed";

  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="glass group flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-[#080a11]/90 p-3.5 backdrop-blur-xl sm:rounded-[28px] sm:p-4.5 hover:border-cyan-500/20 hover:shadow-[0_0_40px_rgba(93,244,255,0.06)]"
    >
      {/* Visual Thumbnail Area */}
      <div className={`relative h-44 overflow-hidden rounded-[18px] bg-gradient-to-br sm:h-52 sm:rounded-[22px] ${project.palette}`}>
        {/* Animated ambient light lines */}
        <motion.div
          animate={{ x: ["-50%", "50%", "-50%"] }}
          transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 left-1/4 w-32 rotate-12 bg-white/12 blur-3xl pointer-events-none"
        />

        {/* Abstract Wireframe Web UI Overlay for Premium Aesthetic */}
        <div className="absolute inset-3 rounded-[14px] border border-white/14 bg-black/35 p-3.5 backdrop-blur-md sm:inset-4 sm:p-4.5 flex flex-col justify-between select-none">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-white/90 backdrop-blur-sm">
              <Sparkles className="size-2.5 text-cyan-200" />
              {project.category}
            </span>
            <div className="flex gap-1">
              <span className="size-1.5 rounded-full bg-white/30" />
              <span className="size-1.5 rounded-full bg-white/30" />
              <span className="size-1.5 rounded-full bg-white/30" />
            </div>
          </div>

          {/* Center Mock Graphics */}
          <div className="my-auto space-y-1.5 sm:space-y-2">
            <span className="block h-2.5 w-3/4 rounded-full bg-white/60 transition-transform duration-500 group-hover:translate-x-1" />
            <span className="block h-2.5 w-1/2 rounded-full bg-white/35 transition-transform duration-500 group-hover:translate-x-2" />
            <span className="block h-2.5 w-5/6 rounded-full bg-white/20 transition-transform duration-500 group-hover:translate-x-1.5" />
          </div>

          {/* Status Overlay Footer */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-1.5">
              {project.techStack.slice(0, 2).map((tech) => (
                <span key={tech} className="text-[9px] font-medium text-white/50">
                  {tech}
                </span>
              ))}
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${isCompleted
                ? "border border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                : "border border-amber-300/20 bg-amber-400/10 text-amber-200"
                }`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-grow flex-col justify-between p-2.5 pt-4 sm:p-3">
        <div>
          {/* Title & Category Info */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl group-hover:text-cyan-100 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-white/55 sm:text-sm">
            {project.description}
          </p>

          {/* Key Features (3-5 bullet points) */}
          <div className="mt-4.5 border-t border-white/5 pt-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Key Features</p>
            <ul className="mt-2.5 space-y-2">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-500/10 text-cyan-200">
                    <Check className="size-2.5" />
                  </span>
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Area: Tech Stack & Action Buttons */}
        <div className="mt-5.5 border-t border-white/5 pt-4">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/6 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-white/50 transition-colors duration-300 group-hover:border-cyan-500/10 group-hover:bg-cyan-500/5 group-hover:text-cyan-200/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex items-center gap-2">
            {project.liveUrl && project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-xs font-semibold bg-white hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(93,244,255,0.25)] active:scale-98 transition-all duration-300"
              >
                <span className="!text-black">Live Website</span>
                <ExternalLink className="size-3.5" />
              </a>
            ) : (
              <span className="flex-grow py-2 px-4 rounded-full text-xs font-semibold bg-white/5 text-white/40 border border-white/5 cursor-not-allowed text-center">
                Demo Unavailable
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95 transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <Github className="size-4.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
