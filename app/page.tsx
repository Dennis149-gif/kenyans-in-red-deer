// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center p-6">
      {/* Background flags */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/flags-bg.png" 
          alt="Flags Background" 
          fill 
          className="object-cover opacity-20" 
        />
      </div>

      {/* Logo */}
      <Image
        src="/kird-logo.png"
        alt="Kenyans in Red Deer Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-green-800">
        Kenyans in Red Deer
      </h1>
      <p className="mt-4 max-w-xl text-gray-700">
        A united community of Kenyans in Red Deer. Together we support, 
        grow, and build a stronger future.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="/manifesto"
          className="rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700"
        >
          Manifesto
        </a>
        <a
          href="/membership"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
        >
          Membership
        </a>
        <a
          href="/contact"
          className="rounded-lg bg-black px-6 py-3 text-white font-semibold hover:bg-gray-800"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
