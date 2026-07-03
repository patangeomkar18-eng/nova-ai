import { FileText, MoreVertical } from "lucide-react";

const colorMap = {
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  teal: "bg-teal-500/15 text-teal-400 border-teal-500/30",
  violet: "bg-primary/15 text-primary-light border-primary/30",
  rose: "bg-rose-500/15 text-rose-400 border-rose-500/30",
};

export default function DocumentCard({ name, updated, color = "violet" }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 hover:border-primary/40 transition-colors cursor-pointer">
      <div className="flex items-start justify-between">
        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${colorMap[color]}`}>
          <FileText size={16} />
        </div>
        <button className="text-text-muted hover:text-text-primary transition-colors">
          <MoreVertical size={16} />
        </button>
      </div>
      <p className="text-sm font-medium mt-4 truncate">{name}</p>
      <p className="text-xs text-text-muted mt-1">Updated {updated}</p>
    </div>
  );
}