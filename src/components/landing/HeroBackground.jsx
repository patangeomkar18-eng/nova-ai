import heroBg from "../../assets/home-background.png";

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-base/70 via-base/20 to-transparent" />
    </div>
  );
}