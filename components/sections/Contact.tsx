"use client";

import { type FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Compass, Mail, MessageCircle } from "lucide-react";
import { reveal } from "@/components/motion/variants";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import { consultationSlots, contactInfo, formService } from "@/data/site";

type ContactFormState = {
  name: string;
  email: string;
  businessType: string;
  brief: string;
  botcheck: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  businessType: "",
  brief: "",
  botcheck: "",
};

type SubmitState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [selectedSlot, setSelectedSlot] = useState(consultationSlots[0]);
  const [status, setStatus] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      `Hi SR Studio, I want to book a free consultation. Preferred time: ${selectedSlot}.`,
    );
    return `https://wa.me/${contactInfo.whatsappNumber}?text=${message}`;
  }, [selectedSlot]);

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.email || !form.businessType || !form.brief) {
      setSubmitState("error");
      setStatus("Please fill all fields before booking.");
      return;
    }

    if (!formService.accessKey) {
      setSubmitState("error");
      setStatus("Form service is not configured yet. Add your free Web3Forms access key.");
      return;
    }

    setSubmitState("loading");
    setStatus("Sending your request...");

    const body = new FormData(event.currentTarget);
    body.append("access_key", formService.accessKey);
    body.append("subject", `Free consultation request from ${form.name}`);
    body.append("from_name", "SR Studio Website");
    body.append("preferred_time", selectedSlot);

    try {
      const response = await fetch(formService.endpoint, {
        method: "POST",
        body,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send the form right now.");
      }

      setSubmitState("success");
      setStatus("Request sent. We will get back to you soon.");
      setForm(initialFormState);
    } catch (error) {
      setSubmitState("error");
      setStatus(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-36">
      <AmbientParticles count={18} />
      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
              <Compass className="size-3.5" />
              Contact
            </span>
            <h2 className="font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight sm:text-6xl text-white">
              Let’s Build Something Extraordinary.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/62 sm:mt-6 sm:text-lg sm:leading-8 text-balance">
              Tell us what you are building. We will map the fastest path to a premium digital presence that earns trust and creates measurable demand.
            </p>
            <div className="mt-8 flex flex-col gap-4.5 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="magnetic inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-6 text-sm font-semibold text-emerald-100 transition-all duration-300 hover:bg-emerald-300/15"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="magnetic inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.045] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.08]"
              >
                <Mail className="size-4 text-cyan-100/72" />
                {contactInfo.email}
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="glow-border rounded-[26px] bg-[#080a10] p-[1.5px] sm:rounded-[32px]"
          >
            <div className="rounded-[25px] border border-white/10 bg-[#070912] p-6 backdrop-blur-2xl sm:rounded-[31px] sm:p-10">
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Name
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/28 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/28 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Business type
                  <input
                    required
                    name="business_type"
                    value={form.businessType}
                    onChange={(event) => updateField("businessType", event.target.value)}
                    className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/28 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                    placeholder="Restaurant, gym, clinic, coaching..."
                  />
                </label>
                <label className="grid gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                  Project brief
                  <textarea
                    required
                    name="message"
                    value={form.brief}
                    onChange={(event) => updateField("brief", event.target.value)}
                    className="min-h-32 resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/28 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                    placeholder="Tell us what you want to launch or improve."
                  />
                </label>
                <input
                  className="hidden"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.botcheck}
                  onChange={(event) => updateField("botcheck", event.target.value)}
                />
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="magnetic mt-2 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-black shadow-[0_0_40px_rgba(93,244,255,0.18)] hover:shadow-[0_0_48px_rgba(93,244,255,0.32)] hover:bg-cyan-50 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === "loading" ? "Sending Request..." : "Book a Free Consultation"}
                  <ArrowRight className="size-4" />
                </button>
                {status && (
                  <p
                    className={`text-center text-xs mt-1 ${
                      submitState === "error"
                        ? "text-rose-200"
                        : submitState === "success"
                          ? "text-emerald-200"
                          : "text-cyan-100/76"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-black/24 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Preferred call time</span>
                  <BadgeCheck className="size-4 text-cyan-100" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {consultationSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-medium transition-all duration-300 outline-none ${
                        selectedSlot === slot
                          ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100 shadow-[0_0_20px_rgba(93,244,255,0.15)]"
                          : "border-white/10 bg-white/[0.03] text-white/70 hover:border-cyan-300/20 hover:text-white"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-5 text-white/40">
                  Free setup: this sends through email or WhatsApp, so no paid form backend is needed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
