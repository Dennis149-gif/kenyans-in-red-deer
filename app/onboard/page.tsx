"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageBackground from "../components/PageBackground";

export default function OnboardPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Optionally still send email with form data here
    // For now, just redirect to /success
    router.push("/success");
  };

  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.5} />

      <section className="relative z-10 max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Membership Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-4 bg-black/60 p-6 rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
          />
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black"
            rows={3}
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400"
          >
            Submit & Continue
          </button>
        </form>
      </section>
    </main>
  );
}
