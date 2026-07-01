"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="mt-12 sm:mt-16">
      <motion.div layout className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
                opacity: { duration: 0.25 },
              }}
              key={project.id}
              className="w-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
