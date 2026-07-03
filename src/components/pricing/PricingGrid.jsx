import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Free",
    price: 0,
    tagline: "For individuals getting started",
    cta: "Get Started",
    features: [
      "10 AI Chats / day",
      "5 AI Images / day",
      "5 Documents",
      "Basic Templates",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: 19,
    tagline: "For professionals & creators",
    cta: "Start Free Trial",
    popular: true,
    featured: true,
    features: [
      "Unlimited AI Chats",
      "Unlimited AI Images",
      "Unlimited Documents",
      "Premium Templates",
      "Priority Support",
      "Early Access",
    ],
  },
  {
    name: "Enterprise",
    price: 49,
    tagline: "For teams & businesses",
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team Workspace",
      "Advanced Analytics",
      "Custom Templates",
      "Dedicated Support",
      "SLA Guarantee",
    ],
  },
];

export default function PricingGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14">
      {plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} popular={plan.popular} featured={plan.featured} />
      ))}
    </div>
  );
}