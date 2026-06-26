"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { pricingPackages, maintenancePlans } from "@/data/site";
import { reveal, stagger } from "@/components/motion/variants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import { ButtonLink } from "@/components/ui/ButtonLink";

function AnimatedPrice({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <span className="font-display">
      ₹{value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-36 overflow-hidden">
      {/* Dynamic Ambient Background Lights */}
      <div 
        className="cinematic-light absolute top-[10%] left-[5%] size-[35rem] rounded-full opacity-35" 
        style={{ filter: "blur(120px)" }} 
      />
      <div 
        className="cinematic-light absolute bottom-[20%] right-[5%] size-[40rem] rounded-full opacity-20" 
        style={{ filter: "blur(140px)" }} 
      />

      <AmbientParticles count={15} />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-border-flow {
          background-size: 200% 200%;
          animation: border-flow 6s ease infinite;
        }
      `}} />

      <div className="section-shell relative z-10">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent Pricing"
          copy="Premium websites crafted to help businesses attract more customers, build trust, and grow faster online."
        />

        {/* Main Packages Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-8 items-stretch md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {pricingPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <motion.article
                key={pkg.name}
                variants={reveal}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group relative flex flex-col justify-between rounded-[28px] p-[1.5px] transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-r from-[#5df4ff] via-[#9b5cff] to-[#ff5fb7] animate-border-flow shadow-[0_0_50px_rgba(93,244,255,0.22)] scale-[1.02] md:scale-[1.05] z-10"
                    : "bg-white/8 hover:bg-white/12 border border-white/10 hover:border-white/16 shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                }`}
              >
                {/* Popular Card Inner Glow Background Overlay */}
                {isPopular && (
                  <div className="absolute inset-0 rounded-[26px] bg-gradient-to-b from-[#5df4ff]/8 to-transparent pointer-events-none" />
                )}

                <div className="flex h-full flex-col justify-between rounded-[26px] bg-[#070912] p-6 backdrop-blur-xl sm:p-8">
                  <div>
                    {/* Header Details */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        isPopular ? "text-cyan-200" : "text-white/60"
                      }`}>
                        {pkg.bestFor.split(",")[0] || pkg.name}
                      </span>
                      {isPopular && (
                        <span className="flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-200 shadow-[0_0_12px_rgba(93,244,255,0.25)] animate-pulse">
                          <Sparkles className="size-3" />
                          Most Popular
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      Best for: {pkg.bestFor}
                    </p>

                    {/* Price Tag */}
                    <div className="mt-6 flex items-baseline text-white">
                      <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <AnimatedPrice value={pkg.price} suffix={pkg.suffix} />
                      </span>
                      <span className="ml-1 text-sm font-medium text-white/50">one-time</span>
                    </div>

                    <hr className="my-6 border-white/10" />

                    {/* Features List */}
                    <ul className="space-y-3.5">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                          <span className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                            isPopular 
                              ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200" 
                              : "border-white/10 bg-white/5 text-white/60"
                          }`}>
                            <Check className="size-3" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <ButtonLink
                      href={pkg.ctaHref}
                      variant={isPopular ? "primary" : "secondary"}
                    >
                      {pkg.ctaText}
                    </ButtonLink>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Custom Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative mt-20 rounded-[28px] border border-white/10 bg-[#090b12] p-8 sm:mt-28 sm:p-12 overflow-hidden"
        >
          {/* Subtle neon gradient light inside the custom block */}
          <div className="cinematic-light absolute -right-20 -top-20 size-80 rounded-full opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                <HelpCircle className="size-3.5 text-cyan-200" />
                Custom Solutions
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need Something Unique?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/56 sm:text-base sm:leading-7 text-balance">
                SR Studio builds fully custom digital experiences including booking systems, business dashboards, customer portals, automation workflows, and enterprise-grade web solutions tailored to your business goals.
              </p>
            </div>
            <div className="shrink-0">
              <ButtonLink href="#contact" variant="primary">
                Request Custom Quote
              </ButtonLink>
            </div>
          </div>
        </motion.div>

        {/* Maintenance Plans Title Section */}
        <div className="mt-24 sm:mt-36 mb-12 text-center">
          <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Website Maintenance Plans
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xl mx-auto text-balance">
            Keep your website secure, fast, and up-to-date with our active care subscriptions.
          </p>
        </div>

        {/* Maintenance Plans Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {maintenancePlans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={reveal}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass group relative flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#090b12] p-6 transition-all duration-300 hover:border-cyan-400/20"
            >
              <div>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {plan.name}
                </h4>
                
                {/* Plan Price */}
                <div className="mt-3 flex items-baseline text-white">
                  <span className="text-3xl font-extrabold tracking-tight">
                    <AnimatedPrice value={plan.price} />
                  </span>
                  <span className="ml-1 text-xs text-white/40">/month</span>
                </div>

                <hr className="my-5 border-white/10" />

                {/* Features list */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/65">
                      <Check className="size-3.5 text-cyan-200 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex w-full min-h-11 items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-cyan-400/20 hover:text-white transition-all duration-300"
                >
                  Choose Plan
                  <ArrowRight className="size-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
