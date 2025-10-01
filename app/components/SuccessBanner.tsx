"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessBanner() {
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");
  const [visible, setVisible] = useState(!!registered);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (registered) {
      setVisible(true);
      const fadeTimer = setTimeout(() => setFadeOut(true), 4000); // start fading at 4s
      const hideTimer = setTimeout(() => setVisible(false), 5000); // fully hide at 5s
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [registered]);

  if (!visible) return null;

  return (
    <div
      className={`bg-green-600 text-white text-center py-3 font-semibold transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      🎉 You’re successfully registered as a member of Kenyans in Red Deer!
    </div>
  );
}
