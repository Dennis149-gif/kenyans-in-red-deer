// app/components/Banner.tsx
export default function Banner() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <img src="/kird-logo.png" alt="KIRD" className="h-10 w-10 rounded-full" />
        <div className="text-yellow-400 font-bold tracking-wide">KIRD</div>
      </div>
    </div>
  );
}
