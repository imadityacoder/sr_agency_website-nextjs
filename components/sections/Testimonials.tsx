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
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-32">
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
            transition={{ duration: 0.45 }}
            className="glass relative overflow-hidden rounded-[26px] p-5 sm:rounded-[32px] sm:p-10"
          >
            <div className="absolute right-5 top-5 text-white/8 sm:right-10 sm:top-10">
              <Star className="size-20 fill-current sm:size-28" />
            </div>
            <div className="mb-6 flex gap-2 text-cyan-100 sm:mb-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-5 fill-current" />
              ))}
            </div>
            <p className="relative max-w-3xl font-display text-xl font-medium leading-snug text-white sm:text-4xl">
              “{testimonial.quote}”
            </p>
            <div className="mt-9 flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-cyan-200 via-violet-300 to-rose-300 font-display font-bold text-black">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-white/54">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  active === index ? "w-10 bg-cyan-100" : "w-2.5 bg-white/24 hover:bg-white/44"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
