"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CallbackContent() {
  const params = useSearchParams();
  const token = params.get("token");
  const error = params.get("error");

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {token ? (
        <p className="text-green-400">Successfully authenticated! 🎉</p>
      ) : error ? (
        <p className="text-red-400">Error: {error}</p>
      ) : (
        <p>Processing authentication...</p>
      )}
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading callback...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
