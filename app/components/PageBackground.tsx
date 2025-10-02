export default function PageBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="/flags-bg.png"
        alt="Kenya and Canada Flags Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
    </div>
  );
}
