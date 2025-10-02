// app/page.tsx
import PageBackground from "./components/PageBackground";

export const metadata = {
  title: "Kenyans in Red Deer",
  description:
    "Official page of Kenyans in Red Deer — membership, manifesto, contacts, and WhatsApp group.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <PageBackground />

      <section className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo (optional; requires /public/kird-logo.png) */}

        {/* Big gold headline */}
        <p className="text-yellow-400 text-sm md:text-base tracking-[0.25em] uppercase font-bold">
          Official Page of the Kenyans in Red Deer
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white drop-shadow">
          Kenyans in Red Deer
        </h1>

        {/* Strong message */}
        <p className="mt-5 text-neutral-200 leading-relaxed md:text-lg">
          We are building unity, opportunity, and a stronger future together in
          Red Deer. This site is our digital home — where we welcome new members,
          organize events, support one another through the benevolent fund, and
          connect on our official WhatsApp group. <span className="text-yellow-300 font-semibold">This is the face of our community online, and we will keep improving it until it fully represents Kenyans in Red Deer.</span>
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/manifesto"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            Our Manifesto
          </a>
          <a
            href="/membership"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Become a Member
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
