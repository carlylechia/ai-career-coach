/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load images/videos
const LazyImage = dynamic(() => import("../components/LazyImage"), { ssr: false });

export default function Homepage() {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (ref: any) => ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-[#121212] text-[#B8C1EC] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black text-center px-4">
        
        <div className="z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Unlock Your Future with Mentor@
          </h1>
          <p className="text-lg text-[#A6A6A6] mb-6">
            Career guidance, mindset coaching, and AI tools — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection(aboutRef)} className="bg-[#6C63FF] px-6 py-3 rounded-md hover:bg-[#554ED1] transition">Learn More</button>
            <Link href="/signup" className="bg-[#FF6584] px-6 py-3 rounded-md hover:bg-[#E84A73] transition text-white">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-6 text-center bg-[#1A1A2E]">
        <h2 className="text-4xl font-bold mb-6 text-[#6C63FF]">About Mentor@</h2>
        <p className="max-w-3xl mx-auto text-[#A6A6A6] text-lg">
          Mentor@ is an all-in-one career support platform built for ambitious youth and professionals.
          Whether you're in school, just graduated, or switching careers — we've got tools, mentors, and motivation for every step.
        </p>
        <LazyImage src="/images/avatar1" alt="Vision" className="mt-10 rounded-lg shadow-lg mx-auto w-full max-w-4xl" />
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="py-20 px-6 bg-[#121212] text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#6C63FF]">Key Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-left">
          {[
            {
              title: "AI-Powered Chat",
              desc: "Ask questions, get recommendations, and receive motivation through our intelligent AI coach.",
              icon: "💬",
              link: "/chat",
            },
            {
              title: "Mentorship Access",
              desc: "Speak to real human mentors for career coaching and guidance on request.",
              icon: "👩🏾‍🏫",
              link: "/mentors",
            },
            {
              title: "Career Resources",
              desc: "Explore articles, tips, and trends through our engaging blog posts.",
              icon: "📚",
              link: "/blog",
            },
            {
              title: "Progress Dashboard",
              desc: "Set career goals and track your progress toward them daily.",
              icon: "📈",
              link: "/dashboard",
            },
            {
              title: "Mindset Coaching",
              desc: "Break free from old beliefs and start thinking like a winner with our tools.",
              icon: "🧠",
              link: "/about",
            },
            {
              title: "Free & Premium Plans",
              desc: "Enjoy core features for free or upgrade for access to human mentors and advanced coaching.",
              icon: "💎",
              link: "/pricing",
            },
          ].map(({ title, desc, icon, link }, index) => (
            <Link key={index} href={link}>
              <div className="bg-[#1A1A2E] p-6 rounded-xl shadow-md hover:bg-[#2A2A3E] transition cursor-pointer">
                <h3 className="text-2xl font-semibold mb-2 text-white">{icon} {title}</h3>
                <p className="text-[#A6A6A6]">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 px-6 bg-[#1F1F3D] text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#6C63FF]">What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Brenda T.",
              image: "/images/avatar1.jpg",
              review: "This platform gave me clarity and direction in just weeks. I now have a job and a plan!",
            },
            {
              name: "Eric M.",
              image: "/images/avatar2.jpg",
              review: "I love the AI chat and blog articles. It feels like someone’s always guiding me.",
            },
            {
              name: "Linda S.",
              image: "/images/avatar3.jpg",
              review: "The mentors here are real professionals. One session helped me rewrite my CV and land an internship.",
            },
          ].map(({ name, image, review }, idx) => (
            <div key={idx} className="bg-[#2A2A3E] p-6 rounded-lg shadow-md text-left">
              <Image src={image} alt={name} width={50} height={50} className="rounded-full mb-4" />
              <p className="text-[#A6A6A6] italic mb-2">"{review}"</p>
              <p className="text-[#FF6584] font-semibold">- {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#121212] text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Start Building Your Career Today 🚀</h2>
        <p className="text-[#A6A6A6] max-w-xl mx-auto mb-8">Join thousands of young people using Mentor@ to unlock their potential and take action now.</p>
        <Link href="/signup" className="bg-[#6C63FF] px-8 py-4 text-white rounded-lg hover:bg-[#554ED1] transition font-semibold">
          Create an Account
        </Link>
      </section>
    </div>
  );
}
