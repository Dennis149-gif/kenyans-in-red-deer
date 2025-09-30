"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ResetPasswordPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Strong rule: 8+ chars, at least 1 letter, 1 number, 1 special char
  const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!strongPassword.test(password)) {
      setError("Password must be 8+ characters and include a number and a special character.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }
    setMessage("Password updated. Redirecting to login…");
    setTimeout(() => router.replace("/login"), 900);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-md rounded-lg shadow p-6 space-y-4">
        <h1 className="text-xl font-semibold">Set a new password</h1>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <label className="block relative">
          <span className="text-sm">New password</span>
          <input
            type={showPw ? "text" : "password"}
            className="mt-1 w-full border rounded p-2 pr-16"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-describedby="pw-help"
          />
          <button
            type="button"
            onClick={() => setShowPw((s) => !s)}
            className="absolute right-2 top-7 text-xs text-blue-600"
          >
            {showPw ? "Hide" : "Show"}
          </button>
        </label>

        <p id="pw-help" className="text-xs text-gray-500 -mt-2">
          Must be 8+ characters with at least one number and one special character.
        </p>

        <label className="block relative">
          <span className="text-sm">Confirm new password</span>
          <input
            type={showConfirm ? "text" : "password"}
            className="mt-1 w-full border rounded p-2 pr-16"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
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

        <button disabled={loading} className="w-full bg-black text-white py-2 rounded">
          {loading ? "Updating…" : "Update password"}
        </button>
      </form>
    </main>
  );
}
