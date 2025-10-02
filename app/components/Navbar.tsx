"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/manifesto", label: "Manifesto" },
    { href: "/membership", label: "Membership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-500 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/kird-logo.png" alt="KIRD" className="h-10 w-10 rounded-full" />
          <span className="text-yellow-400 font-bold text-lg">
            Kenyans in Red Deer
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-yellow-400 transition ${
                pathname === link.href ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Auth buttons */}
          <Link
            href="/signup"
            className="px-4 py-2 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-md border border-yellow-500 text-yellow-400 font-semibold hover:bg-yellow-500 hover:text-black"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
