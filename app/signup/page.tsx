"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../components/Banner";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");

    try {
      // TODO: replace with your real sign-up logic (Supabase/Auth/etc.)
      // await auth.signUp({ email, password: pwd });

      // On success → send to login with success flag (no WhatsApp button here)
      router.push("/login?welcome=1");
    } catch (e: any) {
      setErr(e?.message || "Failed to sign up. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Banner />

      <div className="mx-auto max-w-md px-6 py-10">
        <h1 className="mb-6 text-center text-3xl font-bold">Create Your Account</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input
              type="email"
              className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">Password</label>
            <input
              type="password"
              className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          {/* REMOVE any WhatsApp button from Sign Up */}
          <button
            disabled={busy}
            type="submit"
            className="w-full rounded-md bg-yellow-500 px-4 py-3 font-semibold text-black hover:bg-yellow-400 disabled:opacity-60"
          >
            {busy ? "Creating Account..." : "Sign Up"}
          </button>

          {err && <p className="text-sm text-red-400">{err}</p>}
        </form>
      </div>
    </main>
  );
}
