import { Navbar } from "@/components/layout/Navbar";
import {
  Contact,
  Footer,
  Hero,
  Portfolio,
  Process,
  Services,
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
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
