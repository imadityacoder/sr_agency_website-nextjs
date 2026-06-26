"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 sm:py-36">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by founders who need their first impression to work harder."
          copy="Premium design is not decoration. It is confidence, clarity, and conversion arriving at the same time."
        />
        <div className="mx-auto max-w-4xl">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass relative overflow-hidden rounded-[26px] p-6 sm:rounded-[32px] sm:p-12 bg-[#090b12] border border-white/10"
          >
            <div className="absolute right-6 top-6 text-white/5 sm:right-12 sm:top-12 pointer-events-none">
              <Star className="size-20 fill-current sm:size-28" />
            </div>
            <div className="mb-6 flex gap-2 text-cyan-100 sm:mb-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-5 fill-current" />
              ))}
            </div>
            <p className="relative max-w-3xl font-display text-2xl font-bold leading-normal tracking-tight text-white/90 sm:text-4xl italic text-balance">
              “{testimonial.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-cyan-200 via-violet-300 to-rose-300 font-display font-bold text-black shadow-md">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="font-bold text-white text-base sm:text-lg">{testimonial.name}</p>
                <p className="text-sm text-white/54 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-cyan-100 ${
                  active === index ? "w-12 bg-cyan-100" : "w-3 bg-white/24 hover:bg-white/44"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
