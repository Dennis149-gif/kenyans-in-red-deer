export default function PageBackground({ dim = 0.5 }: { dim?: number }) {
  return (
    <>
      <img
        src="/flags-bg.png"
        alt=""
        aria-hidden="true"
        className="fixed inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: `rgba(0,0,0,${dim})` }}
        aria-hidden="true"
      />
    </>
  );
}
