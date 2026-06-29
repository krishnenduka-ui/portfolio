import React from "react";
import { FaUserGraduate, FaMapMarkerAlt, FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsDownload } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get To Know Me
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Full Stack MERN Developer
            </h3>

            <p className="text-gray-600 leading-8 mb-5">
              I'm <span className="font-semibold">Krishnendu K A</span>, a
              passionate Full Stack MERN Developer with hands-on experience
              building responsive and scalable web applications using
              <span className="font-semibold">
                {" "}
                MongoDB, Express.js, React.js, and Node.js
              </span>.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              I enjoy creating modern web applications with clean,
              maintainable code. My experience includes developing secure REST
              APIs, implementing JWT authentication, integrating MongoDB,
              managing application state with Redux Toolkit, and designing
              responsive user interfaces.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              My goal is to build impactful software solutions while
              continuously learning new technologies and contributing to
              innovative development teams.
            </p>

            <a
              href="/Krishnendu_Resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              <BsDownload />
              Download Resume
            </a>

          </div>

          {/* Right Cards */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaLaptopCode className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">Role</h4>
              <p className="text-gray-600 mt-2">
                Full Stack MERN Developer
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
                <FaUserGraduate className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">Education</h4>
              <p className="text-gray-600 mt-2">
                Bachelor of Computer Science and Engineering
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <MdWork className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">Experience</h4>
              <p className="text-gray-600 mt-2">
                PHP Developer
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <FaMapMarkerAlt className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-lg">Location</h4>
              <p className="text-gray-600 mt-2">
                Thrissur, Kerala, India
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;