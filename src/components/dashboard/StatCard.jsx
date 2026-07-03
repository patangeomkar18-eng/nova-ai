import Card from "../ui/Card";

export default function StatCard({ label, value, change, period = "vs last month" }) {
  const positive = change.startsWith("+");
  return (
    <Card>
      <p className="text-sm text-text-secondary">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className={`text-xs mt-2 ${positive ? "text-emerald-400" : "text-red-400"}`}>
        {change} <span className="text-text-muted">{period}</span>
      </p>
    </Card>
  );
}