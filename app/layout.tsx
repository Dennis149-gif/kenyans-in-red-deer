import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Kenyans in Red Deer",
  description: "Official website for the Kenyans in Red Deer community.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-black text-zinc-100 antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
