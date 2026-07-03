import { MessageSquare, ImageIcon, Code2, FileText, Zap, BarChart3 } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "AI Chat", desc: "Have natural conversations and get instant answers to anything." },
  { icon: ImageIcon, title: "AI Images", desc: "Turn text prompts into stunning, high-quality visuals in seconds." },
  { icon: Code2, title: "AI Code", desc: "Generate, debug, and refactor code across any language." },
  { icon: FileText, title: "Smart Documents", desc: "Draft, edit, and organize documents with AI assistance." },
  { icon: Zap, title: "Automation", desc: "Automate repetitive tasks and free up your time for real work." },
  { icon: BarChart3, title: "Analytics", desc: "Track usage and productivity with clear, actionable insights." },
];

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold">Everything you need, built in</h2>
        <p className="text-text-secondary mt-3">
          One workspace that replaces a dozen scattered tools.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-4">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-gradient/20 border border-primary/30
              flex items-center justify-center">
              <Icon size={18} className="text-primary-light" />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}