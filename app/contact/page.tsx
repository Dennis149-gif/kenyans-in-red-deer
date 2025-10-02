import PageBackground from "../components/PageBackground";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-white px-6 py-12">
      <PageBackground />

      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>
          We’d love to hear from you. Whether you have questions about
          membership, events, or our community, feel free to reach out.
        </p>

        <ContactForm />

        <div className="mt-8 text-sm text-neutral-300 space-y-2">
          <p>📍 Red Deer, Alberta</p>
          <p>📧 kenyansinreddeer@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
