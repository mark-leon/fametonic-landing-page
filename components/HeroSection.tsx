"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Urbanist } from "next/font/google";
import { Figtree } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <main className="flex-1 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="w-full lg:w-1/2  order-2 md:order-1">
          <h1
            className={`${urbanist.className} text-[25px] text-center md:text-left md:text-[35px] font-bold `}
          >
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2
            className={`${urbanist.className} text-[25px] text-center md:text-left md:text-[35px] font-bold text-cyan-400 [text-shadow:0px_4px_4px_#FC004E]`}
          >
            Discover your way to success with Fametonic:
          </h2>

          <ul className="space-y-4 my-6">
            <li className="flex items-start gap-3">
              <img src="/icon.png" alt="Icon" className="w-6 h-6" />
              <span
                className={`${figtree.className} text-base leading-[22px] align-middle`}
              >
                Start growing your influence right away—no waiting required!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/icon.png" alt="Icon" className="w-6 h-6" />
              <span
                className={`${figtree.className} text-base  leading-[22px] align-middle`}
              >
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/icon.png" alt="Icon" className="w-6 h-6" />
              <span
                className={`${figtree.className} text-base eading-[22px] align-middle`}
              >
                Use a Personal AI Worker to boost your content
              </span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/icon.png" alt="Icon" className="w-6 h-6" />
              <span
                className={`${figtree.className} text-base  leading-[22px] align-middle`}
              >
                Learn from expert-led courses designed for aspiring influencers
              </span>
            </li>
          </ul>

          <div className="pt-4">
            <Button
              className={`
                ${figtree.className}
                w-[320px] h-[40px]
                px-10 py-2
                gap-[10px]
                rounded-[10px]
                bg-[#FC004E]
                hover:bg-[#e0003f]
                text-white font-bold
                text-[20px]
                shadow-[2px_2px_10px_0px_#00E7F9]
                flex items-center justify-center
              `}
            >
              GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p
              className={`${figtree.className} text-[12px] text-gray-400 mt-2 ml-12 mb-8`}
            >
              1-minute quiz for personalized insights
            </p>
          </div>

          <div
            className={`${figtree.className}  hidden md:block text-xs font-medium text-gray-500 mt-4`}
          >
            <p>
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="mt-2">Fametonic © 2025 All Rights Reserved</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center order-1 md:order-2">
          <img
            src="/Influe_mobile.jpg"
            alt="Fametonic App Dashboard"
            width={666}
            height={679}
          />
        </div>
      </div>
    </main>
  );
}
