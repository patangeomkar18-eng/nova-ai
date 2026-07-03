import Hero from "../components/landing/Hero";
import FloatingCards from "../components/landing/FloatingCards";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import FAQ from "../components/landing/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <FloatingCards />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}