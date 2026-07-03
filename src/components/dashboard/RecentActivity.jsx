import Card from "../ui/Card";

const activity = [
  { text: "AI Chat: Marketing Strategy", time: "2m ago" },
  { text: "Created Project: 'Nova Website'", time: "1 hour ago" },
  { text: "Generated Image: 'Futuristic City'", time: "3 hours ago" },
  { text: "Updated Document: 'PRD'", time: "5 hours ago" },
];

export default function RecentActivity() {
  return (
    <Card>
      <h3 className="font-medium mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        {activity.map((a) => (
          <li key={a.text} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm truncate">{a.text}</p>
              <p className="text-xs text-text-muted">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}