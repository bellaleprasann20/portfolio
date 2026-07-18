import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket } from "lucide-react";

// Status is explicit per item so nothing reads as "current experience" before it actually starts.
const TIMELINE = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    org: "Guru Nanak First Grade College, Bidar",
    period: "2022 – 2025",
    status: "Completed",
    desc: "Built the foundation in computer science fundamentals, programming, and databases.",
    accent: "#06b6d4",
  },
  {
    icon: Code2,
    title: "MERN Stack Development Program",
    org: "ApnaCollege (Online)",
    period: "Sep 2025 – Mar 2026",
    status: "Completed",
    desc: "Structured, project-based training in React, Node.js, Express, and MongoDB — built and deployed four full-stack applications.",
    accent: "#6366f1",
  },
  {
    icon: Rocket,
    title: "Python Development Intern",
    org: "Labmentix",
    period: "Aug 2026 – Jan 2027",
    status: "Starting Aug 2026",
    desc: "Upcoming internship applying Python development skills on real project work.",
    accent: "#f59e0b",
  },
];

const Training = () => {
  return (
    <section
      id="journey"
      className="py-24 relative overflow-hidden"
      style={{ background: "#080c14" }}
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
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 inter">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#6366f1" }}>
            How I got here
          </p>
          <h2 className="syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Journey
          </h2>
        </motion.div>

        <div className="relative pl-8">
          {/* Vertical connecting line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.05))" }} />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#080c14", border: `2px solid ${item.accent}` }}>
                  <item.icon size={14} style={{ color: item.accent }} />
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="syne font-bold text-white text-base">{item.title}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        color: item.status === "Completed" ? "#22c55e" : item.accent,
                        background: item.status === "Completed" ? "#22c55e18" : `${item.accent}18`,
                      }}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs font-bold mb-3" style={{ color: item.accent }}>
                    {item.org} · {item.period}
                  </p>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;