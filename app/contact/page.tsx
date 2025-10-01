"use client";

import PageBackground from "../components/PageBackground";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    window.location.href = `mailto:denniskipruto64@gmail.com?subject=Message from ${name}&body=${message}%0AFrom: ${email}`;
  };

  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.5} />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          Feel free to reach out by filling the form below or using the contact details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-black/70 border border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-black/70 border border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-black/70 border border-gray-600 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <p><b>Email:</b> denniskipruto64@gmail.com</p>
          <p><b>Phone:</b> 587-731-0318</p>
        </div>
      </div>
    </main>
  );
}
