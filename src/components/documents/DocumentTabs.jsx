const tabs = ["All", "My Documents", "Shared", "Starred"];

export default function DocumentTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-1 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
            active === tab
              ? "border-primary text-text-primary"
              : "border-transparent text-text-secondary hover:text-text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}