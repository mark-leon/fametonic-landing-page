"use client";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Banner() {
  return (
    <div
      className="w-full text-white text-center py-2 px-4 font-figtree"
      style={{
        background: "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
      }}
    >
      <div className="flex items-center justify-center">
        <p
          className={`${figtree.className} font-extrabold text-[16px] md:text-[22px] `}
        >
          <span className="inline-block mr-2">🚀</span>
          <span className="text-[#00E7F9]">FRESH BEGINNINGS SALE: </span>
          <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
        </p>
      </div>
    </div>
  );
}
