import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profilePic from "../assets/profilee.jpg";

// Route-based links (real pages) vs section links (only present on Home).
// Section links point to "/#id" so they work correctly from any page:
// if you're already on Home, the browser just scrolls; if you're on
// /projects or /contact, it navigates to Home first, then jumps to the section.
const navLinks = [
  { name: "Home",     href: "/",           type: "route"   },
  { name: "Skills",   href: "/#skills",    type: "section" },
  { name: "Journey",  href: "/#journey",   type: "section" },
  { name: "Projects", href: "/projects",   type: "route"   },
  { name: "Contact",  href: "/contact",    type: "route"   },
];

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [isImgOpen, setIsImgOpen] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (link, className, style, onClick) => {
    if (link.type === "route") {
      return (
        <Link to={link.href} className={className} style={style} onClick={onClick}>
          {link.name}
        </Link>
      );
    }
    // Section links: plain <a> so it works across route boundaries (triggers
    // a full navigation + hash scroll when not already on Home).
    return (
      <a href={link.href} className={className} style={style} onClick={onClick}>
        {link.name}
      </a>
    );
  };

  return (
    <>
      <style>{`
        .syne { font-family: 'Syne', sans-serif; }
        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.45);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1.5px;
          background: #6366f1;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,12,20,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              onClick={() => setIsImgOpen(true)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-9 h-9 rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
              style={{ border: "1.5px solid rgba(99,102,241,0.5)" }}
            >
              <img src={profilePic} alt="Prasann" className="w-full h-full object-cover" />
            </motion.div>

            <Link to="/" className="syne font-extrabold text-white text-xl" style={{ textDecoration: "none" }}>
              Prasann<span style={{ color: "#6366f1" }}>.</span>
            </Link>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.name}>
                {renderLink(link, "nav-link syne")}
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center syne text-xs font-bold px-4 py-2 rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                  textDecoration: "none",
                }}>
                Hire Me →
              </Link>
            </motion.div>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(8,12,20,0.97)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
              }}
            >
              <ul className="flex flex-col px-6 py-5 gap-4 list-none m-0 p-0 px-6 py-5">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {renderLink(
                      link,
                      "syne font-bold text-base block",
                      { color: "rgba(255,255,255,0.6)", textDecoration: "none" },
                      () => setIsOpen(false)
                    )}
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="syne inline-flex items-center font-bold text-sm px-5 py-2.5 rounded-xl text-white mt-1"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", textDecoration: "none" }}>
                    Hire Me →
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Profile image modal */}
      <AnimatePresence>
        {isImgOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImgOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-xs w-full rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#111827" }}
            >
              <img src={profilePic} className="w-full" alt="Prasann" />
              <div className="p-5 text-center">
                <p className="syne font-bold text-white text-lg">Prasann Bellale</p>
                <p className="text-sm mt-0.5" style={{ color: "#6366f1" }}>MERN Stack Developer</p>
                <button
                  onClick={() => setIsImgOpen(false)}
                  className="mt-4 px-5 py-2 rounded-xl text-xs syne font-bold"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
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