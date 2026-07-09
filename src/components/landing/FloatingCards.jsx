import { PenLine, Code2, ImageIcon } from "lucide-react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

const tools = [
  {
    icon: PenLine,
    title: "AI Writer",
    desc: "Write blogs, emails, docs, and more with AI.",
    link: "/documents",
  },
  {
    icon: Code2,
    title: "AI Code",
    desc: "Generate, debug, and improve code instantly.",
    link: "/chat",
  },
  {
    icon: ImageIcon,
    title: "AI Image",
    desc: "Create stunning images from simple prompts.",
    link: "/image-generator",
  },
];

export default function FloatingCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <h2 className="text-2xl font-semibold text-center">Powerful AI Tools</h2>
      <p className="text-text-secondary text-center mt-2">
        Everything you need to create, automate, and scale your ideas.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mt-10">
        {tools.map(({ icon: Icon, title, desc, link }) => (
  <Link key={title} to={link}>
    <Card
      hover
      className="text-center py-8 cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div
        className="w-12 h-12 rounded-xl bg-brand-gradient/20 border border-primary/30
        flex items-center justify-center mx-auto mb-4"
      >
        <Icon size={20} className="text-primary-light" />
      </div>

      <h3 className="font-medium">{title}</h3>

      <p className="text-sm text-text-secondary mt-1.5">
        {desc}
      </p>
    </Card>
  </Link>
))}
      </div>
    </section>
  );
}