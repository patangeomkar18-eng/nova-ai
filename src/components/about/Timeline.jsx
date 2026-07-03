const milestones = [
  { year: "2023", title: "The Idea", desc: "Nova AI was founded with a simple idea." },
  { year: "2023", title: "First Launch", desc: "Launched the MVP with core features." },
  { year: "2024", title: "Growth", desc: "Reached 10K+ users worldwide." },
  { year: "2024", title: "The Future", desc: "Building the future of productivity." },
];

export default function Timeline() {
  return (
    <div className="max-w-5xl mx-auto mt-24">
      <h2 className="text-2xl font-semibold text-center mb-14">Our Journey</h2>
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="absolute top-2 left-0 right-0 h-px bg-border hidden sm:block" />
        {milestones.map((m, i) => (
          <div key={i} className="relative text-center">
            <div className="w-4 h-4 rounded-full bg-brand-gradient mx-auto mb-4 relative z-10 ring-4 ring-base" />
            <p className="text-sm font-semibold text-primary-light">{m.year}</p>
            <p className="font-medium mt-1">{m.title}</p>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}