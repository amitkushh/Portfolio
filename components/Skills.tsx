"use client";

function Skills() {
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
    <div className="rounded-t-[40px] border-y border-gray-700 py-20 px-5 mt-20 md:px-60 space-y-10 flex flex-col justify-center items-center">
      <h2 className="text-white text-4xl font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            className="text-gray-300 text-sm bg-[#0c0b0b] py-8 px-8 rounded-md "
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
