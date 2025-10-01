"use client";

import { useState } from "react";
import Banner from "../components/Banner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");

    try {
      // TODO: Replace with your real forgot-password request (e.g., Supabase/NextAuth/Custom API)
      // await auth.sendPasswordResetEmail(email);
      setMsg("If that email exists, a reset link has been sent.");
    } catch (err: any) {
      setMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Banner />

      {/* Four-colour Welcome heading */}
      <h1 className="text-3xl font-extrabold text-center mt-6">
        <span className="text-black bg-white px-2">Welcome</span>{" "}
        <span className="text-red-600">to</span>{" "}
        <span className="text-green-600">Kenyans</span>{" "}
        <span className="text-white bg-black px-2">in Red Deer</span>
      </h1>

      <div className="mx-auto max-w-md px-6 py-10">
        <h2 className="mb-6 text-center text-2xl font-bold">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            disabled={busy}
            type="submit"
            className="w-full rounded-md bg-yellow-500 px-4 py-3 font-semibold text-black hover:bg-yellow-400 disabled:opacity-60"
          >
            {busy ? "Sending..." : "Send Reset Link"}
          </button>

          {msg && <p className="text-sm text-gray-300">{msg}</p>}
        </form>

        <div className="mt-6 text-center">
          <a href="/login" className="text-yellow-400 underline">
            Back to Login
          </a>
        </div>
      </div>
    </main>
  );
}
