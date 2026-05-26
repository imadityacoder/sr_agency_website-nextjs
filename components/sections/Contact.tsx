"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Compass, Mail, MessageCircle } from "lucide-react";
import { reveal } from "@/components/motion/variants";
import { AmbientParticles } from "@/components/ui/AmbientParticles";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-32">
      <AmbientParticles count={18} />
      <div className="section-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              <Compass className="size-3.5" />
              Contact
            </span>
            <h2 className="font-display text-[2.35rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl">
              Let’s Build Something Extraordinary.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/62 sm:mt-6 sm:text-lg sm:leading-8">
              Tell us what you are building. We will map the fastest path to a premium digital presence that earns trust and creates measurable demand.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/"
                className="magnetic inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/10 px-5 text-sm font-semibold text-emerald-100"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href="mailto:hello@srstudio.co"
                className="magnetic inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 text-sm font-semibold"
              >
                <Mail className="size-4" />
                hello@srstudio.co
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="glow-border rounded-[26px] bg-[#080a10] p-[1px] sm:rounded-[32px]"
          >
            <div className="rounded-[25px] border border-white/10 bg-white/[0.055] p-4 backdrop-blur-2xl sm:rounded-[31px] sm:p-7">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-white/72">
                    Name
                    <input className="min-h-12 rounded-2xl border border-white/10 bg-black/28 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-cyan-200/40" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2 text-sm text-white/72">
                    Email
                    <input className="min-h-12 rounded-2xl border border-white/10 bg-black/28 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-cyan-200/40" placeholder="you@company.com" />
                  </label>
                </div>
                <label className="grid gap-2 text-sm text-white/72">
                  Business type
                  <input className="min-h-12 rounded-2xl border border-white/10 bg-black/28 px-4 text-white outline-none transition placeholder:text-white/28 focus:border-cyan-200/40" placeholder="Restaurant, gym, clinic, coaching..." />
                </label>
                <label className="grid gap-2 text-sm text-white/72">
                  Project brief
                  <textarea className="min-h-32 resize-none rounded-2xl border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-cyan-200/40" placeholder="Tell us what you want to launch or improve." />
                </label>
                <button
                  type="button"
                  className="magnetic mt-2 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold !text-black shadow-[0_0_40px_rgba(93,244,255,0.18)]"
                >
                  Book a Free Consultation
                  <ArrowRight className="size-4" />
                </button>
              </form>
              <div className="mt-5 rounded-[24px] border border-white/10 bg-black/24 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/82">Calendly</span>
                  <BadgeCheck className="size-4 text-cyan-100" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["11:00", "14:30", "18:00"].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-sm text-white/72 transition hover:border-cyan-200/40 hover:text-white"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
