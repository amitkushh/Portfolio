"use client";
import Image from "next/image";
import GlowButton from "./ui/glow-button";

function About() {
  return (
    <div className="rounded-y-[40px] border-y border-gray-700 py-20 px-5 mt-20 gap-10 md:px-32 md:gap-5 flex flex-col md:flex-row justify-center items-center md:items-start">
      {/* image section */}
      <div className="flex justify-center items-center md:w-1/3">
        <Image
          src="/amitkushh.jpg"
          alt="amitkushh"
          width={250}
          height={268}
          className="rounded-md"
        />
      </div>

      {/* content section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h2 className="text-white text-4xl font-semibold">A Bit About Me</h2>
        <div className="space-y-4 mt-4">
          <p className="text-gray-300 text-base md:max-w-[700px] text-center md:text-start">
            I&apos;m a full-stack developer who enjoys building and exploring
            new projects. I&apos;m especially passionate about creating AI-based
            solutions.
          </p>
          <p className="text-gray-300 text-base md:max-w-[700px] text-center md:text-start">
            At the age of 15, I started working in the internet world. I first
            worked on YouTube Channel, then got into blogging but later stopped.
            Since June 2024, I've been focused on coding.
          </p>
        </div>
        <div className="mt-9">
          <GlowButton>Contact me</GlowButton>
        </div>
      </div>
    </div>
  );
}

export default About;
