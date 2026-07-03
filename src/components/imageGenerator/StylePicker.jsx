const styles = [
  { id: "realistic", label: "Realistic", gradient: "from-slate-500 to-slate-700" },
  { id: "cyberpunk", label: "Cyberpunk", gradient: "from-primary to-accent" },
  { id: "anime", label: "Anime", gradient: "from-sky-400 to-blue-600" },
  { id: "3d", label: "3D", gradient: "from-amber-400 to-orange-600" },
];

export default function StylePicker({ selected, onSelect }) {
  return (
    <div>
      <p className="text-sm text-text-secondary mb-3">Choose Style</p>
      <div className="grid grid-cols-4 gap-3">
        {styles.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.gradient} transition-all ${
                selected === s.id ? "ring-2 ring-primary ring-offset-2 ring-offset-surface" : "opacity-70"
              }`}
            />
            <span className={`text-xs ${selected === s.id ? "text-primary-light" : "text-text-muted"}`}>
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}