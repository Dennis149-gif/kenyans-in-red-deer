export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full">
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
            className="h-48 w-48 rounded-lg border-4 border-white/20 shadow-xl"
          />
          <h1 className="mt-6 text-4xl font-extrabold text-yellow-400 uppercase">
            Official Page of Kenyans in Red Deer
          </h1>
          <p className="mt-4 text-2xl font-bold text-[#FFD700]">
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
          This is the <span className="text-yellow-400 font-semibold">official digital home</span> 
          of the Kenyans in Red Deer community. More than a website, it is our 
          identity, our connection point, and our voice to the wider world.  
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-300">
          Here, you can register as a member, join our benevolent fund, learn
          about upcoming cultural events, and follow leadership updates. This
          website will continue to grow until it becomes the true face of Kenyans
          in Red Deer, both in Canada and across the globe.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/membership"
            className="rounded-md bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
          >
            Join Membership
          </a>
          <a
            href="/contact"
            className="rounded-md bg-gray-700 px-6 py-3 font-semibold hover:bg-gray-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
