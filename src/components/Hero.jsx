import { motion } from "framer-motion";
// IMPORTANT: replace src/assets/Prasann_resume.pdf with your newly updated resume
// (export the docx we built as PDF, keep this exact filename, or update the path below).
import resume from "../assets/Prasann_resume.pdf";
import profilePic from "../assets/profileee.jpeg";
import { Github, Linkedin, Mail, ArrowDown, Eye, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // NOTE: adjust these to your real, verifiable numbers.
  // "4+ Projects" matches what's actually shown in the Projects section below —
  // update if your real deployed-project count differs.
  const stats = [
    { value: "20+", label: "Projects" },
    { value: "2025", label: "BCA Graduate" },
    { value: "10+", label: "Tech Stack" },
  ];

  const socials = [
    { icon: Github,   href: "https://github.com/bellaleprasann20",          label: "GitHub"   },
    { icon: Linkedin, href: "https://linkedin.com/in/prasann-bellale",       label: "LinkedIn" },
    { icon: Mail,     href: "mailto:bellaleprasann20@gmail.com",             label: "Email"    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "#080c14" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        @keyframes grid-move { from{transform:translateY(0)} to{transform:translateY(40px)} }
        @keyframes glow-pulse { 0%,100%{opacity:0.4} 50%{opacity:0.7} }
        .grid-bg { animation: grid-move 8s linear infinite; }
        .glow { animation: glow-pulse 4s ease infinite; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float { animation: float 6s ease-in-out infinite; }
        @keyframes shimmer { from{background-position:0% 50%} to{background-position:100% 50%} }
        .shimmer-text {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #6366f1);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .img-ring::before {
          content:'';
          position:absolute;
          inset:-3px;
          border-radius:inherit;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
          z-index:-1;
        }
      `}</style>

      {/* ── Animated grid background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="grid-bg absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }} />
        {/* Glow orbs */}
        <div className="glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)" }} />
        <div className="glow absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)", animationDelay:"2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center py-20 relative z-10">

        {/* ── LEFT ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="inter"
        >
          {/* Available badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.6)" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ boxShadow: "0 0 8px #34d399", animation: "glow-pulse 2s infinite" }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <p className="syne text-sm font-600 tracking-[0.3em] uppercase mb-2"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              Full Stack Developer
            </p>
            <h1 className="syne font-extrabold leading-none mb-2"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#fff" }}>
              Hi, I'm
            </h1>
            <h1 className="syne font-extrabold leading-none shimmer-text"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
              Prasann
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants}
            className="mt-6 text-base leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
            MERN stack developer who builds{" "}
            <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              production-ready web apps
            </span>{" "}
            — from real-time chat systems to full preschool management platforms with payment integration.
            Currently expanding into Python and applied AI development, and starting a Python
            development internship at Labmentix.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-8 flex gap-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="syne font-bold text-2xl text-white">{value}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={resume}
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="syne font-bold px-7 py-3.5 rounded-xl text-sm text-white"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
              }}>
              Download Resume ↓
            </motion.a>

            <motion.button
              onClick={() => setIsResumeOpen(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="syne font-bold px-7 py-3.5 rounded-xl text-sm glass flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.8)" }}>
              <Eye size={15} /> Preview Resume
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="syne font-bold px-7 py-3.5 rounded-xl text-sm glass"
              style={{ color: "rgba(255,255,255,0.8)" }}>
              Contact Me →
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
            <span className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}>Find me on</span>
            <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.1)" }} />
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center transition-colors"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#6366f1"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-center items-center relative"
        >
          {/* Decorative ring */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-indigo-500/10"
            style={{ animation: "float 8s ease-in-out infinite" }} />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-indigo-500/20"
            style={{ animation: "float 6s ease-in-out infinite reverse" }} />

          {/* Floating tag — top left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute left-0 top-8 glass rounded-2xl px-4 py-3 z-20"
            style={{ animation: "float 5s ease-in-out infinite" }}>
            <p className="text-white text-xs font-bold syne">⚡ MERN Stack</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Full Stack Dev</p>
          </motion.div>

          {/* Floating tag — bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute right-0 bottom-8 glass rounded-2xl px-4 py-3 z-20"
            style={{ animation: "float 7s ease-in-out infinite 1s" }}>
            <p className="text-white text-xs font-bold syne">🚀 Open to Work</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Karnataka, India</p>
          </motion.div>

          {/* Photo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 img-ring rounded-3xl overflow-hidden"
            style={{
              width: 300,
              height: 360,
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2)",
            }}>
            <img
              src={profilePic}
              alt="Prasann - MERN Stack Developer"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24"
              style={{ background: "linear-gradient(to top, rgba(8,12,20,0.6), transparent)" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.2)" }}>
        <span className="text-[10px] tracking-[0.2em] uppercase inter">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
      {/* Resume preview modal */}
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsResumeOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#111827", height: "85vh" }}
          >
            <div className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="syne font-bold text-white text-sm">Resume Preview</p>
              <div className="flex items-center gap-2">
                <a
                  href={resume}
                  download
                  className="syne text-xs font-bold px-3 py-1.5 rounded-lg text-white"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                  Download ↓
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  aria-label="Close preview"
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }}>
                  <X size={16} />
                </button>
              </div>
            </div>
            <iframe
              src={resume}
              title="Prasann Bellale Resume"
              className="w-full flex-grow"
              style={{ border: "none", background: "#fff" }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;