"use client";
import Image from "next/image";
import GlowButton from "./ui/glow-button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUpAnimation}
      className="rounded-y-[40px] border-y border-gray-500 py-20 px-5 mt-20 gap-10 md:px-15 lg:px-32 md:gap-5 flex flex-col md:flex-row justify-center items-center md:items-start"
    >
      {/* image section */}
      <motion.div
        variants={fadeInUpAnimation}
        className="flex justify-center items-center md:w-1/3"
      >
        <Image
          src="/amitkushh.jpg"
          alt="amitkushh"
          width={250}
          height={268}
          className="rounded-md"
        />
      </motion.div>

      {/* content section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <motion.h2
          variants={fadeInUpAnimation}
          className="text-white text-4xl font-semibold"
        >
          A Bit About Me
        </motion.h2>
        <div className="space-y-4 mt-4">
          <motion.p
            variants={fadeInUpAnimation}
            className="text-gray-300 text-base md:max-w-[700px] text-center md:text-start"
          >
            I&apos;m a full-stack developer who enjoys building and exploring
            new projects. I&apos;m especially passionate about creating AI-based
            solutions.
          </motion.p>
          <motion.p
            variants={fadeInUpAnimation}
            className="text-gray-300 text-base md:max-w-[700px] text-center md:text-start"
          >
            At the age of 15, I started working in the internet world. I first
            worked on YouTube Channel, then got into blogging but later stopped.
            Since June 2024, I&apos;ve been focused on coding.
          </motion.p>
        </div>
        <div className="mt-9">
          <a href="mailto:amitkush.dev@gmail.com">
            <GlowButton>Contact me</GlowButton>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
