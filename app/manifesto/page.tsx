import PageBackground from "../components/PageBackground";

export default function ManifestoPage() {
  return (
    <main className="min-h-screen text-white">
      <PageBackground dim={0.5} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center">
          Our Manifesto: Stronger Together
        </h1>
        <p className="mt-6 text-lg text-center text-neutral-200">
          We are building a united, transparent, and opportunity-driven Kenyans in Red Deer (KIRD).
        </p>

        {/* Six Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h2 className="text-xl font-bold text-yellow-300">1) Benevolent Fund</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-200 space-y-1">
              <li>Fair, quick-response support in bereavement & emergencies.</li>
              <li>Clear rules + monthly statements shared to members.</li>
              <li>3-person review team to approve within 24–48 hrs.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h2 className="text-xl font-bold text-yellow-300">2) Student & Newcomer Support</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-200 space-y-1">
              <li>Mentorship: pair newcomers/students with settled members.</li>
              <li>Starter kit: housing, SIN/ID, jobs, transport, settlement tips.</li>
              <li>Scholarship drive + textbook exchange once per quarter.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h2 className="text-xl font-bold text-yellow-300">3) Community Events</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-200 space-y-1">
              <li>Sports day & awards, summer BBQ, cultural & music nights.</li>
              <li>Family day with kids’ activities + career networking hour.</li>
              <li>Public quarterly calendar so everyone can plan ahead.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h2 className="text-xl font-bold text-yellow-300">4) Governance & Transparency</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-200 space-y-1">
              <li>Register KIRD; publish constitution & by-laws.</li>
              <li>Monthly finance summary + quarterly town-hall Q&A.</li>
              <li>Simple ticket system for suggestions and complaints.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h2 className="text-xl font-bold text-yellow-300">5) Partnerships & Visibility</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-200 space-y-1">
              <li>Engage City/County leaders & local colleges for programs.</li>
              <li>Employer links for job fairs, apprenticeships & training.</li>
              <li>Collaborate with community groups for joint grants/events.</li>
            </ul>
          </div>

          <div className="rounded-lg bg-black/60 border border-neutral-700 p-5">
            <h2 className="text-xl font-bold text-yellow-300">6) Growth & Opportunity</h2>
            <ul className="mt-2 list-disc pl-5 text-neutral-200 space-y-1">
              <li>Business circle: promote member businesses & discounts.</li>
              <li>Workshops: taxes, resumes, budgeting, immigration info.</li>
              <li>Volunteer corps for events & rapid benevolent response.</li>
            </ul>
          </div>
        </div>

        {/* $20 Breakdown */}
        <div className="mt-12 rounded-lg bg-black/60 border border-neutral-700 p-6">
          <h2 className="text-2xl font-bold text-yellow-400 text-center">Where Your $20 Goes</h2>
          <ul className="mt-4 list-disc pl-6 text-neutral-200 space-y-1">
            <li>60%: Events & programs (venue, equipment, kids’ activities)</li>
            <li>25%: Benevolent reserve (audited & reported monthly)</li>
            <li>10%: Tech & admin (website, tools, printing)</li>
            <li>5%: Emergency discretion (committee-approved)</li>
          </ul>
        </div>

        {/* First 100 Days */}
        <div className="mt-12 rounded-lg bg-green-900/20 border border-green-800 p-6">
          <h2 className="text-2xl font-bold text-green-300 text-center">First 100 Days Plan</h2>
          <ol className="mt-4 list-decimal pl-6 text-neutral-100 space-y-1">
            <li>Publish constitution draft & open comments for 14 days.</li>
            <li>Elect Benevolent Committee & release the process guide.</li>
            <li>Launch mentorship program + newcomer starter kit.</li>
            <li>Announce quarterly events calendar & venues.</li>
            <li>Release first finance dashboard and feedback survey.</li>
          </ol>
        </div>

        {/* FAQs */}
        <div className="mt-12 rounded-lg bg-black/60 border border-neutral-700 p-6">
          <h2 className="text-2xl font-bold text-yellow-400 text-center">FAQs</h2>
          <div className="mt-4 space-y-3 text-neutral-200">
            <p><span className="font-semibold text-yellow-300">Do you need to be a member to vote?</span> Yes—membership ensures fairness and accountability.</p>
            <p><span className="font-semibold text-yellow-300">Who can benefit from benevolent?</span> Immediate family, with fair rules and committee oversight.</p>
            <p><span className="font-semibold text-yellow-300">How do we prevent misuse?</span> Clear rules, 2–3 person approvals, and monthly reports to members.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
