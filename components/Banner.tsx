export default function Banner() {
  return (
    <div
      className="w-full text-white text-center py-2 px-4"
      style={{
        background: "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
      }}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="inline-block animate-pulse">✨</span>
        <span className="font-medium">FRESH BEGINNINGS SALE:</span>
        <span className="font-medium">Extra 25% OFF,</span>
        <span className="font-medium">Limited Spots -</span>
        <span className="font-medium">start your journey today!</span>
      </div>
    </div>
  );
}
