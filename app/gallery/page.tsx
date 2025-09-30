// app/gallery/page.tsx
"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type Photo = { name: string; url: string };

export default function GalleryPage() {
  const supabase = createClientComponentClient();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.storage.from("events").list("", { limit: 100, sortBy: { column: "created_at", order: "desc" }});
      if (error) { setLoading(false); return; }
      const urls = (data ?? []).map((f) => {
        const { data: pub } = supabase.storage.from("events").getPublicUrl(f.name);
        return { name: f.name, url: pub!.publicUrl };
      });
      setPhotos(urls);
      setLoading(false);
    })();
  }, [supabase]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Event Gallery</h1>
        {loading ? (
          <p>Loading…</p>
        ) : photos.length === 0 ? (
          <p>No photos yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer"
                 className="block rounded overflow-hidden bg-white shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={p.name} className="w-full h-40 object-cover" />
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
