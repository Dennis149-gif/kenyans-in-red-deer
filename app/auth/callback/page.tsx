// app/auth/page.tsx
export const metadata = { title: 'Auth · Kenyans in Red Deer' };

export default function AuthPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide">
          Account
        </h1>
        <p className="max-w-xl text-neutral-300">
          Create your account or sign in to manage your membership
          and access our WhatsApp group.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/signup"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  );
}
