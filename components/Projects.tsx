"use client";
import { ExternalLink } from "lucide-react";
import Github from "@/icons/Github";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import ChaiCodeImg from "../public/chaicode.jpg";
import PortfolioImg from "../public/portfolio.png";

function Projects() {
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
        duration: 1,
      },
    },
  };

  const frontend = [
    {
      img: ChaiCodeImg,
      title: "Chai Page",
      description:
        "Landing Page Design in Next js. This is Simple and Clean design",
      previewLink: "https://chai-code-landing-lac.vercel.app/",
      githubLink: "/",
    },
    {
      img: PortfolioImg,
      title: "Portfolio",
      description:
        "The portfolio you are on right now is a simple and clean portfolio. I created it for myself.",
      previewLink: "https://portfolio-x2.vercel.app/",
      githubLink: "https://github.com/amitkushh/Portfolio",
    },
  ];

  const fullstack = [
    {
      title: "Wait working on project",
      description: "Wait working on project. This is Simple and Clean design",
      previewLink: "/",
      githubLink: "/",
    },
  ];

  return (
    <div className="rounded-t-[40px] border-y border-gray-500 py-20 mt-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpAnimation}
        className="px-5 md:px-30 lg:px-0 mx-0 lg:mx-20 space-y-2 flex flex-col items-center"
      >
        <div>
          <motion.h2
            variants={fadeInUpAnimation}
            className="text-white text-4xl font-semibold"
          >
            Projects
          </motion.h2>
        </div>
        <div>
          <motion.h3
            variants={fadeInUpAnimation}
            className="text-white text-2xl font-semibold mb-10"
          >
            Frontend Projects
          </motion.h3>
        </div>
        {/* Cards */}
        {/* Frontend */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUpAnimation}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {frontend.map((project, index) => (
            <motion.div
              variants={fadeInUpAnimation}
              className="border border-gray-800 rounded-md lg:h-[400px] lg:w-[281px] bg-[#0c0b0b] py-3 px-3 space-y-4"
              key={index}
            >
              <div>
                <Image
                  src={project.img!}
                  alt="chaicode"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-gray-300 text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex gap-2 items-center text-white">
                <a href={project.githubLink} target="_blank">
                  <Github />
                </a>
                <a href={project.previewLink} target="_blank">
                  <ExternalLink height={25} width={25} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-15">
          <motion.h3
            variants={fadeInUpAnimation}
            className="text-white text-2xl font-semibold mb-10"
          >
            Full Stack Projects
          </motion.h3>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUpAnimation}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {fullstack.map((project, index) => (
            <motion.div
              variants={fadeInUpAnimation}
              className="border border-gray-800 rounded-md lg:h-[229px] lg:w-[281px] bg-[#0c0b0b] py-9 px-5 space-y-4"
              key={index}
            >
              <h3 className="text-gray-300 text-xl font-bold">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex gap-2 items-center text-white">
                <a href={project.githubLink} target="_blank">
                  <Github />
                </a>
                <a href={project.previewLink} target="_blank">
                  <ExternalLink height={25} width={25} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
