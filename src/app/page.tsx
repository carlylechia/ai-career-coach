"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] p-6 text-[#B8C1EC]">
      <header className="w-full flex justify-between items-center max-w-5xl py-4 px-4 md:px-0">
        <h1 className="text-2xl font-semibold md:text-3xl md:font-semibold">
          <span>Mentor@</span>
          <span className="hidden md:inline"> - Career & Mindset Coaching</span>
        </h1>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-[#6C63FF] hover:underline">Learn More</Link>
          <Link href="/chat" className="text-[#FF6584] hover:underline">Chat Now</Link>
          <Link href="/auth/signin" className="text-[#B8C1EC] hover:underline">Sign In</Link>
          <Link href="/auth/signup" className="text-[#B8C1EC] hover:underline">Sign Up</Link>
        </nav>
      </header>
      
      {/* Mobile Menu Items */}
      {menuOpen && (
        <nav className="md:hidden w-full flex flex-col items-center bg-[#1A1A2E] py-4 space-y-3 rounded-lg">
          <Link href="/about" className="text-[#6C63FF] hover:underline" onClick={() => setMenuOpen(false)}>Learn More</Link>
          <Link href="/chat" className="text-[#FF6584] hover:underline" onClick={() => setMenuOpen(false)}>Chat Now</Link>
          <Link href="/auth/signin" className="text-[#B8C1EC] hover:underline" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link href="/auth/signup" className="text-[#B8C1EC] hover:underline" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </nav>
      )}
      
      <section className="text-center mt-10 max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Personalized Career & Mindset Coaching</h2>
        <p className="mt-4 text-lg text-[#B8C1EC]">Get expert guidance from AI and human professionals to elevate your career and mindset.</p>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <Link href="/chat" className="px-6 py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5548E0] transition w-full md:w-auto text-center">Start Chat</Link>
          <Link href="/auth/signup" className="px-6 py-3 bg-[#FF6584] text-white rounded-lg hover:bg-[#E84A73] transition w-full md:w-auto text-center">Sign Up</Link>
        </div>
      </section>
      
      <section className="mt-16 w-full max-w-5xl px-4">
        <h3 className="text-2xl font-semibold text-center text-white">Key Features</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-4 bg-[#1A1A2E] rounded-lg border border-[#3F3D56] shadow-lg">
            <h4 className="text-lg font-semibold text-[#6C63FF]">AI-Powered Guidance</h4>
            <p className="text-sm text-[#B8C1EC]">Get instant career and mindset insights from our AI coach.</p>
          </div>
          <div className="p-4 bg-[#1A1A2E] rounded-lg border border-[#3F3D56] shadow-lg">
            <h4 className="text-lg font-semibold text-[#6C63FF]">Human Experts</h4>
            <p className="text-sm text-[#B8C1EC]">Talk to real career and mindset coaches for professional guidance.</p>
          </div>
          <div className="p-4 bg-[#1A1A2E] rounded-lg border border-[#3F3D56] shadow-lg">
            <h4 className="text-lg font-semibold text-[#6C63FF]">Blog & Resources</h4>
            <p className="text-sm text-[#B8C1EC]">Read articles and insights on career growth, mental resilience, and success strategies.</p>
          </div>
        </div>
      </section>
      
      <footer className="mt-16 w-full max-w-5xl px-4 py-6 border-t border-[#3F3D56] text-center text-[#B8C1EC]">
        <p>© 2025 Mentor@. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
