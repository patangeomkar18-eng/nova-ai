import StatCard from "./StatCard";

const stats = [
  { label: "Projects", value: "28", change: "+12%" },
  { label: "Documents", value: "156", change: "+18%" },
  { label: "AI Chats", value: "342", change: "+21%" },
  { label: "Hours Saved", value: "96", change: "+31%" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}