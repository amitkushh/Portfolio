"use client";
import { ExternalLink } from "lucide-react";
import Github from "@/icons/Github";

function Projects() {
  const frontend = [
    {
      title: "Chai Page",
      description:
        "Landing Page Design in Next js. This is Simple and Clean design",
      previewLink: "https://chai-code-landing-lac.vercel.app/",
      githubLink: "/",
    },
  ];

  const fullstack = [
    {
      title: "Wait working on project",
      description: "Wait working on project. This is Simple and Clean design",
      previewLink: "https://chai-code-landing-lac.vercel.app/",
      githubLink: "/",
    },
  ];

  return (
    <div className="rounded-t-[40px] border-y border-gray-700 py-20 mt-20 px-5 md:px-60 space-y-2 flex flex-col items-center">
      <div>
        <h2 className="text-white text-4xl font-semibold">Projects</h2>
      </div>
      <div>
        <h3 className="text-white text-2xl font-semibold mb-10">
          Frontend Projects
        </h3>
      </div>
      {/* Cards */}
      {/* Frontend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {frontend.map((project, index) => (
          <div
            className="rounded-md bg-[#0c0b0b] py-9 px-5 border-gray-700 border space-y-4"
            key={index}
          >
            <h3 className="text-white text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex gap-2 items-center text-white">
              <a href={project.githubLink} target="_blank">
                <Github />
              </a>
              <a href={project.previewLink} target="_blank">
                <ExternalLink height={25} width={25} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-15">
        <h3 className="text-white text-2xl font-semibold mb-10">
          Full Stack Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {fullstack.map((project, index) => (
          <div
            className="rounded-md bg-[#0c0b0b] py-9 px-5 border-gray-700 border space-y-4"
            key={index}
          >
            <h3 className="text-white text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex gap-2 items-center text-white">
              <a href={project.githubLink} target="_blank">
                <Github />
              </a>
              <a href={project.previewLink} target="_blank">
                <ExternalLink height={25} width={25} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
