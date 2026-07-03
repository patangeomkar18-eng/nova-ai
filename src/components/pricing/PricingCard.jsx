import { Check } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function PricingCard({ plan, popular, featured }) {
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col ${
        featured
          ? "border-2 border-primary bg-surface shadow-glow"
          : "border border-border bg-surface"
      }`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
      )}

      <h3 className="font-medium">{plan.name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-text-muted text-sm">/month</span>
      </div>
      <p className="text-sm text-text-secondary mt-2">{plan.tagline}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check size={16} className="text-primary-light shrink-0 mt-0.5" />
            <span className="text-text-secondary">{f}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? "primary" : "outline"}
        className="w-full mt-6"
      >
        {plan.cta}
      </Button>
    </div>
  );
}