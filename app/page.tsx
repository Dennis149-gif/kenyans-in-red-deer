export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center">
        Welcome to Kenyans in Red Deer
      </h1>
      <p className="text-lg text-gray-700 mb-10 max-w-2xl text-center">
        Become a member of the Kenyans in Red Deer community. Sign up to create
        your account, pay your membership, and join our official WhatsApp group.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/signup"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Sign In
        </a>
        <a
          href={process.env.NEXT_PUBLIC_WHATSAPP_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Join WhatsApp Group
        </a>
      </div>
    </main>
  );
}
