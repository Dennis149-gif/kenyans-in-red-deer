export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🎉 Membership Successful!
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center max-w-xl">
        Thank you for becoming a member of Kenyans in Red Deer.  
        You can now join our official WhatsApp group to connect with others.
      </p>
      <a
        href="https://chat.whatsapp.com/BdqDQUqKZ2C6er62j3PQKO"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Join WhatsApp Group
      </a>
    </main>
  );
}
