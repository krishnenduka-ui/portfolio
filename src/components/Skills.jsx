import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiVite,
  SiAxios,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-700" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Technical Skills
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skill Cards */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;