"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function QuoteSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="px-5 mt-20 flex flex-col justify-center items-center md:px-30 lg:px-60">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpAnimation}
        
      >
        <motion.h3
          variants={fadeInUpAnimation}
          className="text-4xl font-bold text-gray-300 text-center md:max-w-[850px]"
        >
          Let&apos;s build something worth more than just a commit history.
        </motion.h3>
      </motion.div>
    </div>
  );
}

export default QuoteSection;
