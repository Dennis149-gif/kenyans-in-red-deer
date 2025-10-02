// app/components/PageBackground.tsx

type Props = {
  /** 0 = no dark overlay, 1 = fully black overlay */
  dim?: number;
  /** Optional subtle center logo watermark */
  withLogo?: boolean;
};

export default function PageBackground({ dim = 0.5, withLogo = false }: Props) {
  return (
    <>
      {/* Flags background */}
      <img
        src="/flags-bg.png"
        alt=""
        aria-hidden="true"
        className="fixed inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark overlay for contrast */}
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: `rgba(0,0,0,${dim})` }}
        aria-hidden="true"
      />

      {/* Optional watermark logo */}
      {withLogo && (
        <img
          src="/kird-logo.png"
          alt=""
          aria-hidden="true"
          className="fixed top-6 left-1/2 -translate-x-1/2 z-0 opacity-10 w-32 h-32"
        />
      )}
    </>
  );
}
