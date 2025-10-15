"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/manifesto", label: "Manifesto" },
    { href: "/membership", label: "Membership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-600/30 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-12 items-center justify-between md:h-14">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/kird-logo.png"
              alt="KIRD"
              className="h-6 w-6 rounded-full md:h-8 md:w-8"
            />
            {/* Short brand on mobile, full on md+ */}
            <span className="text-base font-extrabold tracking-tight text-yellow-400 whitespace-nowrap md:hidden">
              KIRD
            </span>
            <span className="hidden text-lg font-extrabold tracking-tight text-yellow-400 whitespace-nowrap md:block">
              Kenyans in Red Deer
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-zinc-200 hover:text-yellow-300"
              >
                {l.label}
              </Link>
            ))}
            <div className="ml-1 flex items-center gap-2">
              <Link
                href="/signup"
                className="rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-black hover:bg-yellow-300"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="rounded-md border border-yellow-500 px-3 py-1 text-sm font-semibold text-yellow-300 hover:bg-yellow-500/10"
              >
                Sign In
              </Link>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="inline-flex items-center justify-center rounded-md p-1.5 text-zinc-200 hover:bg-zinc-800 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <nav className="space-y-1 border-t border-zinc-800 py-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-zinc-200 hover:bg-zinc-800"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md bg-yellow-400 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-yellow-300"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-md border border-yellow-500 px-3 py-2 text-center text-sm font-semibold text-yellow-300 hover:bg-yellow-500/10"
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
