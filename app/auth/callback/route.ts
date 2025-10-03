import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // 👇 after login/signup, redirect users to homepage
  return NextResponse.redirect(new URL("/", request.url));
}
