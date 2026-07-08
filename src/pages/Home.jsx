import Hero from "../components/landing/Hero";
import homeBg2 from "../assets/home-bg2.png";

import FloatingCards from "../components/landing/FloatingCards";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import FAQ from "../components/landing/FAQ";

export default function Home() {
  return (
    <div className="bg-[#09090F] text-white">

      {/* Hero uses hero-background.png */}
      <Hero />

      {/* Everything below Hero uses home-bg2.png */}
      <div
        style={{
          backgroundImage: `url(${homeBg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center 5px", // ↓ Move image down
        }}
      >
        <FloatingCards />
        <Stats />
        <Features />
        <Testimonials />
        <CTA />
        <FAQ />
      </div>

    </div>
  );
}