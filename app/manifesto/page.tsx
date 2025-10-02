import PageBackground from "../components/PageBackground";

export default function ManifestoPage() {
  return (
    <main className="relative min-h-screen text-white px-6 py-12">
      <PageBackground />
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-yellow-400">
          Our Manifesto
        </h1>
        <p className="text-center text-lg">
          Together, we envision a vibrant, united, and empowered Kenyan
          community in Red Deer. Our mission is grounded on unity, service,
          transparency, and growth.
        </p>

        {/* Unity & Community */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Unity & Community
          </h2>
          <p className="mt-3 leading-relaxed">
            We will bring together Kenyans from all walks of life — students,
            workers, families, and permanent residents — to stand as one united
            body. By promoting togetherness, we ensure every member feels
            connected, welcomed, and valued.
          </p>
        </section>

        {/* Benevolence */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Benevolence & Support
          </h2>
          <p className="mt-3 leading-relaxed">
            Our benevolent fund ensures that no Kenyan in Red Deer walks alone
            in times of loss, hardship, or crisis. Through collective
            contributions, we will stand with families during funerals,
            emergencies, and other challenges, showing solidarity and compassion
            for one another.
          </p>
        </section>

        {/* Education & Empowerment */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Education & Youth Empowerment
          </h2>
          <p className="mt-3 leading-relaxed">
            We will support students with mentorship programs, orientation for
            newcomers, and opportunities for professional growth. Empowering our
            youth ensures that Kenyans in Red Deer thrive academically,
            socially, and economically.
          </p>
        </section>

        {/* Culture & Sports */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Culture, Sports & Events
          </h2>
          <p className="mt-3 leading-relaxed">
            We will host cultural festivals, sports tournaments, and
            recreational activities that showcase our heritage and talents. These
            events will celebrate Kenyan identity while helping us integrate into
            Canadian society with pride and confidence.
          </p>
        </section>

        {/* Transparency */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Transparency & Accountability
          </h2>
          <p className="mt-3 leading-relaxed">
            We will lead with openness. Every shilling and dollar contributed
            will be accounted for. Regular updates will be shared with members,
            and leadership will remain accountable to those who entrust us with
            responsibility.
          </p>
        </section>

        {/* Partnerships */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Partnerships & Integration
          </h2>
          <p className="mt-3 leading-relaxed">
            We will build bridges with Red Deer County leaders, local Canadian
            institutions, and other communities. These partnerships will unlock
            opportunities and resources, ensuring Kenyans in Red Deer are
            recognized, respected, and included in local development.
          </p>
        </section>

        {/* Growth */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Growth & Opportunity
          </h2>
          <p className="mt-3 leading-relaxed">
            Beyond cultural and social ties, we will seek ways to grow
            economically and socially as a community. This includes
            entrepreneurship support, networking opportunities, and collective
            projects that uplift members.
          </p>
        </section>

        {/* Website as the Face */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400">
            Our Website: The Face of Kenyans in Red Deer
          </h2>
          <p className="mt-3 leading-relaxed">
            This website is not just a platform — it is our face, our voice, and
            our identity. It will grow into the central hub for membership
            registration, event updates, benevolent support, cultural showcases,
            and leadership accountability. By building this site together, we
            ensure that Kenyans in Red Deer have a digital home that reflects
            who we are and what we stand for. This will become the recognized
            and official representation of our community.
          </p>
        </section>

        <p className="text-center text-lg italic">
          “Together, let us write a story of unity, strength, and progress for
          Kenyans in Red Deer — and let this website be our lasting voice.”
        </p>
      </div>
    </main>
  );
}
