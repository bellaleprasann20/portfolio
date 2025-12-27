import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
];

const Skills = () => {
  const githubLink = "https://github.com/bellaleprasann20";

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold dark:text-white mb-4">Technical Toolbox</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">Click any skill to view my GitHub repositories</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(79, 70, 229, 0.05)",
                borderColor: "#4f46e5" 
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl text-center group transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer block"
            >
              <div className="text-gray-800 dark:text-gray-200 font-bold mb-1 group-hover:text-indigo-600 transition-colors">
                {skill.name}
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-tighter font-semibold">
                {skill.level}
              </div>
              
              {/* Subtle hint icon appearing on hover */}
              <div className="mt-2 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                View Projects ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;