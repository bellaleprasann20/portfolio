import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";

const projects = [
  {
    num: "01",
    title: "Atharv Preschool Management System",
    image: p3,
    desc: "Full-stack preschool management system with admin dashboard, parent portal, Razorpay fee payments, PDF receipt generation, and automated email/SMS notifications.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/bellaleprasann20/ATHARV-PRESCHOOL",
    live: "https://atharv-preschool.vercel.app",
    accent: "#6366f1",
    featured: true,
  },
  {
    num: "02",
    title: "Chat App",
    image: p4,
    desc: "Real-time messaging platform with user authentication, instant group chats, and a fully responsive interface for mobile and desktop.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    // NOTE: verify this matches your actual repo name/casing on GitHub before publishing —
    // update if the repo is named differently.
    github: "https://github.com/bellaleprasann20/Chat-App",
    live: "https://chat-app-eight-sand-86.vercel.app",
    accent: "#06b6d4",
    featured: false,
  },
  {
    num: "03",
    title: "Food Ordering App",
    image: p2,
    desc: "Full-stack food ordering application with cart management, restaurant listings, and payment integration.",
    tech: ["React", "Express.js", "Node.js", "MongoDB"],
    // NOTE: verify this matches your actual repo name/casing on GitHub before publishing.
    github: "https://github.com/bellaleprasann20/Food-hub",
    live: "https://food-hub-seven-rho.vercel.app/",
    accent: "#f59e0b",
    featured: false,
  },
  {
    num: "04",
    title: "Portfolio Website",
    image: p1,
    desc: "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    // NOTE: point this at the actual portfolio repo once you know its name.
    github: "https://github.com/bellaleprasann20",
    live: "#home",
    accent: "#8b5cf6",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{ background: "#06080f" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .project-img { transition: transform 0.6s cubic-bezier(.22,1,.36,1); }
        .project-card:hover .project-img { transform: scale(1.06); }
        .tag { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); }
      `}</style>

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 inter">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#6366f1" }}>
            What I've built
          </p>
          <h2 className="syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Featured Projects
          </h2>
          <p className="mt-3 text-sm max-w-md"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
            A selection of real-world applications I've designed, built, and deployed.
          </p>
        </motion.div>

        {/* Featured project — full width */}
        {projects.filter(p => p.featured).map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="project-card glass rounded-3xl overflow-hidden mb-6 group"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video md:aspect-auto min-h-[220px]"
                style={{ background: "#0d1117" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-img w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="syne text-[10px] font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}44` }}>
                    ⭐ Featured Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="syne font-bold text-4xl mb-1" style={{ color: `${p.accent}33` }}>{p.num}</p>
                  <h3 className="syne font-bold text-xl text-white mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(tag => (
                      <span key={tag} className="tag text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="syne flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)`,
                      boxShadow: `0 4px 20px ${p.accent}40`,
                    }}>
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="syne flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold glass transition-all hover:-translate-y-0.5"
                    style={{ color: "rgba(255,255,255,0.6)" }}>
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="project-card glass rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video"
                style={{ background: "#0d1117" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-img w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(6,8,15,0.8) 0%, transparent 60%)" }} />
                <span className="absolute bottom-3 left-3 syne text-xs font-bold"
                  style={{ color: p.accent }}>{p.num}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="syne font-bold text-white text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs leading-relaxed mb-4 flex-grow"
                  style={{ color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 3).map(tag => (
                    <span key={tag} className="tag text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ color: "rgba(255,255,255,0.4)" }}>
                      {tag}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-md"
                      style={{ color: "rgba(255,255,255,0.25)" }}>
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a href={p.live}
                    target={p.title === "Portfolio Website" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="syne text-xs font-bold flex items-center gap-1 transition-colors hover:opacity-80"
                    style={{ color: p.accent }}>
                    <ExternalLink size={11} /> Live
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="syne text-xs font-bold flex items-center gap-1 transition-colors"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                    <Github size={11} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View more card */}
          <motion.a
            href="https://github.com/bellaleprasann20"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[200px] transition-all"
            style={{ borderColor: "rgba(99,102,241,0.2)" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)"}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
              <Github size={24} style={{ color: "#6366f1" }} />
            </div>
            <h3 className="syne font-bold text-white text-base mb-2">View More</h3>
            <p className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
              More repos & open-source work on GitHub
            </p>
            <span className="syne inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full"
              style={{ background: "rgba(99,102,241,0.15)", color: "#6366f1", border: "1px solid rgba(99,102,241,0.25)" }}>
              Go to GitHub <ArrowRight size={12} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;