"use client";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md rounded-lg border border-neutral-700 bg-neutral-900/60 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full rounded-md px-3 py-2 text-black" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full rounded-md px-3 py-2 text-black" required />
          </div>
          <button type="submit" className="w-full rounded-md bg-yellow-500 py-2 font-semibold text-black hover:bg-yellow-400">
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-neutral-400">
          Don’t have an account? <a href="/signup" className="underline text-yellow-300">Sign up</a>
        </p>
      </div>
    </main>
  );
}
