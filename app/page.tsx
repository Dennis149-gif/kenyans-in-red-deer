import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-black text-zinc-100">
      <Navbar />

      {/* hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-10 sm:pt-14">
        {/* top logos */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/kird-logo.png"
            alt="Kenyans in Red Deer logo"
            width={96}
            height={96}
            className="h-16 w-16 sm:h-20 sm:w-20"
            priority
          />
          <Image
            src="/dennis.jpg"
            alt="Chairperson"
            width={140}
            height={140}
            className="h-28 w-28 rounded-full object-cover ring-2 ring-yellow-500/60 sm:h-32 sm:w-32"
          />
        </div>

        {/* headline & copy */}
        <h1 className="mt-8 text-center font-extrabold leading-tight text-yellow-400">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Official Website of the
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Kenyans in Red Deer
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-center text-base text-zinc-300 sm:text-lg">
          Your voice, our future. Become a member, support community programs, and connect with
          fellow Kenyans in Red Deer.
        </p>

        {/* actions */}
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/signup"
            className="w-full max-w-[260px] rounded-md bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-green-700 sm:w-auto"
          >
            Sign Up
          </Link>

          <Link
            href="/login"
            className="w-full max-w-[260px] rounded-md bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
          >
            Sign In
          </Link>

          <Link
            href={process.env.WHATSAPP_INVITE_URL || "#"}
            className="w-full max-w-[260px] rounded-md border border-zinc-700 px-5 py-3 text-center text-sm font-semibold text-zinc-100 hover:border-zinc-500 sm:w-auto"
          >
            Join WhatsApp Group
          </Link>
        </div>
      </section>
    </main>
  );
}
