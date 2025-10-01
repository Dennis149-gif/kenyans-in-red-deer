import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Kenyans in Red Deer",
  description: "Official website for Kenyans in Red Deer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {/* Navbar on every page */}
        <Navbar />
        {/* Add padding so content doesn’t hide behind navbar */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
