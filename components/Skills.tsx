"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Skills() {
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
        staggerChildren: 0.1,
        duration: 0.4,
      },
    },
  };

  const skills = [
    "React",
    "Git",
    "Next.js",
    "Node.js",
    "Github",
    "Html",
    "Css",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "Prisma",
    "Postman",
    "Vercel",
  ];

  return (
    <div className="rounded-t-[40px] border-y border-gray-500 py-20 px-5 mt-20 md:px-30 lg:px-60 space-y-10 flex flex-col justify-center items-center">
      <h2 className="text-white text-4xl font-semibold">Skills</h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpAnimation}
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill, index) => (
          <motion.span
            variants={fadeInUpAnimation}
            className="text-gray-300 text-sm bg-[#0c0b0b] py-8 px-8 rounded-md "
            key={index}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
