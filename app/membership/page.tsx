// app/membership/page.tsx
import PageBackground from "../components/PageBackground";

export default function MembershipPage() {
  return (
    <main className="relative min-h-screen text-white">
      <PageBackground />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-center text-3xl font-extrabold md:text-4xl">
          Membership Registration
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-200">
          Become a registered member for only <b>$20/year</b>. Your membership
          grants access to events, benevolent support, networking, and our official
          WhatsApp group.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white/15 bg-black/30 p-5">
            <h3 className="mb-3 text-lg font-semibold">What you get</h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-200">
              <li>Access to community events & official WhatsApp group</li>
              <li>Eligibility for benevolent fund support</li>
              <li>Voting rights in KIRD elections</li>
              <li>Networking, job leads & mentorship</li>
            </ul>
          </div>

          <div className="rounded-lg border border-white/15 bg-black/30 p-5">
            <h3 className="mb-3 text-lg font-semibold">Where your $20 goes</h3>
            <ul className="ml-6 list-disc space-y-2 text-gray-200">
              <li>Events & programs (venues, equipment, kids’ activities)</li>
              <li>Benevolent reserve (transparent & reported)</li>
              <li>Tech & admin (website, tools, printing)</li>
              <li>Emergency contingency (committee-approved)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/onboard"
            className="inline-block rounded-md bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500"
          >
            Complete Registration
          </a>
          <p className="mt-3 text-sm text-gray-300">
            After registration, you’ll get a button to join the WhatsApp group.
          </p>
        </div>
      </section>
    </main>
  );
}
