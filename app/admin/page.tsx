// app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AdminPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  // form
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // check admin
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return router.replace("/login");
      const { data } = await supabase.from("admins").select("user_id").eq("user_id", user.id).maybeSingle();
      setIsAdmin(!!data);
    })();
  }, [router, supabase]);

  if (!isAdmin) {
    return <main className="p-6">Admins only.</main>;
  }

  async function createAnnouncement(e: React.FormEvent) {
    e.preventDefault();
    await supabase.from("announcements").insert({ title, body });
    setTitle(""); setBody("");
    alert("Announcement posted");
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-xl font-semibold">Admin</h1>

        <section className="bg-white rounded shadow p-4">
          <h2 className="font-semibold">New announcement</h2>
          <form onSubmit={createAnnouncement} className="space-y-3 mt-3">
            <input className="w-full border rounded p-2"
              placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
            <textarea className="w-full border rounded p-2 min-h-[120px]"
              placeholder="Write your message…" value={body} onChange={e=>setBody(e.target.value)} required />
            <button className="bg-black text-white py-2 px-4 rounded">Publish</button>
          </form>
        </section>

        <section className="bg-white rounded shadow p-4">
          <h2 className="font-semibold">Upload event photos</h2>
          <Uploader />
        </section>
      </div>
    </main>
  );
}

function Uploader() {
  const supabase = createClientComponentClient();
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);

  async function upload() {
    if (!files || files.length === 0) return;
    setUploading(true);
    // upload each file with a timestamp prefix
    for (const f of Array.from(files)) {
      const key = `${Date.now()}-${f.name}`;
      const { error } = await supabase.storage.from("events").upload(key, f, { upsert: false });
      if (error) alert(error.message);
    }
    setUploading(false);
    alert("Uploaded!");
  }

  return (
    <div className="space-y-3">
      <input type="file" accept="image/*" multiple onChange={e=>setFiles(e.target.files)} />
      <button disabled={uploading} onClick={upload}
        className="bg-gray-800 text-white py-1 px-3 rounded">
        {uploading ? "Uploading…" : "Upload"}
      </button>
    </div>
  );
}
