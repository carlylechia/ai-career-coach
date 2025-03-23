"use client";

import Link from "next/link";
import Layout from "./components/layout/Layout";
export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] p-6 text-[#B8C1EC]">
        <section className="text-center mt-10 max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Personalized Career & Mindset Coaching
          </h2>
          <p className="mt-4 text-lg text-[#B8C1EC]">
            Get expert guidance from AI and human professionals to elevate your
            career and mindset.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <Link
              href="/chat"
              className="px-6 py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5548E0] transition w-full md:w-auto text-center"
            >
              Start Chat
            </Link>
            <Link
              href="/auth/signup"
              className="px-6 py-3 bg-[#FF6584] text-white rounded-lg hover:bg-[#E84A73] transition w-full md:w-auto text-center"
            >
              Sign Up
            </Link>
          </div>
        </section>

        <section className="mt-16 w-full max-w-5xl px-4">
          <h3 className="text-2xl font-semibold text-center text-white">
            Key Features
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-4 bg-[#1A1A2E] rounded-lg border border-[#3F3D56] shadow-lg">
              <h4 className="text-lg font-semibold text-[#6C63FF]">
                AI-Powered Guidance
              </h4>
              <p className="text-sm text-[#B8C1EC]">
                Get instant career and mindset insights from our AI coach.
              </p>
            </div>
            <div className="p-4 bg-[#1A1A2E] rounded-lg border border-[#3F3D56] shadow-lg">
              <h4 className="text-lg font-semibold text-[#6C63FF]">
                Human Experts
              </h4>
              <p className="text-sm text-[#B8C1EC]">
                Talk to real career and mindset coaches for professional
                guidance.
              </p>
            </div>
            <div className="p-4 bg-[#1A1A2E] rounded-lg border border-[#3F3D56] shadow-lg">
              <h4 className="text-lg font-semibold text-[#6C63FF]">
                Blog & Resources
              </h4>
              <p className="text-sm text-[#B8C1EC]">
                Read articles and insights on career growth, mental resilience,
                and success strategies.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
