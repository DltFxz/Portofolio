import { motion } from "framer-motion";
import {
  SiFigma,
  SiGit,
//   SiVscodium,
  SiGithub,
  SiVercel,
  SiLaragon,
  SiNetlify,
  SiXampp,
  SiAseprite,
  SiGodotengine,
  SiNotion,
  SiDiscord,
} from "react-icons/si";
import { FiTerminal } from "react-icons/fi";
import { VscVscodeInsiders } from "react-icons/vsc";


const Tools = () => {
  const toolCategories = [
    {
      title: "Code Editor & IDE",
      icon: "",
      tools: [
        { name: "VS Code", icon: VscVscodeInsiders },
        { name: "Terminal", icon: FiTerminal },
        { name: "Notion", icon: SiNotion },
      ],
    },
    {
      title: "Design & Prototype",
      icon: "",
      tools: [
        { name: "Figma", icon: SiFigma },
        { name: "Aseprite", icon: SiAseprite },
      ],
    },
    {
      title: "Version Control",
      icon: "",
      tools: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
      ],
    },
    {
      title: "Testing & API",
      icon: "",
      tools: [
        { name: "Laragon", icon: SiLaragon },
        { name: "XAMPP", icon: SiXampp },
      ],
    },
    {
      title: "Deployment",
      icon: "",
      tools: [
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
      ],
    },
    {
      title: "Game Dev",
      icon: "",
      tools: [
        { name: "Godot", icon: SiGodotengine },
        { name: "Discord", icon: SiDiscord },
      ],
    },
  ];

  return (
    <section id="tools">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Tools & Software
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Tools and software I use daily to build amazing projects
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="group bg-gray-800/20 border border-gray-800 hover:border-primary/30 rounded-2xl p-6 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Tools List */}
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + toolIndex * 0.05,
                    }}
                    className="flex items-center gap-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl px-4 py-3 transition-all hover:scale-[1.02]"
                  >
                    <tool.icon className="text-primary text-xl flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
