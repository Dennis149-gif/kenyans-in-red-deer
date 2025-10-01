import PageBackground from "../components/PageBackground";

const WHATSAPP_INVITE = "https://chat.whatsapp.com/BdqDQUqKZ2C6er62j3PQKO";

export default function MembershipPage() {
  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.5} />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-2 text-center">Membership</h1>
        <p className="text-center text-neutral-200 mb-8">
          Join Kenyans in Red Deer for only <span className="text-green-400 font-semibold">$20/year</span>.
          Your membership keeps our community strong, visible, and supported.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h3 className="font-semibold mb-2 text-yellow-300">What you get</h3>
            <ul className="list-disc pl-5 text-neutral-200 space-y-1">
              <li>Access to community events & official WhatsApp group</li>
              <li>Eligibility for benevolent fund support</li>
              <li>Voting rights in KIRD elections</li>
              <li>Networking, job leads & mentorship</li>
            </ul>
          </div>

          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h3 className="font-semibold mb-2 text-yellow-300">Where your $20 goes</h3>
            <ul className="list-disc pl-5 text-neutral-200 space-y-1">
              <li>Events & programs (venues, equipment, kids’ activities)</li>
              <li>Benevolent reserve (transparent & reported)</li>
              <li>Tech & admin (website, tools, printing)</li>
              <li>Emergency contingency (committee-approved)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="/onboard"
            className="inline-block rounded-md bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            Register Now
          </a>

          {/* After successful registration, join WhatsApp */}
          <a
            href={WHATSAPP_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
          >
            Join WhatsApp Group
          </a>

          <p className="text-neutral-300 text-sm text-center">
            After registering successfully, click the green button to join our official WhatsApp community.
          </p>
        </div>
      </section>
    </main>
  );
}
