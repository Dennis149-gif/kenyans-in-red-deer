// app/components/PageBackground.tsx
// Layered background: flags image + your photo + dark gradient for readability.
export default function PageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Flags layer */}
      <img
        src="/flags-bg.png"
        alt="Kenya & Canada flags"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      {/* Portrait layer (centered, subtle) */}
      <img
        src="/dennis.jpg"
        alt="Community member"
        className="absolute inset-0 m-auto h-[75vh] max-w-none object-contain opacity-25 mix-blend-lighten"
        style={{ filter: "grayscale(10%) contrast(1.05)" }}
      />
      {/* Dark gradient mask to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
    </div>
  );
}
