import { MoreHorizontal } from "lucide-react";
import Card from "../ui/Card";

const projects = [
  { name: "Nova Website Redesign", updated: "2 hours ago" },
  { name: "AI Content Calendar", updated: "5 hours ago" },
];

export default function RecentProjects() {
  return (
    <Card>
      <h3 className="font-medium mb-4">Recent Projects</h3>
      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-brand-gradient/20 border border-primary/30" />
              <div className="min-w-0">
                <p className="text-sm truncate">{p.name}</p>
                <p className="text-xs text-text-muted">Updated {p.updated}</p>
              </div>
            </div>
            <MoreHorizontal size={16} className="text-text-muted shrink-0" />
          </li>
        ))}
      </ul>
    </Card>
  );
}