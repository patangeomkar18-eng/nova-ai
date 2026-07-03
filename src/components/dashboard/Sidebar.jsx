import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, MessageSquare, PenLine, ImageIcon,
  FileText, FolderKanban, LayoutTemplate, BarChart3, Settings,
} from "lucide-react";
import Logo from "../ui/Logo";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "AI Chat", icon: MessageSquare, to: "/chat" },
  { label: "AI Writer", icon: PenLine, to: "/writer" },
  { label: "AI Image", icon: ImageIcon, to: "/image-generator" },
  { label: "Documents", icon: FileText, to: "/documents" },
  { label: "Projects", icon: FolderKanban, to: "/projects" },
  { label: "Templates", icon: LayoutTemplate, to: "/templates" },
  { label: "Analytics", icon: BarChart3, to: "/analytics" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 h-screen sticky top-0 flex flex-col border-r border-border bg-surface">
      <div className="px-5 py-5 border-b border-border">
        <Logo />
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-primary/15 text-primary-light font-medium"
                  : "text-text-secondary hover:text-text-primary hover:bg-raised"
              }`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-border flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center
          text-xs font-semibold text-white shrink-0">
          OP
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">Omkar Patange</p>
          <p className="text-xs text-text-muted truncate">patangeomkar18@</p>
        </div>
      </div>
    </aside>
  );
}