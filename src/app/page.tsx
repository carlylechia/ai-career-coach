"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] p-6 text-[#B8C1EC]">
      <header className="w-full flex justify-between items-center max-w-5xl py-4">
        <h1 className="text-3xl font-semibold">AI Career & Mindset Coach</h1>
        <nav className="space-x-4">
          <Link href="/about" className="text-[#6C63FF] hover:underline">Learn More</Link>
          <Link href="/chat" className="text-[#FF6584] hover:underline">Chat Now</Link>
          <Link href="/auth/signin" className="text-[#B8C1EC] hover:underline">Sign In</Link>
          <Link href="/auth/signup" className="text-[#B8C1EC] hover:underline">Sign Up</Link>
        </nav>
      </header>
      
      <section className="text-center mt-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-white">Your Personal AI Career & Mindset Coach</h2>
        <p className="mt-4 text-lg text-[#B8C1EC]">Get expert guidance to advance your career and mindset with AI-driven insights.</p>
        <div className="mt-6 space-x-4">
          <Link href="/chat" className="px-6 py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5548E0] transition">Start Chat</Link>
          <Link href="/auth/signup" className="px-6 py-3 bg-[#FF6584] text-white rounded-lg hover:bg-[#E84A73] transition">Sign Up</Link>
        </div>
      </section>
      
      <section className="mt-12 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-[#6C63FF] mb-4">
          Why Choose Our AI Coach?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg">
            <h3 className="text-lg font-bold text-[#FF6584]">Personalized Guidance</h3>
            <p className="text-[#A6A6A6] mt-2">Tailored advice based on your career goals.</p>
          </div>
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg">
            <h3 className="text-lg font-bold text-[#6C63FF]">Instant Feedback</h3>
            <p className="text-[#A6A6A6] mt-2">Get real-time responses to your career questions.</p>
          </div>
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg">
            <h3 className="text-lg font-bold text-[#FFD700]">Expert Insights</h3>
            <p className="text-[#A6A6A6] mt-2">Backed by AI trained on industry expertise.</p>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-[#A6A6A6]">
        <p>&copy; {new Date().getFullYear()} AI Career & Mindset Coach. All rights reserved.</p>
      </footer>
    </main>
  );
}
