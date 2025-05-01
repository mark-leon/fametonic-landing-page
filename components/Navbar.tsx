"use client";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className={cn(
        "py-4 flex items-center justify-between transition-all duration-300"
      )}
    >
      <div className="flex-1 md:text-left text-center sm:mt-4 md:mt-8">
        <Link href="/" className="inline-block">
          <Image
            src="/Group.png"
            alt="Fametonic Logo"
            width={150}
            height={40}
            className="lg:h-auto lg:w-auto sm:w-[80%] sm:h-[80%]"
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
          <img src="/hamburger.png" alt="Icon" className="w-6 h-6" />
        </SheetTrigger>
      </Sheet>
    </header>
  );
}
