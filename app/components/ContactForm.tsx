"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-600 text-white p-6 rounded-md shadow-md text-center">
        ✅ Thank you! Your message has been sent. We’ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          required
          className="w-full p-2 rounded-md border border-gray-300 text-black"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full p-2 rounded-md border border-gray-300 text-black"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Subject</label>
        <input
          type="text"
          required
          className="w-full p-2 rounded-md border border-gray-300 text-black"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          required
          rows={4}
          className="w-full p-2 rounded-md border border-gray-300 text-black"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
      >
        Send Message
      </button>
    </form>
  );
}
