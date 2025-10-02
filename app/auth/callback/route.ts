// app/auth/callback/route.ts
export async function GET(req: Request) {
  const origin = new URL(req.url).origin;
  const url = new URL('/membership', origin);
  // Later: parse tokens from req.url if using a real provider
  return Response.redirect(url, 302);
}
