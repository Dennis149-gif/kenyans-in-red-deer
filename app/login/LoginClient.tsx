"use client";

import { useSearchParams } from "next/navigation";

export default function LoginClient() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <section className="mx-auto max-w-xl text-center space-y-6">
      <h1 className="text-3xl font-bold text-white">Log in</h1>

      {error && (
        <p className="text-red-300">
          {error === "OAuthAccountNotLinked"
            ? "Please sign in with the same provider you used before."
            : "We couldn't sign you in. Please try again."}
        </p>
      )}

      {/* Replace this block with your real buttons/form if you like */}
      <div className="space-x-3">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded">
          Continue
        </button>
      </div>
    </section>
  );
}
