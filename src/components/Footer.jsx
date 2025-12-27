import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/bellaleprasann20", icon: <FaGithub /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/prasann-bellale", icon: <FaLinkedin /> },
    { name: "Email", href: "prasannbellale@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Social Links with Tooltips */}
        <div className="flex space-x-8 mb-8">
          {socialLinks.map((social) => (
            <div key={social.name} className="relative group flex flex-col items-center">
              {/* Tooltip */}
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: -40 }}
                transition={{ duration: 0.2 }}
                className="absolute pointer-events-none bg-indigo-600 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100"
              >
                {social.name}
              </motion.span>

              {/* Icon */}
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#fff" }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
              </motion.a>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-center">
          <p>© {currentYear} <span className="text-indigo-400 font-medium">Prasann</span>. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 flex gap-6 text-xs uppercase tracking-widest font-semibold">
          <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>
        
      </div>
    </footer>
  );
};

export default Footer;