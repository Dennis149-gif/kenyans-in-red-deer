export default function Banner() {
  return (
    <div className="w-full">
      {/* Thin color strip using Kenyan colors */}
      <div className="h-1 w-full bg-gradient-to-r from-black via-red-600 to-green-600" />
      {/* Title bar */}
      <div className="bg-white text-black text-center py-3 font-extrabold tracking-wide">
        <span className="px-2 py-1 rounded bg-black text-white">Official Website</span>{" "}
        Of <span className="text-red-600">Kenyans</span> <span className="text-black">In</span>{" "}
        <span className="text-green-600">Red Deer</span>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-red-600 to-black" />
    </div>
  );
}
