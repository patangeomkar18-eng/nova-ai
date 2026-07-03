import { Paperclip, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function ChatInput() {
  const [value, setValue] = useState("");

  return (
    <div className="px-6 py-4 border-t border-border">
      <div className="flex items-end gap-2 bg-raised border border-border rounded-xl px-4 py-3">
        <button className="text-text-muted hover:text-text-primary transition-colors mb-0.5">
          <Paperclip size={17} />
        </button>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask anything..."
          rows={1}
          className="flex-1 bg-transparent text-sm resize-none focus:outline-none placeholder:text-text-muted"
        />
        <button className="w-8 h-8 shrink-0 rounded-lg bg-brand-gradient flex items-center justify-center hover:opacity-90 transition-opacity">
          <ArrowUp size={16} className="text-white" />
        </button>
      </div>
      <p className="text-xs text-text-muted text-center mt-2">
        Nova AI can make mistakes. Consider checking important information.
      </p>
    </div>
  );
}