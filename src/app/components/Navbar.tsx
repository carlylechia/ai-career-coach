"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // For mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Highlight active page

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-700 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/">
          <span className="text-xl font-bold tracking-wide text-cyan-400">
            Mentor@
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-cyan-400 ${
                pathname === link.href ? "text-cyan-300 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/signin"
            className="px-4 py-2 text-sm bg-transparent border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-2 text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-2 px-6">
            <Link
              href="/signin"
              className="block w-full text-center py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block w-full text-center py-2 mt-2 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
