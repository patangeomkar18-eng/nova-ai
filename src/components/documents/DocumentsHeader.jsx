import { Search, Plus } from "lucide-react";
import Button from "../ui/Button";

export default function DocumentsHeader({ query, setQuery }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative w-full max-w-sm">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documents..."
          className="w-full bg-raised border border-border rounded-lg py-2.5 pl-9 pr-3 text-sm
            placeholder:text-text-muted focus:border-primary/50 focus:outline-none"
        />
      </div>
      <Button>
        <Plus size={16} /> New Document
      </Button>
    </div>
  );
}
