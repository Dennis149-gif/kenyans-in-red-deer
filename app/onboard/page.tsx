"use client";

import PageBackground from "../components/PageBackground";

export default function OnboardPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const phone = (data.get("phone") as string) || "";
    const whatsapp = (data.get("whatsapp") as string) || "";
    const notes = (data.get("notes") as string) || "";

    const body =
      `New KIRD Membership Registration%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Phone: ${phone}%0A` +
      `WhatsApp: ${whatsapp}%0A%0A` +
      `Notes:%0A${notes}`;
    window.location.href = `mailto:denniskipruto64@gmail.com?subject=KIRD%20New%20Member&body=${body}`;
  };

  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.55} />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2 text-center">Join KIRD</h1>
        <p className="text-center text-neutral-200 mb-8">
          Fill the form below to register. Annual membership fee is{" "}
          <span className="text-green-400 font-semibold">$20</span>.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg bg-black/60 border border-neutral-700 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm mb-1">Full name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="e.g., Dennis Kipruto"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                name="phone"
                type="tel"
                className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="+1 587-xxx-xxxx"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">WhatsApp number</label>
              <input
                name="whatsapp"
                type="tel"
                className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="+1 587-xxx-xxxx"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Notes (optional)</label>
            <textarea
              name="notes"
              rows={4}
              className="w-full rounded-md bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Tell us anything we should know…"
            />
          </div>

          <div className="flex items-center gap-2">
            <input id="agree" type="checkbox" required className="h-4 w-4" />
            <label htmlFor="agree" className="text-sm text-neutral-200">
              I agree to the membership terms and the $20 annual fee.
            </label>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
            >
              Submit Registration
            </button>
            <a
              href="/membership"
              className="w-full sm:w-auto rounded-md border border-neutral-600 px-6 py-3 text-white hover:bg-white/10 text-center"
            >
              Back to Membership
            </a>
          </div>

          <p className="text-xs text-neutral-400 pt-2">
            After submitting, your email app will open with your details; send it to complete registration.
          </p>
        </form>
      </section>
    </main>
  );
}
