"use client";
import Email from "@/icons/Email";
import X from "@/icons/X";
import Handshake from "@/icons/HandShake";
import GlowButton from "./ui/glow-button";

function Social() {
  return (
    <div className="mt-20 rounded-t-[40px] bg-[#0c0b0b] border-t border-gray-700 px-5 md:px-60 py-20 flex flex-col justify-center items-center gap-4">
      <div className="rounded-full border border-gray-500 p-4">
        <Handshake size={40} />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <h2 className="text-white text-4xl font-semibold">
          Tell me about your next project
        </h2>
        <span className="text-gray-400 text-xl">
          Freelance, full-time or Internship
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a href="mailto:amitkush.dev@gmail.com">
          <GlowButton>
            <Email />
          </GlowButton>
        </a>
        <a href="https://x.com/amitkushh">
          <GlowButton>
            <X />
          </GlowButton>
        </a>
      </div>
    </div>
  );
}

export default Social;
