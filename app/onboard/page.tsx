// app/onboard/page.tsx
"use client";

import { useState } from "react";
import PageBackground from "../components/PageBackground";

export default function OnboardPage() {
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    // fake save for launch — replace with real API later
    await new Promise((r) => setTimeout(r, 900));
    window.location.href = "/membership/success";
  }

  return (
    <main className="relative min-h-screen text-white">
      <PageBackground />
      <section className="mx-auto max-w-xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-extrabold">Onboarding</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm">Full Name</label>
            <input className="w-full rounded-md px-3 py-2 text-black" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" className="w-full rounded-md px-3 py-2 text-black" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Phone / WhatsApp</label>
            <input className="w-full rounded-md px-3 py-2 text-black" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Notes (optional)</label>
            <textarea rows={4} className="w-full rounded-md px-3 py-2 text-black" />
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-md bg-yellow-400 px-5 py-2 font-semibold text-black hover:bg-yellow-300 disabled:opacity-60"
          >
            {busy ? "Submitting…" : "Submit & Continue"}
          </button>
        </form>
      </section>
    </main>
  );
}
