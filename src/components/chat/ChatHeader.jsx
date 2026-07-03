import { Info, MoreHorizontal } from "lucide-react";

export default function ChatHeader({ title = "AI Chat" }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
      <h1 className="font-medium">{title}</h1>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-raised transition-colors">
          <Info size={16} />
        </button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:bg-raised transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </header>
  );
}