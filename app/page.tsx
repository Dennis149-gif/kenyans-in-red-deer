// app/page.tsx
export default function HomePage() {
  return (
    <main className="relative min-h-[90vh] overflow-hidden">
      {/* Background flags */}
      <img
        src="/flags-bg.png"
        alt="Kenya & Canada flags"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 -z-10"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Foreground content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-4 py-24">
        <img src="/kird-logo.png" alt="KIRD Logo" className="h-20 w-20 rounded-full" />
        <img src="/dennis.jpg" alt="Dennis Kirputo" className="h-24 w-24 rounded-full object-cover" />

        {/* <<< CHANGE IS HERE >>> */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFD700] drop-shadow">
          Official Page of the Kenyans in Red Deer
        </h1>

        <p className="max-w-2xl text-neutral-200">
          Your voice, our future. Become a member, support community programs,
          and connect with fellow Kenyans in Red Deer.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a href="/signup" className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">Sign Up</a>
          <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign In</a>
          <a href="/membership" className="px-6 py-3 bg-neutral-800 text-white rounded-md hover:bg-neutral-700">
            Join WhatsApp Group
          </a>
        </div>
      </section>
    </main>
  );
}
