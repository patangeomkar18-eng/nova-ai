import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-2xl bg-surface border border-border p-12 text-center">
        <div className="absolute inset-0 bg-glow-radial opacity-50" />
        <div className="relative">
          <h2 className="text-3xl font-semibold">Ready to build smarter with AI?</h2>
          <p className="text-text-secondary mt-3">
            Join 10,000+ teams already using Nova AI every day.
          </p>
          <Link to="/login">
            <Button size="lg" className="mt-8">Get Started Free</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}