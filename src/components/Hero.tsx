import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import useTypewriter from "../hooks/useTypewriter";
import { FaReact } from "react-icons/fa";

const Hero = () => {
  const typewriterText = useTypewriter(
    [
      "Full Stack Developer",
      "UI/UX Designer",
      "Problem Solver",
      "Tech Enthusiast",
      "Game Developer",
    ],
    80, 
    40, 
    2000, 
  );

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 ">
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Card Container */}
              <div className="bg-neutral-800/50 border border-primary/60 rounded-2xl p-6 backdrop-blur-sm max-w-sm">
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <img
                      src="../../../public/meee.jpg"
                      alt="Your Name"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <span className="bg-primary/50 text-white border border-primary/30 px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Available
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">
                    Feri Arya Saputra
                  </h1>
                  <p className="text-md gradient-text">He/Him</p>

                  {/* Quick Info */}
                  <div className="flex gap-3 pt-3">
                    <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                      🇮🇩 Indonesia Lombok NTB
                    </span>
                    <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                      2+ Years Exp
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-5 pt-5 border-t border-gray-800">
                  <a
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href="#"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <FiLinkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-2.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <FiMail size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-2.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <FaReact
                      className="animate-spin text-gray-400 hover:text-primary"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Description & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="space-y-6">
              {/* Greeting */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-primary font-medium mb-2"
                ></motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold"
                >
                  Hey Fellas
                  <br />
                  <span className="gradient-text">Howdy Friends</span>
                </motion.h2>
              </div>

              {/* Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 h-8"
              >
                <span>{typewriterText}</span>
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400 text-base md:text-lg leading-relaxed"
              >
                I'm a passionate full-stack developer specializing in building
                exceptional digital experiences. Currently focused on creating
                accessible, human-centered products with modern technologies.
              </motion.p>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span className="text-gray-300">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span className="text-gray-300">
                    Performance Optimization
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  <span className="text-gray-300">Problem Solving</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href="/resume.pdf"
                  download
                  className="group bg-primary hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <FiDownload className="group-hover:animate-bounce" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="group border-2 border-gray-700 hover:border-primary text-gray-300 hover:text-primary px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Let's Talk
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex gap-6 md:gap-8 pt-6 border-t border-gray-800"
              >
                <div>
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-gray-400 text-sm">Stress</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">30+</div>
                  <div className="text-gray-400 text-sm">Frustrated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-gray-400 text-sm">Years Exp</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
