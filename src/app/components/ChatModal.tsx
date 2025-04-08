"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ChatModal = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("/api/chat", { message: input });
      const botMessage = {
        role: "career and mindset coach",
        content: response.data.reply,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).id === "chat-modal-overlay") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-screen text-[#B8C1EC]">
        Loading...
      </div>
    );
  }

  return (
    <div id="chat-modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1A1A2E] text-[#B8C1EC] p-5 rounded-lg shadow-lg w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Chat with AI Coach</h2>
          <button onClick={onClose} className="text-white bg-[#FF6584] p-2 rounded-full hover:bg-[#E84A73] transition">✖</button>
        </div>

        <div className="h-64 overflow-y-auto border border-[#3F3D56] rounded-lg p-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 p-2 rounded-md ${
                msg.role === "user"
                  ? "bg-[#6C63FF] text-white text-right"
                  : "bg-[#3F3D56] text-left"
              }`}
            >
              <strong>{msg.role === "user" ? "You" : "Coach"}:</strong> {msg.content}
            </div>
          ))}
        </div>

        <div className="mt-3 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 p-2 border border-[#3F3D56] rounded-l-lg bg-[#1A1A2E] text-[#B8C1EC] placeholder-[#A6A6A6] focus:outline-none"
          />
          <button onClick={sendMessage} className="bg-[#FF6584] px-4 text-white rounded-r-lg hover:bg-[#E84A73]">
            ➤
          </button>
        </div>

        <div className="text-center mt-4">
          <Link href="/chat">
            <span className="text-[#6C63FF] cursor-pointer hover:underline">Go to Full Chat</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
