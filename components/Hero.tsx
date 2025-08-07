"use client";
import GlowButton from "@/components/ui/glow-button";
import { motion } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUpAnimation}
      className="rounded-b-[40px] border-b border-gray-500 px-7 flex flex-col justify-center items-center py-20 text-center md:px-32"
    >
      <motion.h1
        variants={fadeInUpAnimation}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        Amit Kushwaha
      </motion.h1>
      <motion.span
        variants={fadeInUpAnimation}
        className="text-gray-300 text-sm"
      >
        [ build ⇒ build ⇒ build ]
      </motion.span>
      <div className="space-y-4 mt-4">
        <motion.p
          variants={fadeInUpAnimation}
          className="text-gray-300 text-base md:text-[18px] md:max-w-[700px]"
        >
          I&apos;m a Full-stack developer who enjoys building and exploring new
          projects. I&apos;m especially passionate about creating AI-based
          solutions.
        </motion.p>
      </div>
      <div className="mt-10">
        <a href="mailto:amitkush.dev@gmail.com">
          <GlowButton>Make your ideas happen</GlowButton>
        </a>
      </div>
    </motion.div>
  );
}

export default Hero;
