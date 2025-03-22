"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-[#121212] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#6C63FF]">
          Mentor@
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[#B8C1EC]">
          <NavLink href="/" text="Home" pathname={pathname} />
          <NavLink href="/about" text="About" pathname={pathname} />
          <NavLink href="/pricing" text="Pricing" pathname={pathname} />
          <NavLink href="/blog" text="Blog" pathname={pathname} />
          <NavLink href="/contact" text="Contact" pathname={pathname} />
        </nav>

        {/* Account Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/signin"
            className="text-[#B8C1EC] hover:text-[#6C63FF] transition"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-[#6C63FF] text-white px-5 py-2 rounded-full shadow hover:bg-[#554ED1] transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#B8C1EC] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212] text-white py-6 px-6 absolute top-full left-0 w-full shadow-lg">
          <NavLink href="/" text="Home" pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/about" text="About" pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/pricing" text="Pricing" pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/blog" text="Blog" pathname={pathname} onClick={() => setMenuOpen(false)} />
          <NavLink href="/contact" text="Contact" pathname={pathname} onClick={() => setMenuOpen(false)} />
          <div className="mt-4 flex flex-col space-y-4">
            <Link href="/signin" className="text-center text-[#B8C1EC] hover:text-[#6C63FF]" onClick={() => setMenuOpen(false)}>
              Log In
            </Link>
            <Link href="/signup" className="text-center bg-[#6C63FF] text-white px-5 py-2 rounded-full shadow hover:bg-[#554ED1] transition" onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

/* Reusable NavLink Component */
const NavLink = ({ href, text, pathname, onClick }: { href: string; text: string; pathname: string; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`px-1 hover:text-[#6C63FF] transition ${
      pathname === href ? "text-[#6C63FF] font-semibold" : "text-[#B8C1EC]"
    }`}
  >
    {text}
  </Link>
);

export default Navbar;
