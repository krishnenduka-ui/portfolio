import React from "react";
import {FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaGithub,FaLinkedin} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for opportunities as a Frontend or Full Stack
            MERN Developer. Feel free to reach out if you'd like to work
            together or discuss a project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">
                  krishnendu.ka@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhoneAlt className="text-3xl text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +91 8589812355
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">
                  Thrissur, Kerala, India
                </p>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex gap-5 pt-4">

              <a
                href="https://github.com/krishnenduka-ui"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-700 hover:text-purple-600"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/krishnenduka-developer"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-700 hover:text-purple-600"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form className="bg-white shadow-lg rounded-xl p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;