"use client";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Suspense boundary for anything inside /login (page or child components)
  return <Suspense fallback={null}>{children}</Suspense>;
}
