'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-yellow-500/40 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/kird-logo.png"
            alt="Kenyans in Red Deer"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            priority
          />
          {/* On small screens keep the brand compact */}
          <span className="font-extrabold leading-tight text-yellow-400">
            <span className="block text-base sm:text-lg">Kenyans in</span>
            <span className="block -mt-1 text-base sm:text-lg">Red Deer</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          <Link href="/" className="text-sm font-medium text-zinc-200 hover:text-yellow-400">Home</Link>
          <Link href="/manifesto" className="text-sm font-medium text-zinc-200 hover:text-yellow-400">Manifesto</Link>
          <Link href="/membership" className="text-sm font-medium text-zinc-200 hover:text-yellow-400">Membership</Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-200 hover:text-yellow-400">Contact</Link>

          <div className="ml-2 flex items-center gap-2">
            <Link
              href="/signup"
              className="rounded-md bg-yellow-400/90 px-3 py-1.5 text-sm font-semibold text-black hover:bg-yellow-400"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="rounded-md border border-zinc-700 px-3 py-1.5 text-sm font-semibold text-zinc-100 hover:border-zinc-500"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-zinc-700 p-2 text-zinc-200 hover:bg-zinc-800 sm:hidden"
          aria-label="Open menu"
        >
          {/* simple hamburger (no extra package) */}
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 px-4 pb-3">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-800">Home</Link>
            <Link href="/manifesto" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-800">Manifesto</Link>
            <Link href="/membership" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-800">Membership</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-800">Contact</Link>
            <div className="mt-1 flex gap-2 px-3">
              <Link href="/signup" onClick={() => setOpen(false)} className="flex-1 rounded-md bg-yellow-400/90 px-3 py-2 text-center text-sm font-semibold text-black hover:bg-yellow-400">Sign Up</Link>
              <Link href="/login" onClick={() => setOpen(false)} className="flex-1 rounded-md border border-zinc-700 px-3 py-2 text-center text-sm font-semibold text-zinc-100 hover:border-zinc-500">Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
