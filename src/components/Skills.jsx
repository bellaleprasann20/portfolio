import { motion } from "framer-motion";

const SKILLS = [
  // Frontend
  { name: "HTML5",       category: "Frontend",  level: 95, color: "#e34f26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",        category: "Frontend",  level: 90, color: "#1572b6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  category: "Frontend",  level: 78, color: "#f7df1e", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",       category: "Frontend",  level: 80, color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS",category: "Frontend",  level: 82, color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  // Backend
  { name: "Node.js",     category: "Backend",   level: 75, color: "#68a063", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js",  category: "Backend",   level: 75, color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB",     category: "Backend",   level: 72, color: "#47a248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "REST APIs",   category: "Backend",   level: 78, color: "#ff6b35", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  // Tools
  { name: "Git",         category: "Tools",     level: 80, color: "#f05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      category: "Tools",     level: 82, color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code",     category: "Tools",     level: 90, color: "#007acc", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Tools"];

const getLevelLabel = (level) => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  return "Intermediate";
};

const getLevelColor = (level) => {
  if (level >= 90) return "#22c55e";
  if (level >= 75) return "#6366f1";
  return "#f59e0b";
};

import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: "#080c14" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        .skill-card:hover .skill-bar-fill { opacity: 1 !important; }
        @keyframes bar-grow { from{width:0} to{width:var(--target-width)} }
        .bar-anim { animation: bar-grow 1s cubic-bezier(.22,1,.36,1) forwards; }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
        }
      `}</style>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 inter">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#6366f1" }}>
            What I work with
          </p>
          <h2 className="syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Technical Skills
          </h2>
          <p className="mt-3 text-sm max-w-md"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
            Technologies I use to build production-grade full-stack applications.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-xs font-bold syne transition-all"
              style={{
                background: activeCategory === cat
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "rgba(255,255,255,0.05)",
                color: activeCategory === cat
                  ? "#fff"
                  : "rgba(255,255,255,0.4)",
                border: activeCategory === cat
                  ? "none"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: activeCategory === cat
                  ? "0 4px 20px rgba(99,102,241,0.3)"
                  : "none",
              }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="skill-card glass rounded-2xl p-5 cursor-default group transition-all"
              style={{ "--target-width": `${skill.level}%` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Name + level badge */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="syne font-bold text-sm text-white truncate">{skill.name}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        color: getLevelColor(skill.level),
                        background: `${getLevelColor(skill.level)}18`,
                      }}>
                      {getLevelLabel(skill.level)}
                    </span>
                  </div>
                  <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {skill.category}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>Proficiency</span>
                  <span className="text-[10px] font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.06 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                      boxShadow: `0 0 8px ${skill.color}60`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            Always learning · Currently exploring TypeScript & Next.js
          </p>
          <a
            href="https://github.com/bellaleprasann20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-bold syne transition-all hover:border-indigo-500/40"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View all my projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;