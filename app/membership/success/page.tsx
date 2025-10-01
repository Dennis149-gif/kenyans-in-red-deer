import PageBackground from "../../components/PageBackground";

const WHATSAPP_INVITE = "https://chat.whatsapp.com/BdqDQUqKZ2C6er62j3PQKO";

export default function SuccessPage() {
  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.5} />

      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400">Welcome to KIRD! 🎉</h1>
        <p className="mt-4 text-lg text-neutral-200">
          Your registration was received. Thank you for supporting Kenyans in Red Deer.
        </p>

        <div className="mt-8 rounded-lg bg-black/60 border border-neutral-700 p-6 text-left">
          <p className="text-neutral-100">Next steps:</p>
          <ul className="mt-3 list-disc pl-6 text-neutral-200 space-y-2">
            <li>Watch for a confirmation email with your membership details.</li>
            <li>Join our official WhatsApp community using the button below.</li>
            <li>Check the <a href="/manifesto" className="text-yellow-300 underline">Manifesto</a> and upcoming events.</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WHATSAPP_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Join WhatsApp Group
          </a>
          <a
            href="/"
            className="rounded-md border border-neutral-600 px-6 py-3 hover:bg-white/10"
          >
            Back to Home
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-400">
          Need help? Email <a href="mailto:denniskipruto64@gmail.com" className="underline text-blue-300">denniskipruto64@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
