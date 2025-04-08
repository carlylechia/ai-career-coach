"use client";

import { useState } from "react";
import ChatModal from "./ChatModal";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-6 right-6 flex flex-col items-center z-50"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="mb-2 bg-[#1A1A2E] text-[#B8C1EC] text-sm px-3 py-1 rounded-md shadow-lg transition-opacity duration-200">
            Quick Chat?
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#6C63FF] text-white p-4 rounded-full shadow-lg hover:bg-[#554ED1] transition"
        >
          💬
        </button>
      </div>

      {/* Chat Modal */}
      {isOpen && <ChatModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default FloatingChatButton;
