"use client";
import Email from "@/icons/Email";
import X from "@/icons/X";
import Handshake from "@/icons/HandShake";
import GlowButton from "./ui/glow-button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Social() {
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
      className="mt-20 rounded-t-[40px] bg-[#0c0b0b] border-t border-gray-700 px-5 md:px-30 lg:px-60 py-20 flex flex-col justify-center items-center gap-4"
    >
      <motion.div
        variants={fadeInUpAnimation}
        className="rounded-full border border-gray-500 p-4"
      >
        <Handshake size={40} />
      </motion.div>
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <motion.h2
          variants={fadeInUpAnimation}
          className="text-white text-4xl font-semibold"
        >
          Tell me about your next project
        </motion.h2>
        <motion.span
          variants={fadeInUpAnimation}
          className="text-gray-400 text-xl"
        >
          Freelance, full-time or Internship
        </motion.span>
      </div>
      <motion.div
        variants={fadeInUpAnimation}
        className="flex items-center gap-3"
      >
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
      </motion.div>
    </motion.div>
  );
}

export default Social;
