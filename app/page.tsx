export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        {/* Background image */}
        <img
          src="/flags-bg.png"
          alt="Kenya and Canada flags"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Foreground content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <img
            src="/kird-logo.png"
            alt="KIRD Logo"
            className="h-24 w-24 rounded-full mb-4"
          />
          <img
          src="/dennis.jpg"
          alt="Dennis Kipruto"
          className="max-h-[400px] w-auto rounded-lg border-4 border-white/20 shadow-xl object-contain"
          />
          <h1 className="mt-6 text-4xl font-extrabold text-white">
            Dennis Kipruto
          </h1>
          <p className="mt-2 text-2xl font-bold text-[#FFD700]">
            Your Voice, Our Future{" "}
            <span className="ml-2 text-[#00A651]">✔️</span>
          </p>
          <a
            href="/manifesto"
            className="mt-6 inline-block rounded-md bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            Read Full Manifesto
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Welcome to Kenyans in Red Deer
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Together, we are building a stronger, united community that supports
          one another through benevolent programs, student and newcomer
          support, and events that celebrate our culture. By joining, you
          become part of a vision that prioritizes growth, transparency, and
          opportunity for all Kenyans in Red Deer.
        </p>
      </section>
    </main>
  );
}
