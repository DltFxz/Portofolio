import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  gradient: string;
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack e-commerce platform with cart system, payment gateway integration, and admin dashboard for managing products.",
      technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern personal portfolio with smooth animations, responsive design, and interactive UI components.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-demo.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "2D Platformer Game",
      description:
        "A fun 2D platformer game built with Godot Engine featuring custom mechanics, pixel art graphics, and multiple levels.",
      technologies: ["Godot", "GDScript", "Aseprite"],
      github: "https://github.com/yourusername/game",
      live: "https://game-demo.com",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "CRUD Application",
      description:
        "Simple yet powerful CRUD application with authentication system, database integration, and clean responsive design.",
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/yourusername/crud-app",
      live: "https://crud-demo.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          My Projects
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${projects[currentIndex].gradient} opacity-10 rounded-2xl`}
              />

              <div className="relative bg-primary/10 border border-gray-800 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Project Info */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-primary text-sm font-mono">
                        Project {currentIndex + 1} of {projects.length}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mt-2">
                        {projects[currentIndex].title}
                      </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentIndex].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-all"
                      >
                        <FiGithub size={18} />
                        Code
                      </a>
                      <a
                        href={projects[currentIndex].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-xl transition-all"
                      >
                        <FiExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Right - Preview */}
                  <div className="relative">
                    <div
                      className={`w-full aspect-video rounded-xl bg-gradient-to-br ${projects[currentIndex].gradient} flex items-center justify-center`}
                    >
                      <div className="text-center text-white/80">
                        <span className="text-4xl font-bold">
                          {projects[currentIndex].title.charAt(0)}
                        </span>
                        <p className="text-sm mt-2">Preview</p>
                      </div>
                    </div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-4 bg-gradient-to-r ${projects[currentIndex].gradient} rounded-2xl opacity-20 blur-xl -z-10`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 p-3 rounded-full text-white transition-all z-10"
          >
            <FiArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 p-3 rounded-full text-white transition-all z-10"
          >
            <FiArrowRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-700 w-2 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
