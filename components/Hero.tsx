"use client";
import GlowButton from "@/components/ui/glow-button";

function Hero() {
  return (
    <div className="rounded-b-[40px] border-b border-gray-700 px-5 flex flex-col justify-center items-center py-20 text-center md:px-32">
      
      <h1 className="text-6xl font-bold text-white">Amit Kushwaha</h1>
      <span className="text-gray-300 text-sm">[ build ⇒ build ⇒ build ]</span>
      <div className="space-y-4 mt-4">
        <p className="text-gray-300 text-[18px] md:max-w-[700px]">
          I&apos;m a Full-stack developer who enjoys building and exploring new
          projects. I&apos;m especially passionate about creating AI-based
          solutions.
        </p>
      </div>
      <div className="mt-10">
        <GlowButton>Make your ideas happen</GlowButton>
      </div>
    </div>
  );
}

export default Hero;
