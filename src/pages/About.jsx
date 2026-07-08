import PageBackground from "../layouts/PageBackground";

import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import MissionSection from "../components/about/MissionSection";
import Timeline from "../components/about/Timeline";

export default function About() {
  return (
    <PageBackground>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AboutHero />
        <AboutStats />
        <MissionSection />
        <Timeline />
      </section>
    </PageBackground>
  );
}