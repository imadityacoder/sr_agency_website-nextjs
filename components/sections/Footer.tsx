import { ArrowRight, Globe2, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footerIndustries, footerServices } from "@/data/site";

const socialLinks = [
  [Instagram, "Instagram"],
  [Linkedin, "LinkedIn"],
  [Globe2, "Behance"],
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/20 pb-8 pt-12 sm:pt-16">
      <div className="mx-auto mb-10 h-px w-[min(720px,80%)] origin-center bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent sm:mb-12" style={{ animation: "pulse-line 3.8s ease-in-out infinite" }} />
      <div className="section-shell">
        <div className="grid gap-8 border-b border-white/10 pb-9 md:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-cyan-200/25 bg-white/10 font-display text-sm font-bold shadow-[0_0_24px_rgba(93,244,255,0.14)]">
                SR
              </span>
              <div>
                <span className="block font-display font-semibold">SR Studio</span>
                <span className="text-xs uppercase tracking-[0.18em] text-cyan-100/58">Digital creative studio</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/56">
              Premium websites, AI workflows, branding, and conversion systems for businesses ready to look sharper and grow faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(([Icon, label]) => (
                <a
                  key={label}
                  href="#"
                  className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/64 transition hover:border-cyan-200/30 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Services</h3>
            <div className="mt-4 grid gap-2.5">
              {footerServices.map((item) => (
                <a key={item} href="#services" className="text-sm text-white/52 transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Industries</h3>
            <div className="mt-4 grid gap-2.5">
              {footerIndustries.map((item) => (
                <a key={item} href="#portfolio" className="text-sm text-white/52 transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Start a Project</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/56">
              <a href="mailto:hello@srstudio.co" className="flex items-center gap-2 transition hover:text-white">
                <Mail className="size-4 text-cyan-100/72" />
                hello@srstudio.co
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-2 transition hover:text-white">
                <Phone className="size-4 text-cyan-100/72" />
                +91 00000 00000
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-cyan-100/72" />
                India, serving global clients
              </span>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold !text-black transition hover:bg-cyan-100"
            >
              Book a Free Consultation
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SR Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="transition hover:text-white">Back to top</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
