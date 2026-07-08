import { useState } from "react";
import PageBackground from "../layouts/PageBackground";

import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import MessageList from "../components/chat/MessageList";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  const [activeChat, setActiveChat] = useState(
    "Write a blog about AI productivity tools"
  );

  return (
    <PageBackground>
      <div className="flex min-h-screen">
        <ChatSidebar
          activeChat={activeChat}
          onSelectChat={setActiveChat}
        />

        <div className="flex flex-1 flex-col min-w-0">
          <ChatHeader title={activeChat} />
          <MessageList />
          <ChatInput />
        </div>
      </div>
    </PageBackground>
  );
}