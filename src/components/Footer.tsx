import { FiGithub, FiLinkedin, FiTwitter, } from "react-icons/fi";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with Brain</span>
            <span>by Feri A.S © {currentYear}</span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="#"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <FaReact
              className="animate-spin text-gray-400 hover:text-primary duration-300 cursor-pointer"
              size={22}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
