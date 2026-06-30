import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import projectpic from "../assets/smart-rent-predictor.png";
import portfolio from "../assets/portfolio.png"


const Projects = () => {
  const projects = [
    {
      title: "Smart Rent Predictor",
      image: projectpic,
      description:
        "A full-stack MERN application that allows users to search, compare, and book rental properties with an intelligent rent prediction system. Includes role-based authentication, admin dashboard, and property management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
        "JWT",
      ],
      github: "https://github.com/krishnenduka-ui/smart-rent-predictor",
      live: "https://smart-rent-predictor-ecl8.vercel.app",
    },

    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "Personal portfolio built using React and Tailwind CSS showcasing projects, skills, resume, and contact information.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
      ],
      github: "https://github.com/krishnenduka-ui/portfolio",
      live: "https://portfolio-oloe.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Projects
          </p>

          <h2 className="text-4xl font-bold mt-2">
            My Recent Work
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-black"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-purple-600 text-purple-600 px-5 py-2 rounded-lg hover:bg-purple-600 hover:text-white"
                  >
                    <HiOutlineExternalLink />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;