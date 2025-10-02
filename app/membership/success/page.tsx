// app/membership/success/page.tsx
import PageBackground from "../../components/PageBackground";

export default function SuccessPage() {
  return (
    <main className="relative min-h-screen text-white">
      <PageBackground />

      <section className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-3xl font-extrabold">Registration Successful 🎉</h1>
        <p className="mt-3 text-gray-200">
          Welcome to Kenyans in Red Deer! You’re now a registered member.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Replace # with your real WhatsApp invite when ready */}
          <a
            href="#"
            className="rounded-md bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500"
          >
            Join WhatsApp Group
          </a>
          <a
            href="/"
            className="rounded-md bg-gray-700 px-6 py-3 font-semibold text-white hover:bg-gray-600"
          >
            Back Home
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-300">
          Didn’t get the invite? Email{" "}
          <a className="underline" href="mailto:kenyansinreddeer@gmail.com">
            kenyansinreddeer@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
