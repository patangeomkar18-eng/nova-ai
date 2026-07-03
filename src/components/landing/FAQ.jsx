import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is there a free plan?", a: "Yes, Nova AI has a free plan with 10 AI chats a day and 5 documents — no credit card required." },
  { q: "Can I cancel anytime?", a: "Yes. You can cancel or change your plan at any time from your account settings." },
  { q: "Does Nova AI support teams?", a: "Yes, our Enterprise plan includes team workspaces, shared projects, and admin controls." },
  { q: "What AI models power Nova AI?", a: "We use a mix of leading AI models, chosen per task to give you the best quality and speed." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          size={18}
          className={`text-text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="text-sm text-text-secondary mt-3 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-center">Frequently asked questions</h2>
      <div className="mt-10">
        {faqs.map((f) => (
          <FAQItem key={f.q} {...f} />
        ))}
      </div>
    </section>
  );
}