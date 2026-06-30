import { Download, Mail, ArrowRight } from "lucide-react";
import profile from '../assets/profile.png'
const Hero = () => {
  return (
    <section id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-white via-purple-50 to-purple-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-purple-600 font-semibold text-lg mb-3">
            Hi, I'm
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Krishnendu K A
          </h1>

          <h2 className="text-2xl font-semibold text-purple-600 mt-4">
            Full Stack MERN Developer
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            I build responsive, scalable, and user-friendly web applications
            using <span className="font-semibold">MongoDB</span>,
            <span className="font-semibold"> Express.js</span>,
            <span className="font-semibold"> React.js</span>, and
            <span className="font-semibold"> Node.js</span>. Passionate about
            creating modern web experiences with clean code, secure APIs, and
            user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/Krishnendu_Resume.pdf"
              download
              className="flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition"
            >
              <Download size={18} />
              Resume
            </a>

            

          </div>
        </div>

        {/* Right Image */}

        <div className="flex justify-center">
          <div className="bg-white shadow-2xl rounded-3xl p-4">
            <img
              src={profile}
              alt="Krishnendu"
              className="w-80 lg:w-96 rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;