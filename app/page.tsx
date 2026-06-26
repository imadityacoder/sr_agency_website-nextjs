import { Navbar } from "@/components/layout/Navbar";
import {
  Contact,
  Footer,
  Hero,
  Portfolio,
  Process,
  Services,
  Pricing,
  Testimonials,
  WhyChooseUs,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="noise" />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
