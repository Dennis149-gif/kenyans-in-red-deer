"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Banner from "../components/Banner";
import JoinWhatsappModal from "../components/JoinWhatsappModal";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [showJoin, setShowJoin] = useState(false);

  // If user came from signup success → show WhatsApp modal
  useEffect(() => {
    if (params.get("welcome") === "1") {
      setShowJoin(true);
    }
  }, [params]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");

    try {
      // TODO: replace with your real login logic (Supabase/Auth/etc.)
      // await auth.signIn({ email, password: pwd });

      // On success → go to dashboard (no WhatsApp button here)
      router.push("/dashboard");
    } catch (e: any) {
      setErr(e?.message || "Login failed. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Banner />

      <div className="mx-auto max-w-md px-6 py-10">
        <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>
        <form onSubmit={handleLogin} className="space-y-4">
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

          {/* REMOVE any WhatsApp button from Login */}
          <button
            disabled={busy}
            type="submit"
            className="w-full rounded-md bg-yellow-500 px-4 py-3 font-semibold text-black hover:bg-yellow-400 disabled:opacity-60"
          >
            {busy ? "Signing In..." : "Login"}
          </button>

          {err && <p className="text-sm text-red-400">{err}</p>}
        </form>
      </div>

      {/* WhatsApp modal shown only when coming from sign-up */}
      <JoinWhatsappModal open={showJoin} onClose={() => setShowJoin(false)} />
    </main>
  );
}
