import { motion } from "framer-motion";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";

const projects = [
  {
    title: "Portfolio Website",
    image: p1,
    desc: "Personal portfolio built with React & Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "#home" // This points to your Hero section ID
  },
  {
    title: "Food Ordering App",
    image: p2,
    desc: "Full-stack food ordering application with payment integration.",
    tech: ["React","Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/bellaleprasann20",
    live: "https://github.com/bellaleprasann20"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Featured <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of my recent work, ranging from frontend interfaces to full-stack applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                  {p.desc}
                </p>

                {/* Links Logic */}
                <div className="flex gap-4">
                  <a 
                    href={p.live} 
                    target={p.title === "Portfolio Website" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
                  >
                    Live Demo →
                  </a>
                  <a 
                    href={p.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;