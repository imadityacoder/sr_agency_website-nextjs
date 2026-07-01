export const navItems = ["Services", "Pricing", "Works", "Process", "Testimonials", "Contact"];

export const heroStats = [
  "50+ Projects",
  "98% Client Satisfaction",
  "Fast Delivery",
  "Mobile Optimized",
];

export const floatingProjects = [
  {
    title: "Gym Website",
    tag: "Membership funnel",
    color: "from-cyan-300/70 to-blue-500/60",
    metric: "+42%",
  },
  {
    title: "Restaurant Website",
    tag: "Reservations",
    color: "from-rose-300/70 to-violet-500/60",
    metric: "3.8x",
  },
  {
    title: "Coaching Website",
    tag: "Lead engine",
    color: "from-amber-200/70 to-violet-500/60",
    metric: "91%",
  },
  {
    title: "Clinic Dashboard",
    tag: "Appointments",
    color: "from-emerald-300/70 to-cyan-500/60",
    metric: "24/7",
  },
];

export const serviceItems = [
  {
    title: "Website Design",
    copy: "Premium business websites that look sharp, load fast, and turn attention into action.",
    icon: "code",
  },
  {
    title: "UI/UX Design",
    copy: "Interface systems shaped for clarity, trust, and effortless customer journeys.",
    icon: "dashboard",
  },
  {
    title: "Branding",
    copy: "Identity, visual direction, and launch assets that make local brands feel category-leading.",
    icon: "palette",
  },
  {
    title: "AI Automation",
    copy: "Smart workflows, AI assistants, and operational flows that save hours every week.",
    icon: "bot",
  },
  {
    title: "SEO Optimization",
    copy: "Technical structure, speed, and content foundations built for discoverability.",
    icon: "search",
  },
  {
    title: "Booking Systems",
    copy: "Appointments, tables, classes, consults, and reminders connected into one polished flow.",
    icon: "calendar",
  },
  {
    title: "Landing Pages",
    copy: "Focused campaigns with persuasive layouts, fast iteration, and conversion-first sections.",
    icon: "target",
  },
  {
    title: "Business Dashboards",
    copy: "Clean portals for leads, bookings, analytics, staff tasks, and customer insights.",
    icon: "chart",
  },
] as const;


export const advantages = [
  ["Fast delivery", "Launch-ready systems without the usual drag."],
  ["Modern UI", "Premium visuals aligned with today’s best digital products."],
  ["Mobile-first", "Every flow is designed for thumbs, speed, and clarity."],
  ["AI workflows", "Automations that help teams respond and operate faster."],
  ["SEO structure", "Clean technical foundations for search and local intent."],
  ["Premium branding", "Visual systems that make businesses feel more trusted."],
  ["Smooth animations", "Motion that adds depth without slowing the experience."],
  ["Conversion focus", "Every section earns its place in the customer journey."],
];

export const processSteps = [
  ["Discovery", "We map your goals, audience, offer, and growth bottlenecks."],
  ["Strategy", "We shape the site architecture, conversion paths, and brand direction."],
  ["Design", "We craft a cinematic interface system with responsive prototypes."],
  ["Development", "We build a fast, scalable web experience with polished interactions."],
  ["Launch", "We optimize, connect tools, test flows, and go live with confidence."],
];

export const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Founder, Apex Luxury Gym",
    quote:
      "SR Studio made our brand feel premium overnight. The new site turned ad traffic into booked tours almost immediately.",
  },
  {
    name: "Ananya Rao",
    role: "Director, Vector IIT Academy",
    quote:
      "They understood trust, parents, and conversion. The design feels world-class and our inquiry quality is noticeably better.",
  },
  {
    name: "Dr. Kavya Shah",
    role: "Owner, Elysian Clinic",
    quote:
      "The booking flow is beautiful, simple, and reliable. Patients finally find the right service without calling reception first.",
  },
];

export const footerServices = [
  "Website Design",
  "AI Automation",
  "Branding",
  "Landing Pages",
  "Booking Systems",
  "Business Dashboards",
];

export const footerIndustries = [
  "Restaurants",
  "Gyms",
  "Clinics",
  "Cafes",
  "Salons",
  "Coaching Institutes",
];

export const contactInfo = {
  email: "srstudioindia@gmail.com",
  phoneDisplay: "+91 88771 30087",
  phoneHref: "+918877130087",
  whatsappNumber: "918877130087",
};

export const consultationSlots = ["11:00", "14:30", "18:00"];

export const formService = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
};

export const pricingPackages = [
  {
    name: "Starter Website",
    price: 9999,
    suffix: "",
    bestFor: "Salons, Cafes, Small Businesses, Local Services",
    features: [
      "Premium Landing Page",
      "Mobile Responsive Design",
      "WhatsApp Integration",
      "Contact Form",
      "Google Maps Integration",
      "Basic SEO Setup",
      "Fast Loading Optimization",
      "7 Days Support",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Business Growth Website",
    price: 11999,
    suffix: "",
    popular: true,
    bestFor: "Restaurants, Gyms, Clinics, Coaching Institutes, Growing Businesses",
    features: [
      "Up to 5 Custom Pages",
      "Premium UI/UX Design",
      "Booking & Inquiry Forms",
      "Advanced Mobile Optimization",
      "SEO Optimization",
      "Testimonials Section",
      "Google Analytics Setup",
      "Speed Optimization",
      "Social Media Integration",
      "30 Days Support",
    ],
    ctaText: "Book Consultation",
    ctaHref: "#contact",
  },
  {
    name: "Premium Business Website",
    price: 24999,
    suffix: "+",
    bestFor: "Large Coaching Institutes, Multi-location Clinics, Established Brands, High Growth Businesses",
    features: [
      "Unlimited Pages",
      "Custom Design System",
      "AI-Powered Features",
      "CRM Integration",
      "Advanced SEO Setup",
      "Premium Animations",
      "Conversion Optimization",
      "Performance Optimization",
      "Priority Support",
    ],
    ctaText: "Schedule Strategy Call",
    ctaHref: "#contact",
  },
];

export const maintenancePlans = [
  {
    name: "Essential Care",
    price: 599,
    features: [
      "Security Updates",
      "Monthly Backup",
      "Content Changes",
      "Email Support",
    ],
  },
  {
    name: "Growth Care",
    price: 1999,
    features: [
      "Everything in Essential",
      "Performance Monitoring",
      "SEO Monitoring",
      "Priority Support",
    ],
  },
  {
    name: "Business Care",
    price: 2999,
    features: [
      "Everything in Growth",
      "Monthly Reports",
      "Landing Page Updates",
      "Conversion Improvements",
      "Dedicated Support",
    ],
  },
];
