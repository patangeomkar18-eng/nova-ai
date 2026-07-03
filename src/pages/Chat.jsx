import { useState } from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import MessageList from "../components/chat/MessageList";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  const [activeChat, setActiveChat] = useState("Write a blog about AI productivity tools");

  return (
    <div className="flex h-screen">
      <ChatSidebar activeChat={activeChat} onSelectChat={setActiveChat} />
      <div className="flex-1 flex flex-col min-w-0">
        <ChatHeader title={activeChat} />
        <MessageList />
        <ChatInput />
      </div>
    </div>
  );
}