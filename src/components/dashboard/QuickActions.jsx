import { MessageSquare, FileText, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

const actions = [
  { label: "New Chat", icon: MessageSquare, to: "/chat" },
  { label: "New Document", icon: FileText, to: "/documents" },
  { label: "Generate Image", icon: ImageIcon, to: "/image-generator" },
];

export default function QuickActions() {
  return (
    <Card>
      <h3 className="font-medium mb-4">Quick Actions</h3>
      <div className="space-y-2">
        {actions.map(({ label, icon: Icon, to }) => (
          <Link
            key={label}
            to={to}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
              border border-border hover:bg-raised transition-colors"
          >
            <Icon size={16} className="text-primary-light" />
            {label}
          </Link>
        ))}
      </div>
    </Card>
  );
}