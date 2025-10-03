// app/membership/success/page.tsx
import { redirect } from "next/navigation";

export default function SuccessRedirect() {
  // Immediately send users to the homepage
  redirect("/");
}
