"use client";

import { useEffect } from "react";

const WHATSAPP_INVITE_URL = "https://chat.whatsapp.com/BdqDQUqKZ2C6er62j3PQKO"; // your real invite

export default function JoinWhatsappModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    // Lock scroll when modal is open
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 text-black shadow-2xl">
        <h2 className="text-xl font-bold mb-2">Join Our Official WhatsApp</h2>
        <p className="text-sm text-gray-700 mb-5">
          Tap the button below to join the <strong>Kenyans in Red Deer</strong> WhatsApp group.
        </p>
        <a
          href={WHATSAPP_INVITE_URL}
          className="inline-block w-full text-center rounded-md bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
        >
          Join WhatsApp Group
        </a>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  );
}
