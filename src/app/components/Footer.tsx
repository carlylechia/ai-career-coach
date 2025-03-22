import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-700">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-cyan-400">Mentor@</p>
        <p className="mt-2 text-sm">
          Empowering careers & mindsets for a better future.
        </p>

        {/* Navigation Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="/about" className="hover:text-cyan-400">
            About
          </Link>
          <Link href="/pricing" className="hover:text-cyan-400">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-cyan-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-cyan-400">
            Twitter
          </a>
          <a href="#" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href="#" className="hover:text-cyan-400">
            Facebook
          </a>
        </div>

        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} Mentor@. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
