// components/SuccessBanner.tsx
export default function SuccessBanner() {
  return (
    <div className="rounded-lg border border-yellow-500/40 bg-black/30 p-4">
      <h3 className="text-xl font-semibold mb-2 text-yellow-300">Registration Complete 🎉</h3>
      <p className="text-gray-200">
        You’re now a registered member of <span className="font-semibold">Kenyans in Red Deer</span>.
        Tap the button below to join the official WhatsApp group.
      </p>
      <div className="mt-4">
        <a
          href="/join-whatsapp"  // replace with your real invite URL when ready
          className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold rounded px-4 py-2"
        >
          Join WhatsApp Group
        </a>
      </div>
    </div>
  );
}
