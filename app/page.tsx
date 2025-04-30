"use client";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Banner />
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8">
        <Header />
        <HeroSection />
      </div>
    </main>
  );
}
