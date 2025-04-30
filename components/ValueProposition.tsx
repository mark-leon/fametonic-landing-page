import React from "react";

interface ValuePropositionProps {
  icon: string;
  text: string;
}

export default function ValueProposition({
  icon,
  text,
}: ValuePropositionProps) {
  return (
    <div className="flex">
      <div className="mt-1 w-5 h-5 flex items-center justify-center text-yellow-400">
        {icon}
      </div>
      <p className="text-white/90 text-lg ml-2">{text}</p>
    </div>
  );
}
