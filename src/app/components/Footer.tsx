import Link from "next/link";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#B8C1EC] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-[#6C63FF]">Mentor@</h2>
          <p className="text-sm text-[#A6A6A6] mt-2">
            Your AI-powered career & mindset coaching platform.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <nav className="mt-6 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6">
            <li>
              <Link
                href="/about"
                className="hover:text-[#6C63FF] transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-[#6C63FF] transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-[#6C63FF] transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#6C63FF] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right - Social Links */}
        <div className="mt-6 md:mt-0 flex space-x-4">
          <a
            href="mailto:support@mentorapp.com"
            className="text-[#B8C1EC] hover:text-[#FF6584] transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://twitter.com/MentorApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B8C1EC] hover:text-[#6C63FF] transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com/company/mentorapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B8C1EC] hover:text-[#6C63FF] transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-xs text-[#A6A6A6]">
        &copy; {new Date().getFullYear()} Mentor@. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
