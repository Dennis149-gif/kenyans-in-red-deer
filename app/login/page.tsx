"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) setError(error.message);
    else router.replace("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleLogin} className="bg-white w-full max-w-md rounded-lg shadow p-6 space-y-4">
        <h1 className="text-xl font-semibold">Sign in</h1>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <label className="block">
          <span className="text-sm">Email</span>
          <input
            type="email"
            className="mt-1 w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block relative">
          <span className="text-sm">Password</span>
          <input
            type={showPassword ? "text" : "password"}
            className="mt-1 w-full border rounded p-2 pr-16"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-7 text-xs text-blue-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </label>

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 underline">Sign up</a>
        </p>
      </form>
    </main>
  );
}
