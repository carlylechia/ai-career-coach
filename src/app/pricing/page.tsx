import Link from "next/link";
import Layout from "../components/layout/Layout";

const Pricing = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-[#121212] text-[#B8C1EC] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#6C63FF]">Affordable Plans for Every Goal</h1>
          <p className="text-lg text-[#A6A6A6] mt-4">
            Get the best career guidance, mindset coaching, and professional support at a price that suits you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-[#1A1A2E] border border-[#3F3D56] p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-[#6C63FF]">Free Plan</h2>
            <p className="mt-2 text-[#A6A6A6]">Perfect for students & career explorers.</p>
            <div className="mt-6">
              <p>✅ AI-powered career recommendations</p>
              <p>✅ Access to blog & motivational articles</p>
              <p>✅ Resume & CV tips</p>
              <p>✅ Community access</p>
              <p>❌ No human career coaching</p>
              <p>❌ Limited goal tracking</p>
            </div>
            <div className="mt-6">
              <span className="text-3xl font-bold">FREE</span>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-[#3F3D56] p-8 rounded-lg shadow-lg text-center border-2 border-[#6C63FF]">
            <h2 className="text-2xl font-semibold text-[#FF6584]">Pro Plan</h2>
            <p className="mt-2 text-[#B8C1EC]">For those serious about career growth.</p>
            <div className="mt-6">
              <p>✅ Everything in Free Plan</p>
              <p>✅ 1-on-1 AI Career Chat</p>
              <p>✅ Full goal tracking dashboard</p>
              <p>✅ Exclusive industry insights</p>
              <p>✅ Monthly group coaching sessions</p>
              <p>❌ No personal career consultations</p>
            </div>
            <div className="mt-6">
              <span className="text-3xl font-bold">5,000 XAF / month</span>
            </div>
            <Link
              href="/signup"
              className="mt-6 inline-block bg-[#FF6584] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#E84A73] transition"
            >
              Subscribe Now
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#1A1A2E] border border-[#3F3D56] p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-[#6C63FF]">Elite Plan</h2>
            <p className="mt-2 text-[#A6A6A6]">For professionals & career changers.</p>
            <div className="mt-6">
              <p>✅ Everything in Pro Plan</p>
              <p>✅ Unlimited 1-on-1 AI chat</p>
              <p>✅ Personal career coaching (human)</p>
              <p>✅ Priority access to mentors</p>
              <p>✅ Advanced job-market strategies</p>
            </div>
            <div className="mt-6">
              <span className="text-3xl font-bold">10,000 XAF / month</span>
            </div>
            <Link
              href="/signup"
              className="mt-6 inline-block bg-[#6C63FF] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#554ED1] transition"
            >
              Get Elite Access
            </Link>
          </div>
        </div>

        {/* FAQ & Payment Integration Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-[#6C63FF]">💡 Need More Information?</h2>
          <p className="text-lg text-[#A6A6A6] mt-4">
            Check out our <Link href="/faq" className="text-[#FF6584] hover:underline">FAQ page</Link> or 
            contact our support team for assistance.
          </p>
        </div>

        {/* Mobile Money Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-[#FF6584]">💰 Easy Payment via Mobile Money</h2>
          <p className="text-lg text-[#A6A6A6] mt-4">
            We support MTN Mobile Money, Orange Money, and other local payment methods for seamless transactions.
          </p>
          <Link
            href="/payment-info"
            className="mt-4 inline-block bg-[#6C63FF] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#554ED1] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Pricing;
