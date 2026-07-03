import MessageBubble from "./MessageBubble";

const messages = [
  { role: "user", content: "Write a blog about AI productivity tools." },
  {
    role: "assistant",
    title: "The Rise of AI Productivity Tools",
    content:
      "AI productivity tools are transforming the way we work, create, and solve problems. They help individuals and teams save time, automate repetitive tasks, and focus on what matters most. From writing and coding to designing and analyzing data, AI tools are becoming indispensable in our daily workflows.\n\nWould you like me to expand this into a full blog?",
  },
];

export default function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
      {messages.map((m, i) => (
        <MessageBubble key={i} {...m} />
      ))}
    </div>
  );
}