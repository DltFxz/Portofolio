import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiGit,
  SiTypescript,
  SiPython,
  SiMysql,
  SiPhp,
  SiGodotengine,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: SiReact },
    { name: "Vite", icon: SiVite },
    { name: "Git", icon: SiGit },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "TypeScript", icon: SiTypescript },
    { name: "NodeJs", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "MySQL", icon: SiMysql },
    { name: "PHP", icon: SiPhp },
    { name: "Godot", icon: SiGodotengine },
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Technologies I work with to build amazing projects
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group relative"
            >
              <div className="bg-gray-800/30 border border-gray-800 hover:border-primary/50 rounded-2xl p-8 text-center transition-all h-full cursor-pointer">
                {/* Icon */}
                <div className="mb-4 inline-flex">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-5 rounded-xl transition-all ">
                    <skill.icon className="text-secondary text-4xl group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-white font-semibold text-base group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
