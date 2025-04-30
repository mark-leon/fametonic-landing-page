"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ValueProposition from "./ValueProposition";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const valueProps = [
    {
      icon: "✨",
      text: "Start growing your influence right away—no waiting required!",
    },
    {
      icon: "✨",
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    {
      icon: "✨",
      text: "Use a Personal AI Worker to boost your content",
    },
    {
      icon: "✨",
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div className="order-2 md:order-1 max-w-xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Want to Turn Social Media Into a
          </h2>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Profitable Career?
          </h2>
          <p className="text-xl sm:text-2xl font-medium mb-2 text-cyan-400">
            Discover your way to success
          </p>
          <p className="text-xl sm:text-2xl font-medium mb-2 text-cyan-400">
            with Fametonic:
          </p>

          <div className="space-y-6 mb-10">
            {valueProps.map((prop, index) => (
              <ValueProposition key={index} icon={prop.icon} text={prop.text} />
            ))}
          </div>

          <div>
            <button
              className="relative w-full sm:w-auto bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold py-4 px-8 rounded-md flex items-center justify-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">GET STARTED</span>
              <ArrowRight
                className={`relative z-10 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
                size={20}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-sm text-gray-400 mt-2">
              1-minute quiz for personalized insights
            </p>
          </div>

          <div className="mt-10 text-xs text-gray-500">
            <p>
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="mt-2">Fametonic 2025 All Rights Reserved</p>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="/banner.png"
            alt="Fametonic Banner"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
