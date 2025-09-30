// lib/url.ts
export function absolutePath(path: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return siteUrl.replace(/\/+$/, "") + path;
}
