import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4
      px-6 py-4 border-b border-border bg-base/80 backdrop-blur-lg">
      <div className="relative w-full max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          placeholder="Search anything..."
          className="w-full bg-raised border border-border rounded-lg py-2 pl-9 pr-3 text-sm
            placeholder:text-text-muted focus:border-primary/50 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <button className="w-9 h-9 rounded-lg border border-border flex items-center justify-center
          text-text-secondary hover:text-text-primary hover:bg-raised transition-colors">
          <Bell size={16} />
        </button>
        <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center
          text-xs font-semibold text-white">
          OP
        </div>
      </div>
    </header>
  );
}