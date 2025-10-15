export default function HomePage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-[url('/flags-bg.png')] bg-cover bg-center opacity-20" />

      <section className="mx-auto max-w-7xl px-3 pb-10 pt-6 sm:px-4 md:pt-10 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Logos */}
          <div className="mb-4 flex flex-col items-center gap-2 md:mb-6">
            <img
              src="/kird-logo.png"
              alt="KIRD Logo"
              className="h-12 w-12 rounded-full md:h-16 md:w-16"
            />
            <img
              src="/dennis.jpg"
              alt="Dennis"
              className="h-14 w-14 rounded-full object-cover md:h-20 md:w-20"
            />
          </div>

          {/* Title */}
          <h1 className="mb-2 text-[24px] font-extrabold leading-tight tracking-tight text-yellow-400 sm:text-4xl md:text-5xl">
            Official Website of the Kenyans in Red Deer
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-5 max-w-2xl text-[14px] text-zinc-200 sm:text-base">
            Your voice, our future. Become a member, support community programs,
            and connect with fellow Kenyans in Red Deer.
          </p>

          {/* CTA buttons */}
          <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row sm:justify-center">
            <a
              href="/signup"
              className="rounded-md bg-green-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-700"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Sign In
            </a>
            <a
              href="/membership"
              className="rounded-md bg-zinc-900/80 px-4 py-2 text-center text-sm font-semibold text-zinc-100 ring-1 ring-zinc-700 hover:bg-zinc-800"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
