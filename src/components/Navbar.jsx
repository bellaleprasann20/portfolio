import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";
import profilePic from "../assets/profilee.jpg"; 

const Navbar = () => {
  const [dark, setDark] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  // New state to handle the image popup
  const [isImageOpen, setIsImageOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            {/* Clickable Profile Pic */}
            <motion.div 
              onClick={() => setIsImageOpen(true)} // Opens the popup
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-10 h-10 rounded-full border-2 border-indigo-600 overflow-hidden cursor-pointer"
            >
              <img 
                src={profilePic} 
                alt="Prasann" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-indigo-600 cursor-pointer"
            >
              Prasann
            </motion.h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-indigo-600 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-indigo-500 transition-all"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <button 
              className="md:hidden text-gray-700 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
            >
              <ul className="flex flex-col p-6 gap-4 text-gray-700 dark:text-gray-200">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="block text-lg hover:text-indigo-600 font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* --- IMAGE OVERLAY / MODAL --- */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageOpen(false)} // Close when clicking background
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-sm w-full bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image card itself
            >
              <img 
                src={profilePic} 
                className="w-full rounded-2xl shadow-lg"
                alt="Prasann Full View"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold dark:text-white">Prasann</h3>
                <p className="text-indigo-600 font-medium">Full-Stack Developer</p>
                <button 
                  onClick={() => setIsImageOpen(false)}
                  className="mt-4 px-6 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;