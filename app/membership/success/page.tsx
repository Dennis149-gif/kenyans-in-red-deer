// app/membership/success/page.tsx
export const metadata = { title: "Membership Successful" };

export default function MembershipSuccessPage() {
  return (
    <main className="min-h-[70vh] mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-green-700">Thank you! 🎉</h1>
      <p className="mt-4 text-gray-700">
        Your membership registration was successful. Check your email for your
        confirmation and receipt.
      </p>

      <div className="mt-8 flex justify-center space-x-3">
        <a
          href="/membership"
          className="inline-block rounded-md bg-green-600 px-5 py-2.5 text-white font-semibold hover:bg-green-700"
        >
          Back to Membership
        </a>
        <a
          href="/"
          className="inline-block rounded-md bg-gray-900 px-5 py-2.5 text-white font-semibold hover:bg-gray-800"
        >
          Go to Homepage
        </a>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        (If you expected a WhatsApp link, it appears after payment in the
        Membership section.)
      </p>
    </main>
  );
}
