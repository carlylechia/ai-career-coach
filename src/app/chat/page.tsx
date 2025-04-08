"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/layout/Layout";

export default function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hello! I am your AI career coach and mentor. How can I assist you today?",
    },
  ]);
  const [isClient, setIsClient] = useState(false);
  let detectAndRespond = "";
  const suggestedArticles: { title: string; link: string }[] = [];
  const articleCount = useRef(0); // number of suggested articles per session, persists across renders

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const botReply = await axios.post("/api/chat", { message: input });

      if (
        input.toLowerCase().includes("resume") ||
        input.toLowerCase().includes("cv")
      ) {
        detectAndRespond =
          "Looking to improve your resume? Check out this guide:";
        suggestedArticles.push({
          title: "How to Write a Winning Resume",
          link: "/blog/resume-tips",
        });
        articleCount.current = articleCount.current + 1;
      } else if (input.toLowerCase().includes("cover letter")) {
        detectAndRespond =
          "Need help with your cover letter? Here are some tips:";
        suggestedArticles.push({
          title: "Crafting the Perfect Cover Letter",
          link: "/blog/cover-letter-tips",
        });
        articleCount.current++;
      } else if (input.toLowerCase().includes("career change")) {
        detectAndRespond = "Thinking about changing careers? This might help:";
        suggestedArticles.push({
          title: "Steps to a Successful Career Switch",
          link: "/blog/career-change",
        });
        articleCount.current++;
      } else if (input.toLowerCase().includes("interview")) {
        detectAndRespond = "Preparing for an interview? Here are some tips:";
        suggestedArticles.push({
          title: "Ace Your Next Interview",
          link: "/blog/interview-tips",
        });
        articleCount.current++;
      } else if (input.toLowerCase().includes("networking")) {
        detectAndRespond =
          "Want to improve your networking skills? Check this out:";
        suggestedArticles.push({
          title: "Networking Strategies for Success",
          link: "/blog/networking-tips",
        });
        articleCount.current++;
      } else if (input.toLowerCase().includes("job search")) {
        detectAndRespond = "Searching for a job? Here are some resources:";
        suggestedArticles.push({
          title: "Effective Job Search Strategies",
          link: "/blog/job-search-tips",
        });
        articleCount.current++;
      }

      const botMessage = {
        role: "career and mindset coach",
        content:
          !!detectAndRespond &&
          suggestedArticles.length > 0 &&
          articleCount.current <= 1 ? (
            <div>
              <p>{detectAndRespond}</p>
              {suggestedArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  className="text-[#6C63FF] hover:underline"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          ) : (
            botReply.data.reply
          ),
      };
      setMessages((prev) => [...prev, botMessage]);
      console.log("Chat Info:::::", {
        botReply,
        botMessage,
        suggestedArticles,
        articleCount,
        detectAndRespond,
        input,
        messages
      });
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

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-screen text-[#B8C1EC]">
        Loading...
      </div>
    );
  }

  return (
    <Layout noLayout={true}>
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] p-6 text-[#B8C1EC]">
        <div className="absolute top-4 left-4">
          <Link
            href="/"
            className="p-2 bg-[#6C63FF] text-white rounded-full shadow hover:bg-[#554ED1] transition flex items-center justify-center w-8 h-8 text-sm"
          >
            ⬅
          </Link>
        </div>
        <h1 className="text-3xl font-semibold mb-6">Chat With AI Coach</h1>

        {/* Chat Container */}
        <div className="w-full max-w-lg h-[500px] overflow-y-auto bg-[#1A1A2E] border border-[#3F3D56] rounded-lg p-4 shadow-lg">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-3 p-3 max-w-[80%] rounded-lg ${
                msg.role === "user"
                  ? "ml-auto bg-[#6C63FF] text-white text-right"
                  : "mr-auto bg-[#3F3D56] text-left"
              }`}
            >
              <div className="text-sm">
                <strong>{msg.role === "user" ? "You" : "Coach"}:</strong>{" "}
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="mt-4 flex w-full max-w-lg gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 p-3 border border-[#3F3D56] rounded-lg bg-[#1A1A2E] text-[#B8C1EC] placeholder-[#A6A6A6] focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-3 bg-[#FF6584] hover:bg-[#E84A73] transition rounded-lg text-white font-semibold"
          >
            Send
          </button>
        </div>

        <div className="mt-6">
          <Link
            href="/mentors"
            className="text-[#6C63FF] hover:underline text-lg font-medium"
          >
            🔗 Speak to a Human Mentor
          </Link>
        </div>
      </main>
    </Layout>
  );
}
