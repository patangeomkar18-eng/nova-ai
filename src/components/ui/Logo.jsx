import { Sparkle } from "lucide-react";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-7 h-7 rounded-lg bg-brand-gradient flex items-center justify-center">
        <Sparkle size={16} className="text-white" fill="white" />
      </div>
      <span className="font-semibold text-lg tracking-tight">Nova AI</span>
    </div>
  );
}