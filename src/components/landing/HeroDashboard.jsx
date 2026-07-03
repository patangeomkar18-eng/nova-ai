export default function HeroDashboard() {
  return (
    <div className="relative h-[420px] flex items-center justify-center">
      <div className="w-72 h-72 rounded-full bg-brand-gradient blur-2xl opacity-40 absolute" />
      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary-light to-accent opacity-80 shadow-glow" />
    </div>
  );
}