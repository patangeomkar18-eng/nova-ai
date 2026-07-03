import { Plus, Crown } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const history = {
  Today: ["Write a blog about AI productivity tools"],
  Yesterday: ["React login component", "Marketing ideas", "Email template"],
  "Previous 7 Days": ["Python code help", "Business plan", "Improve this code", "SEO recommendations"],
};

export default function ChatSidebar({ activeChat, onSelectChat }) {
  return (
    <aside className="w-72 shrink-0 h-screen sticky top-0 flex flex-col border-r border-border bg-surface">
      <div className="px-5 py-5 border-b border-border">
        <Logo />
      </div>

      <div className="px-4 pt-4">
        <Button className="w-full">
          <Plus size={16} /> New Chat
        </Button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-5 overflow-y-auto">
        {Object.entries(history).map(([group, chats]) => (
          <div key={group}>
            <p className="text-xs text-text-muted mb-2">{group}</p>
            <div className="space-y-1">
              {chats.map((chat) => (
                <button
                  key={chat}
                  onClick={() => onSelectChat(chat)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg truncate transition-colors ${
                    activeChat === chat
                      ? "bg-primary/15 text-primary-light"
                      : "text-text-secondary hover:text-text-primary hover:bg-raised"
                  }`}
                >
                  {chat}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4">
        <div className="rounded-xl border border-primary/30 bg-brand-gradient/10 p-4">
          <div className="flex items-center gap-2 mb-1">
            <Crown size={14} className="text-primary-light" />
            <p className="text-sm font-medium">Upgrade to Pro</p>
          </div>
          <p className="text-xs text-text-muted mb-3">Unlock all features</p>
          <Button size="sm" className="w-full">Unlock all features</Button>
        </div>
      </div>
    </aside>
  );
}