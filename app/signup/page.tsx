"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SignupContent() {
  const params = useSearchParams();
  const ref = params.get("ref"); // example param

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      {ref && (
        <p className="text-green-400 mb-4">Referred by: {ref}</p>
      )}
      {/* Your signup form here */}
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading signup...</div>}>
      <SignupContent />
    </Suspense>
  );
}
