import { useState } from "react";
import BillingToggle from "../components/pricing/BillingToggle";
import PricingGrid from "../components/pricing/PricingGrid";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
      <p className="text-text-secondary mt-3">Choose the plan that's right for you.</p>

      <div className="mt-8">
        <BillingToggle yearly={yearly} setYearly={setYearly} />
      </div>

      <PricingGrid />

      <p className="text-sm text-text-muted mt-10">No credit card required. Cancel anytime.</p>
    </section>
  );
}