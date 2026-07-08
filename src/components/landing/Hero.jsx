import homeBg from "../../assets/hero-background.png";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden aspect-[1720/914] w-full">
      {/* Full background image, matched aspect ratio = no cropping, no letterboxing */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${homeBg})`,
       }}
      />

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-[#09090F]/25" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <HeroContent />
      </div>
    </section>
  );
}