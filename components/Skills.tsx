"use client";

function Skills() {
  const skills = [
    "Html",
    "Tailwind CSS",
    "JavaScript",
    "css",
    "TypeScript",
    "React",
    "Next.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Prisma",
    "Postman",
    "Git",
    "Vercel",
    "Github",
  ];

  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-white text-xl">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            className="text-gray-300 text-sm border bg-[#1e2a3a] py-1 px-3 rounded-md border-gray-400"
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
