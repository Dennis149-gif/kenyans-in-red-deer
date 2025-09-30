"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthCallbackPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    async function handleCallback() {
      try {
        const url = new URL(window.location.href);

        // Case 1: Supabase returns tokens in the URL hash (#access_token=...)
        const hashParams = new URLSearchParams(url.hash.replace("#", "?"));
        if (hashParams.get("access_token")) {
          const { error } = await supabase.auth.setSession({
            access_token: hashParams.get("access_token")!,
            refresh_token: hashParams.get("refresh_token")!,
          });
          if (error) throw error;

          setStatus("Login successful! Redirecting...");
          router.replace("/dashboard");
          return;
        }

        // Case 2: Supabase returns a PKCE code (?code=...)
        const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (error) throw error;

        setStatus("Login successful! Redirecting...");
        router.replace("/dashboard");
      } catch (err) {
        console.error(err);
        setStatus("Verification failed. Redirecting to login...");
        setTimeout(() => router.replace("/login"), 3000);
      }
    }

    handleCallback();
  }, [supabase, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-md text-center">
        <h1 className="text-xl font-semibold mb-4">Authentication</h1>
        <p className="text-gray-700">{status}</p>
      </div>
    </div>
  );
}
