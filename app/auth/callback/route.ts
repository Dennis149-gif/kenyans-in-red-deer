// app/auth/callback/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // After login/signup, send users to homepage
  return NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  );
}
