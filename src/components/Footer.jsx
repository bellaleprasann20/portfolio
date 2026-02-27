import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { label: "GitHub",   icon: Github,   href: "https://github.com/bellaleprasann20",          color: "#ffffff" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/prasann-bellale",  color: "#0ea5e9" },
    { label: "Email",    icon: Mail,     href: "mailto:prasannbellale@gmail.com",              color: "#6366f1" },
  ];

  const navLinks = [
    { label: "Home",     href: "#home"     },
    { label: "Skills",   href: "#skills"   },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact"  },
  ];

  return (
    <footer style={{ background: "#06080f", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <style>{`
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        .glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-12 inter">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Left — name + tagline */}
          <div className="text-center sm:text-left">
            <p className="syne font-extrabold text-white text-lg">Prasann</p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
              MERN Stack Developer · Pune, India
            </p>
          </div>

          {/* Center — nav */}
          <nav className="flex gap-5 flex-wrap justify-center">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                className="syne text-xs font-bold uppercase tracking-widest transition-colors"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#6366f1"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, icon: Icon, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={e => e.currentTarget.style.color = color}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs syne" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {currentYear} Prasann Bellale. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>
            Built with React · Tailwind · Framer Motion
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="glass rounded-xl px-3 py-2 flex items-center gap-1.5 text-xs syne font-bold"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={e => e.currentTarget.style.color = "#6366f1"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}>
            <ArrowUp size={12} /> Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;