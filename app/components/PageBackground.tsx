// app/components/PageBackground.tsx
export default function PageBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Flags background */}
      <img
        src="/flags-bg.png"
        alt="Kenya & Canada flags background"
        className="h-full w-full object-cover"
        style={{ opacity: 0.55 }}
      />
      {/* Centered KIRD watermark */}
      <img
        src="/kird-logo.png"
        alt="Kenyans in Red Deer watermark"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 select-none"
        style={{ opacity: 0.08 }}
      />
      {/* dark veil for readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
