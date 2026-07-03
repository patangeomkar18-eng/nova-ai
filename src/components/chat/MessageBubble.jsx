import { Copy, ThumbsUp, RefreshCw } from "lucide-react";
import Logo from "../ui/Logo";

export default function MessageBubble({ role, content, title }) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-lg bg-raised rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 max-w-2xl">
      <div className="w-8 h-8 shrink-0 rounded-lg bg-brand-gradient flex items-center justify-center mt-1">
        <span className="text-white text-xs font-bold">N</span>
      </div>
      <div>
        {title && <h3 className="font-medium mb-2">{title}</h3>}
        <p className="text-sm text-text-secondary leading-relaxed">{content}</p>
        <div className="flex items-center gap-3 mt-3">
          <button className="text-text-muted hover:text-text-primary transition-colors">
            <Copy size={14} />
          </button>
          <button className="text-text-muted hover:text-text-primary transition-colors">
            <ThumbsUp size={14} />
          </button>
          <button className="text-text-muted hover:text-text-primary transition-colors">
            <RefreshCw size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}