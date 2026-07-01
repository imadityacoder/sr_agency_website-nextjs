"use client";

import { motion } from "framer-motion";

export type FilterCategory = "All" | "Education" | "Startup" | "Business" | "Portfolio";

interface FilterButtonsProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  const categories: FilterCategory[] = ["All", "Education", "Startup", "Business", "Portfolio"];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {categories.map((category) => {
        const isActive = activeFilter === category;
        return (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className="relative min-h-9 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 outline-none select-none rounded-full"
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 block transition-colors duration-300 ${
                isActive ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}
