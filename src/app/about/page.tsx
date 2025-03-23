/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-[#121212] text-[#B8C1EC] min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#6C63FF]">
            Unlock Your Full Potential 🚀
          </h1>
          <p className="text-lg md:text-xl text-[#A6A6A6] leading-relaxed">
            "The future belongs to those who prepare for it today." – Malcolm X
            At{" "}
            <strong>
              <em>Mentor@</em>
            </strong>
            , we equip you with the{" "}
            <strong>
              <em>right guidance, mindset, and tools</em>
            </strong>
            to navigate your career path and achieve greatness.
          </p>
        </div>

        {/* 🚀 Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mt-12">
          {/* Career Advice */}
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6C63FF]">
              🎓 Smart Career Choices
            </h3>
            <p className="text-[#A6A6A6] mt-2">
              We help students choose{" "}
              <strong>
                <em>marketable majors and minors</em>
              </strong>{" "}
              so they don't waste time on paths that lead nowhere.
            </p>
          </div>

          {/* Career Adjustment */}
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6C63FF]">
              🔄 Pivoting Career Paths
            </h3>
            <p className="text-[#A6A6A6] mt-2">
              Feeling stuck? We guide you through{" "}
              <strong>
                <em>fast and effective career shifts</em>
              </strong>{" "}
              that align with your strengths & market demand.
            </p>
          </div>

          {/* Skill Recommendation */}
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6C63FF]">
              💡 Personalized Skill Path
            </h3>
            <p className="text-[#A6A6A6] mt-2">
              Based on your{" "}
              <strong>
                <em>gifts, passions, and talents</em>
              </strong>
              we suggest in-demand{" "}
              <strong>
                <em>skills</em>
              </strong>{" "}
              to shape your career.
            </p>
          </div>

          {/* Resume & LinkedIn Support */}
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6C63FF]">
              📄 Professional Branding
            </h3>
            <p className="text-[#A6A6A6] mt-2">
              Need a{" "}
              <strong>
                <em>standout Resume, CV, or LinkedIn profile</em>
              </strong>
              ? We ensure you{" "}
              <strong>
                <em>attract top employers and clients.</em>
              </strong>
            </p>
          </div>

          {/* AI & Human Coaching */}
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6C63FF]">
              🤖 AI & Human Mentorship
            </h3>
            <p className="text-[#A6A6A6] mt-2">
              Access{" "}
              <strong>
                <em>instant AI career coaching</em>
              </strong>{" "}
              or{" "}
              <strong>
                <em>real human mentors</em>
              </strong>{" "}
              to navigate personal career challenges.
            </p>
          </div>

          {/* Mindset Coaching */}
          <div className="p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#6C63FF]">
              🧠 Mindset Shift
            </h3>
            <p className="text-[#A6A6A6] mt-2">
              Stop waiting for the{" "}
              <strong>
                <em>government</em>
              </strong>{" "}
              —opportunities are everywhere! We{" "}
              <strong>
                <em>train your mind for self-reliance & success.</em>
              </strong>
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-12 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#6C63FF]">
            📚 Stay Informed & Motivated
          </h2>
          <p className="text-lg text-[#A6A6A6] mt-4">
            Our{" "}
            <strong>
              <em>blog</em>
            </strong>{" "}
            is a hub of <strong>valuable industry insights, job trends, and personal growth strategies</strong>. We provide expert-crafted articles designed to <strong>boost your knowledge, refine your mindset, and keep you updated on career advancements</strong>. Engage with each post by <strong>sharing your thoughts, asking questions, and discussing with industry professionals</strong> who actively respond in the comments.
          </p>
          <Link
            href="/blog"
            className="mt-4 inline-block bg-[#FF6584] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#E84A73] transition"
          >
            Read the Blog
          </Link>
        </div>

        {/* Dashboard Section */}
        <div className="mt-12 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#6C63FF]">
            📊 Track Your Career Growth
          </h2>
          <p className="text-lg text-[#A6A6A6] mt-4">
            The{" "}
            <strong>
              <em>dashboard</em>
            </strong>{" "}
            is your <strong><em>personal career growth tracker</em></strong>. <strong><em>Set goals, monitor your progress, and stay accountable</em></strong>. Whether it's improving your resume, landing a new job, or mastering a new skill, our system helps you stay on track. Plus, <strong><em>earn incentives for actively working towards your career goals</em></strong>—a rewarding experience that keeps you motivated daily!
          </p>
          <Link
            href="/dashboard"
            className="mt-4 inline-block bg-[#6C63FF] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#554ED1] transition"
          >
            Explore the Dashboard
          </Link>
        </div>

        {/* Community Section */}
        <div className="mt-12 max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#6C63FF]">
            🤝 Join Our Thriving Community
          </h2>
          <p className="text-lg text-[#A6A6A6] mt-4">
            <strong>Connect, Learn, and Grow Together!</strong> Join a <strong>dynamic network of ambitious professionals and students</strong>, all striving for success. Engage in discussions, share experiences, and receive <strong>unwavering support and motivation</strong> from peers and mentors. As a platform member, you also get <strong>exclusive access to free monthly group consulting sessions</strong> with industry experts—helping you stay ahead in your career!
          </p>
          <Link
            href="/community"
            className="mt-4 inline-block bg-[#FF6584] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#E84A73] transition"
          >
            Join the Community
          </Link>
        </div>

        {/* 🎟️ Pricing Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-[#6C63FF]">
            🎟️ Free & Premium Plans
          </h2>
          <p className="text-lg text-[#A6A6A6] mt-4">
            Get{" "}
            <strong>
              <em>free AI coaching</em>
            </strong>{" "}
            and access resources at no cost! Need{" "}
            <strong>
              <em>1-on-1 human mentorship</em>
            </strong>
            ? Our{" "}
            <strong>
              <em>premium plan</em>
            </strong>{" "}
            offers direct access to expert career coaches.
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-block bg-[#6C63FF] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#554ED1] transition"
          >
            Explore Pricing
          </Link>
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-[#6C63FF]">
            🚀 Ready to Level Up?
          </h2>
          <p className="text-lg text-[#A6A6A6] mt-2">
            Join{" "}
            <strong>
              <em>thousands of users</em>
            </strong>{" "}
            building their careers with{" "}
            <strong>
              <em>Mentor@</em>
            </strong>
            . Start{" "}
            <strong>
              <em>for free</em>
            </strong>{" "}
            and take control of your future today.
          </p>
          <Link
            href="/signup"
            className="mt-4 inline-block bg-[#FF6584] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#E84A73] transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
