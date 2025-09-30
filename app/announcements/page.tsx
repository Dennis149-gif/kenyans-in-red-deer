// app/announcements/page.tsx
"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Ann = { id: number; title: string; body: string; created_at: string };

export default function AnnouncementsPage() {
  const supabase = createClientComponentClient();
  const [items, setItems] = useState<Ann[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("announcements")
        .select("id, title, body, created_at")
        .order("created_at", { ascending: false });
      setItems(data ?? []);
      setLoading(false);
    })();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold">Announcements</h1>
        {loading ? (
          <p className="mt-4">Loading…</p>
        ) : items.length === 0 ? (
          <p className="mt-4 text-gray-600">No announcements yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {items.map(a => (
              <li key={a.id} className="bg-white rounded shadow p-4">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{a.body}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(a.created_at).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
