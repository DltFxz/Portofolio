import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

const About = () => {
  const highlights = [
    {
      icon: FiCode,
      title: "Frontend",
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      icon: FiServer,
      title: "Backend",
      description: "Python, PHP, Node.js",
    },
    {
      icon: FiDatabase,
      title: "Database",
      description: "MySQL, SQLite",
    },
    {
      icon: IoGameControllerOutline,
      title: "Game Dev",
      description: "Godot Engine",
    },
  ];

  return (
    <section id="about">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate developer who loves building things
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Turning ideas into{" "}
              <span className="gradient-text">real products</span>
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm a passionate web developer who enjoys creating
                beautiful and functional web applications. I started my journey
                with HTML & CSS and have since expanded into full-stack
                development.
              </p>
              <p>
                Currently, I focus on building modern web applications using
                React, TypeScript, and Tailwind CSS. I also have experience with
                backend development using Python and PHP.
              </p>
              <p>
                When I'm not coding, you'll find me exploring game development
                with Godot Engine or learning new technologies to expand my
                skillset.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "5+" },
                { label: "Experience", value: "2+ yrs" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-800 hover:border-primary/30 transition-all"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gray-800/20 border border-gray-800 hover:border-primary/30 rounded-xl p-5 transition-all"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
