import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "MERN Stack Development",
    issuer: "ApnaCollege",
    period: "2025 – 2026",
    desc: "Structured program covering MongoDB, Express.js, React, Node.js, REST APIs, authentication, and cloud deployment.",
    accent: "#6366f1",
  },
  {
    title: "Tata Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    period: "2025",
    desc: "Simulated real-world cybersecurity analyst tasks as part of Tata's virtual job simulation program.",
    accent: "#06b6d4",
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    period: "2025",
    desc: "Simulated cloud solutions architecture tasks on AWS as part of Forage's virtual job simulation program.",
    accent: "#f59e0b",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
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
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 inter">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#6366f1" }}>
            Verified learning
          </p>
          <h2 className="syne font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
            Certifications
          </h2>
          <p className="mt-3 text-sm max-w-md"
            style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>
            Structured programs and simulations that shaped how I build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${cert.accent}18`, border: `1px solid ${cert.accent}30` }}>
                <Award size={20} style={{ color: cert.accent }} />
              </div>

              <h3 className="syne font-bold text-white text-base mb-1.5 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-bold mb-3" style={{ color: cert.accent }}>
                {cert.issuer} · {cert.period}
              </p>
              <p className="text-xs leading-relaxed flex-grow"
                style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;