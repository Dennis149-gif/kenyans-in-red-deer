"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageBackground from "../components/PageBackground"; // adjust path if needed

// If login has a background, keep it; otherwise you can remove PageBackground
export default function LoginPage() {
  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.6} />

      {/* Suspense wrapper is REQUIRED around anything that uses useSearchParams */}
      <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
        <LoginContent />
      </Suspense>
    </main>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  // read any query flags you currently use, example:
  const error = searchParams.get("error");

  return (
    <section className="relative z-10 max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      {/* your existing login form / UI goes here */}
      {/* If you show error from the URL: */}
      {error && (
        <p className="mb-4 rounded bg-red-600/70 px-4 py-2">
          {error}
        </p>
      )}

      {/* ...keep your current form JSX unchanged... */}
    </section>
  );
}

// (Optional) fully opt-out of static generation for this page:
export const dynamic = "force-dynamic";
