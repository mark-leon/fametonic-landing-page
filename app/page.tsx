"use client";
import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Banner />
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
