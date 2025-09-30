"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type User = {
  id: string;
  email?: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;

        const currentUser = data.user
          ? { id: data.user.id, email: data.user.email ?? undefined }
          : null;

        if (!currentUser) {
          // Not signed in — bounce to login
          router.replace("/login");
          return;
        }

        if (mounted) setUser(currentUser);
      } catch (err) {
        console.error(err);
        router.replace("/login");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [router, supabase]);

  async function handleSignOut() {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.error(e);
    } finally {
      router.replace("/login");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-50">
        <div className="animate-pulse text-gray-700">Loading your dashboard…</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Kenyans in Red Deer — Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Welcome!</h2>
          <p className="mt-2 text-gray-700">
            Signed in as <span className="font-medium">{user?.email ?? "unknown"}</span>
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border px-4 py-3 text-center font-medium hover:bg-gray-50"
            >
              Join WhatsApp Group
            </a>

            <a
              href="/"
              className="rounded-md border px-4 py-3 text-center font-medium hover:bg-gray-50"
            >
              Home
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Tip: if email confirmations don’t land, check your Supabase Auth “URL
            Configuration” and make sure the redirect includes{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5">/auth/callback</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
