// app/dashboard/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function DashboardPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_INVITE_URL;

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/login"); 
        return;
      }
      setEmail(user.email ?? null);

      // Check profile completeness
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name, phone")
        .eq("id", user.id)
        .maybeSingle();

      if (!profile || !profile.full_name || !profile.phone) {
        router.replace("/onboard");
        return;
      }

      // Check admin
      const { data: admin } = await supabase
        .from("admins")
        .select("user_id").eq("user_id", user.id).maybeSingle();
      setIsAdmin(!!admin);
    })();
  }, [router, supabase]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-3xl mx-auto flex items-center justify-between">
        <h1 className="text-xl">Kenyans in Red Deer — Dashboard</h1>
        <button
          className="bg-gray-800 text-white py-1 px-3 rounded"
          onClick={async () => {
            await supabase.auth.signOut();
            router.replace("/");
          }}
        >
          Sign out
        </button>
      </header>

      <section className="max-w-3xl mx-auto mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold">Welcome!</h2>
        <p className="text-sm text-gray-600 mt-1">
          Signed in as <strong>{email ?? ""}</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          <a href="/announcements" className="border rounded p-3 text-center hover:bg-gray-50">Announcements</a>
          <a href="/gallery" className="border rounded p-3 text-center hover:bg-gray-50">Gallery</a>
          {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
               className="border rounded p-3 text-center hover:bg-gray-50">
              Join WhatsApp Group
            </a>
          )}
          <a href="/" className="border rounded p-3 text-center hover:bg-gray-50">Home</a>
          {isAdmin && (
            <a href="/admin" className="border rounded p-3 text-center hover:bg-gray-50 col-span-full">
              Admin Panel
            </a>
          )}
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Tip: if email confirmations don’t land, check Supabase Auth “URL Configuration” and make sure the redirect includes <code>/auth/callback</code>.
        </p>
      </section>
    </main>
  );
}
