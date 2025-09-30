"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { absolutePath } from "@/lib/url";

export default function SignupPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Strong rule: 8+ chars, at least 1 letter, 1 number, 1 special char
  const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!strongPassword.test(password)) {
      setError("Password must be 8+ characters and include a number and a special character.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: absolutePath("/auth/callback") },
    });
    setLoading(false);

    if (error) setError(error.message);
    else setMessage("Check your email for a confirmation link.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSignup} className="bg-white w-full max-w-md rounded-lg shadow p-6 space-y-4">
        <h1 className="text-xl font-semibold">Create account</h1>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <label className="block">
          <span className="text-sm">Email</span>
          <input
            type="email"
            className="mt-1 w-full border rounded p-2"
            autoComplete="email"
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-describedby="pw-help"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-2 top-7 text-xs text-blue-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </label>

        <p id="pw-help" className="text-xs text-gray-500 -mt-2">
          Must be 8+ characters with at least one number and one special character.
        </p>

        <label className="block relative">
          <span className="text-sm">Confirm password</span>
          <input
            type={showConfirm ? "text" : "password"}
            className="mt-1 w-full border rounded p-2 pr-16"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirm((s) => !s)}
            className="absolute right-2 top-7 text-xs text-blue-600"
          >
            {showConfirm ? "Hide" : "Show"}
          </button>
        </label>

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? "Signing up…" : "Sign up"}
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">Sign in</a>
        </p>
      </form>
    </main>
  );
}
