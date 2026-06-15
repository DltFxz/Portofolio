import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiGlobe,
} from "react-icons/fi";
import { SiSpotify, SiTiktok } from "react-icons/si";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "#",
      color: "hover:bg-gray-700/20",
      username: "@YKWIM",
      description: "Open source projects & code",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "#",
      color: "hover:bg-blue-700/50",
      username: "@soon",
      description: "Professional profile & network",
    },
    {
      name: "Instagram",
      icon: FiInstagram,
      url: "https://instagram.com/faszlx",
      color: "hover:bg-purple-700/50",
      username: "@Faszlx",
      description: "Daily life & behind the scenes",
    },
    {
      name: "Spotify",
      icon: SiSpotify,
      url: "https://open.spotify.com/user/31mu44rs7yxuh23twiuhaekdzkum?si=d1d3ad711db74366",
      color: "hover:bg-green-700/50",
      username: "@Feri Anderskor;",
      description: "Listen My Music Playlist",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      url: "https://tiktok.com/@radeltafxzzz",
      color: "hover:bg-black",
      username: "@Fery",
      description: "Tech tips & tutorials",
    },
    {
      name: "YouTube",
      icon: FiYoutube,
      url: "#",
      color: "hover:bg-red-700/50",
      username: "@soon",
      description: "Coding tutorials & projects",
    },
  ];

  return (
    <section id="social">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title gradient-text">Connect With Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and build something amazing together! Find me on these
            platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              // target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group bg-gray-800/30 border border-gray-800 hover:border-primary/30 rounded-xl p-6 transition-all ${social.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg transition-all">
                  <social.icon className="text-primary text-2xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1">
                    {social.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2">
                    {social.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-xs">
                    <FiGlobe size={12} />
                    <span className="truncate">{social.username}</span>
                  </div>
                </div>
                <div className="text-gray-600 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                  →
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Or reach me directly via email</p>
          <a
            href="mailto:dltfxz@gmail.com"
            className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-6 py-3 rounded-xl hover:bg-primary/20 transition-all"
          >
            <FiGlobe size={18} />
            dltfxz@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
