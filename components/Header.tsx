"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "py-4 flex items-center justify-between transition-all duration-300",
        scrolled && "py-2 bg-black/70 backdrop-blur-md"
      )}
    >
      <div className="flex-1">
        <Link href="/" className="inline-block">
          <Image
            src="/Group.png"
            alt="Fametonic Logo"
            width={150}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="#about"
          className="text-white/80 hover:text-white transition-colors"
        >
          About us
        </Link>
        <Link
          href="#contact"
          className="text-white/80 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
      </Sheet>
    </header>
  );
}
