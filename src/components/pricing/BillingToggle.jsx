export default function BillingToggle({ yearly, setYearly }) {
  return (
    <div className="inline-flex items-center bg-raised border border-border rounded-lg p-1">
      <button
        onClick={() => setYearly(false)}
        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
          !yearly ? "bg-surface text-text-primary" : "text-text-secondary"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setYearly(true)}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
          yearly ? "bg-brand-gradient text-white" : "text-text-secondary"
        }`}
      >
        Yearly
        <span className="text-xs opacity-90">(Save 20%)</span>
      </button>
    </div>
  );
}