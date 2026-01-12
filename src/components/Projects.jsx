import { motion } from "framer-motion";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png"; 
import p4 from "../assets/project4.png"; 

const projects = [
  {
    title: "Chat App Project",
    image: p4,
    desc: "A real-time messaging platform with user authentication, instant group chats, and a fully responsive interface for mobile and desktop.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/bellaleprasann20",
    live: "https://chat-app-eight-sand-86.vercel.app" 
  },
  {
    title: "Airbnb Clone",
    image: p3,
    desc: "A full-stack vacation rental marketplace featuring property listings, booking management, and a responsive search interface.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/bellaleprasann20",
    live: "https://your-airbnb-link.vercel.app/" 
  },
  {
    title: "Portfolio Website",
    image: p1,
    desc: "Personal portfolio built with React & Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/bellaleprasann20",
    live: "#home"
  },
  {
    title: "Food Ordering App",
    image: p2,
    desc: "Full-stack food ordering application with payment integration.",
    tech: ["React","Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/bellaleprasann20",
    live: "https://food-hub-seven-rho.vercel.app/"
  },
  // Unique object for the "View More" card
  {
    isRedirect: true,
    title: "View More Projects",
    desc: "Check out my other repositories and open-source contributions on GitHub.",
    github: "https://github.com/bellaleprasann20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
          Featured <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto px-2">
          A collection of my recent work, ranging from frontend interfaces to full-stack applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, index) => {
            // Render the special "View More" card
            if (p.isRedirect) {
              return (
                <motion.a
                  key="view-more"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-indigo-600 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-8 text-center border-4 border-transparent hover:border-indigo-400 transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-white/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-indigo-100 text-sm mb-4">{p.desc}</p>
                  <span className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm group-hover:bg-gray-100 transition-colors">
                    Go to GitHub →
                  </span>
                </motion.a>
              );
            }

            // Default Project Card
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col mx-auto max-w-md w-full"
              >
                <div className="relative overflow-hidden aspect-video bg-gray-200 dark:bg-gray-700">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;