"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LoginContent() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      {error && (
        <p className="text-red-400 mb-4">Error: {error}</p>
      )}
      {/* Your login form here */}
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading login...</div>}>
      <LoginContent />
    </Suspense>
  );
}
