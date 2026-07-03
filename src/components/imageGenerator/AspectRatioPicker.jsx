const ratios = ["1:1", "16:9", "9:16", "4:3"];

export default function AspectRatioPicker({ selected, onSelect }) {
  return (
    <div>
      <p className="text-sm text-text-secondary mb-3">Aspect Ratio</p>
      <div className="grid grid-cols-4 gap-2">
        {ratios.map((r) => (
          <button
            key={r}
            onClick={() => onSelect(r)}
            className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
              selected === r
                ? "bg-primary/15 border-primary text-primary-light"
                : "border-border text-text-secondary hover:bg-raised"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}