// app/page.tsx
import Image from "next/image";

// Background flags layer (uses /public/flags-bg.png)
function PageBackground() {
  return (
    <>
      {/* Flags image across the whole screen */}
      <Image
        src="/flags-bg.png"
        alt="Kenya and Canada flags background"
        fill
        priority
        className="pointer-events-none object-cover opacity-40"
      />
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />
    </>
  );
}

export const metadata = {
  title: "Kenyans in Red Deer – Official Page",
  description:
    "The official home of Kenyans in Red Deer. Join the community, register membership, and get the WhatsApp group link.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-[calc(100svh-0px)]">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <PageBackground />
      </div>

      {/* content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16">
        {/* KIRD round logo */}
        <Image
          src="/kird-logo.png"
          alt="KIRD Logo"
          width={160}
          height={160}
          className="rounded-full mb-6 shadow-xl"
          priority
        />

        {/* Dennis photo (optional; remove if you don’t want it) */}
        <div className="mb-6">
          <Image
            src="/dennis.jpg"
            alt="Dennis Kirputo"
            width={300}
            height={300}
            className="mx-auto max-h-[300px] w-auto rounded-lg border border-white/20 shadow-2xl object-contain"
            priority
          />
        </div>

        {/* Big golden message */}
        <p className="mb-2 text-sm tracking-widest text-yellow-400/90">
          OFFICIAL PAGE OF THE KENYANS IN RED DEER
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
          Building unity, community, and a stronger future together.
        </h1>

        <p className="mt-4 max-w-3xl text-base md:text-lg text-neutral-200">
          We are creating the real face of Kenyans in Red Deer—organizing,
          supporting one another, and celebrating our people. Register as a
          member, connect with leadership, and join our official WhatsApp group.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/membership"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
          >
            Become a Member
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            Contact Us
          </a>
          <a
            href="/login"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-md border border-white/10 transition"
          >
            Sign In
          </a>
        </div>
      </section>
    </main>
  );
}
