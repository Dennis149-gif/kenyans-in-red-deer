// app/page.tsx
import PageBackground from "./components/PageBackground";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-center text-white">
      <PageBackground />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
          Official Page of Kenyans in Red Deer
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Welcome to the official digital home of the Kenyans in Red Deer
          community. Here, we unite, support one another, and build
          opportunities for the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/manifesto"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Read Our Manifesto
          </a>
          <a
            href="/membership"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Join Membership
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
