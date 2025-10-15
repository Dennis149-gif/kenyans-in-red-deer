export default function HomePage() {
  return (
    <main className="relative">
      {/* Background image; keep or remove as you like */}
      <div className="absolute inset-0 -z-10 bg-[url('/flags-bg.png')] bg-cover bg-center opacity-20" />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 md:pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Logos */}
          <div className="mb-6 flex flex-col items-center gap-4">
            <img
              src="/kird-logo.png"
              alt="KIRD Logo"
              className="h-16 w-16 rounded-full md:h-20 md:w-20"
            />
            <img
              src="/dennis.jpg"
              alt="Dennis"
              className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
            />
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-yellow-400 sm:text-4xl md:text-5xl">
            Official Page of the Kenyans in Red Deer
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl text-base text-zinc-200 sm:text-lg">
            Your voice, our future. Become a member, support community programs,
            and connect with fellow Kenyans in Red Deer.
          </p>

          {/* CTA buttons */}
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/signup"
              className="rounded-md bg-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Sign In
            </a>
            <a
              href="/membership"
              className="rounded-md bg-zinc-900/80 px-5 py-2.5 text-center text-sm font-semibold text-zinc-100 ring-1 ring-zinc-700 hover:bg-zinc-800"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
