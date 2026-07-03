const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "AI Chats / Day" },
  { value: "1M+", label: "Documents Created" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mt-14">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gradient">{value}</p>
          <p className="text-sm text-text-secondary mt-1.5">{label}</p>
        </div>
      ))}
    </div>
  );
}