const testimonials = [
  {
    quote: "Nova AI cut our content production time in half. It's now part of our daily workflow.",
    name: "Priya Sharma",
    role: "Marketing Lead, Flux",
  },
  {
    quote: "The AI chat understands context better than anything else we've tried.",
    name: "Daniel Cho",
    role: "Product Manager, Orbit",
  },
  {
    quote: "We replaced three separate tools with just Nova AI. Simple as that.",
    name: "Maya Torres",
    role: "Founder, Studio Nine",
  },
];

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("");
}

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-center">Loved by teams everywhere</h2>

      <div className="grid sm:grid-cols-3 gap-6 mt-14">
        {testimonials.map(({ quote, name, role }) => (
          <div key={name} className="bg-surface border border-border rounded-xl p-6">
            <p className="text-sm text-text-secondary leading-relaxed">"{quote}"</p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center
                text-xs font-semibold text-white">
                {initials(name)}
              </div>
              <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-text-muted">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}