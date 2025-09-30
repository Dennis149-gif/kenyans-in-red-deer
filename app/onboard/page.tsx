// app/onboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function OnboardPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load current profile (if any)
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/login");
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("full_name, phone, neighborhood, postal_code")
        .eq("id", user.id)
        .maybeSingle();

      if (data) {
        setFullName(data.full_name ?? "");
        setPhone(data.phone ?? "");
        setNeighborhood(data.neighborhood ?? "");
        setPostalCode(data.postal_code ?? "");
      }
      setLoading(false);
    })();
  }, [router, supabase]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("profiles").upsert({
      id: user.id,
      full_name,
      phone,
      neighborhood,
      postal_code,
      updated_at: new Date().toISOString(),
    });

    router.replace("/dashboard");
  }

  if (loading) return <div className="p-6">Loading…</div>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={save} className="bg-white w-full max-w-md rounded-lg shadow p-6 space-y-4">
        <h1 className="text-xl font-semibold">Complete your profile</h1>

        <label className="block">
          <span className="text-sm">Full name</span>
          <input className="mt-1 w-full border rounded p-2"
            value={full_name} onChange={e=>setFullName(e.target.value)} required />
        </label>

        <label className="block">
          <span className="text-sm">Phone</span>
          <input className="mt-1 w-full border rounded p-2"
            value={phone} onChange={e=>setPhone(e.target.value)} required />
        </label>

        <label className="block">
          <span className="text-sm">Neighborhood</span>
          <input className="mt-1 w-full border rounded p-2"
            value={neighborhood} onChange={e=>setNeighborhood(e.target.value)} />
        </label>

        <label className="block">
          <span className="text-sm">Postal code</span>
          <input className="mt-1 w-full border rounded p-2"
            value={postal_code} onChange={e=>setPostalCode(e.target.value)} />
        </label>

        <button disabled={saving}
          className="w-full bg-black text-white py-2 rounded">
          {saving ? "Saving…" : "Save & Continue"}
        </button>
      </form>
    </main>
  );
}
