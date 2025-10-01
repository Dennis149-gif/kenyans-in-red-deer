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
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="text-yellow-400 font-bold text-xl">
          KIRD
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-yellow-400 ${
                pathname === link.href ? "text-yellow-400 font-semibold" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
