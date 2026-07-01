export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Completed" | "In Development";
  palette: string; // Tailwind gradient palette for beautiful card fallback headers
  filterCategories: ("Education" | "Startup" | "Business" | "Portfolio")[];
}

export const projects: Project[] = [
  {
    id: "shree-ram-classes",
    title: "Shree Ram Classes",
    category: "Educational Website",
    description: "A premium coaching institute website with online admissions, course information, and responsive layout.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Web3Forms"],
    features: [
      "Online Admission Form",
      "Interactive Contact Form",
      "Course & Batch Showcase",
      "Faculty Profile Section",
      "Student Review Carousel",
      "Mobile-First Responsive Layout",
      "Fast Loading & SEO Optimized",
    ],
    liveUrl: "https://shreeramclassespatna.in",
    status: "Completed",
    palette: "from-amber-400 via-orange-500 to-red-950",
    filterCategories: ["Education", "Business"],
  },
  {
    id: "english-guide",
    title: "English Guide",
    category: "Coaching Institute Website",
    description: "A modern website for an English coaching institute featuring course information, schedules, and inquiry forms.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Flexible Batch Details",
      "Course Information Grid",
      "Secure Inquiry Contact Form",
      "Responsive Layout Design",
      "Professional Modern Landing Page",
    ],
    liveUrl: "https://english-guide-website.vercel.app",
    status: "Completed",
    palette: "from-violet-500 via-purple-600 to-indigo-950",
    filterCategories: ["Education", "Business"],
  },
  {
    id: "digital-herbarium",
    title: "Digital Herbarium",
    category: "Educational Project Website",
    description: "An interactive digital herbarium featuring animated plant pages, scientific taxonomy details, and QR integration.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Virtual Plant Collection",
      "Scientific Classification Search",
      "Dynamic Page Animations",
      "Responsive Fluid Layout",
      "QR Code Integration",
    ],
    liveUrl: "https://pallavi-digital-herbarium-collectio.vercel.app", // Live link not provided
    status: "Completed",
    palette: "from-emerald-400 via-teal-500 to-zinc-950",
    filterCategories: ["Education"],
  },
  {
    id: "replaner",
    title: "Replaner",
    category: "Startup Product",
    description: "A startup platform connecting local scrap collectors with customers through a clean and user-friendly digital experience.",
    techStack: ["Flutter", "Firebase", "Riverpod"],
    features: [
      "Interactive Customer Dashboard",
      "Scrap Pickup Booking Flow",
      "Real-time Booking Updates",
      "Clean Material-Design UI",
      "Mobile-First Performance",
    ],
    liveUrl: "https://replaner.in", // Live link not provided
    status: "Completed",
    palette: "from-cyan-400 via-blue-500 to-slate-950",
    filterCategories: ["Startup", "Business"],
  },
  {
    id: "sr-studio-portfolio",
    title: "SR Studio Portfolio",
    category: "Agency Website",
    description: "Official portfolio website of SR Studio showcasing design services, technologies, and recent projects.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Modern Portfolio Grid",
      "Interactive Services Cards",
      "Responsive Layout Systems",
      "Dynamic Inquiry Forms",
      "Premium Cinematic Dark Mode",
    ],
    liveUrl: "/",
    status: "Completed",
    palette: "from-pink-500 via-rose-600 to-neutral-950",
    filterCategories: ["Portfolio", "Business"],
  },
];
