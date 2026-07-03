export default function MissionSection() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mt-24">
      <div>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-text-secondary mt-4 leading-relaxed">
          To make advanced AI accessible to everyone and help individuals
          and teams work smarter, faster, and achieve more.
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden border border-border aspect-video bg-gradient-to-br from-primary/30 via-surface to-accent/20 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-brand-gradient blur-xl opacity-60" />
      </div>
    </div>
  );
}