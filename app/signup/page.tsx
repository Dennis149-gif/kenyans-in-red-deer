"use client";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md rounded-lg border border-neutral-700 bg-neutral-900/60 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Create an Account</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Full name" className="w-full rounded-md px-3 py-2 text-black" required />
          <input type="email" placeholder="Email" className="w-full rounded-md px-3 py-2 text-black" required />
          <input type="password" placeholder="Password" className="w-full rounded-md px-3 py-2 text-black" required />
          <button type="submit" className="w-full rounded-md bg-yellow-500 py-2 font-semibold text-black hover:bg-yellow-400">
            Create account
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-neutral-400">
          Already have an account? <a href="/login" className="underline text-yellow-300">Log in</a>
        </p>
      </div>
    </main>
  );
}
