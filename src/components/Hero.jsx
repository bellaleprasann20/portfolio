import { motion } from "framer-motion";
import resume from "../assets/Prasann_resume.pdf";
// STEP 1: Import your image here
import profilePic from "../assets/profileee.jpeg"; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Hi, I’m <span className="text-indigo-600">Prasann</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
          >
           MERN Full-Stack Developer specializing in MongoDB, Express.js, React, and Node.js, with a passion for building responsive, scalable, and modern web applications.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href={resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 transition-colors"
            >
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block relative"
        >
          {/* Animated Background Blob */}
          <div className="w-80 h-80 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full absolute -top-10 -right-10 animate-pulse blur-3xl" />
          
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full aspect-square bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700"
          >
             {/* STEP 2: The actual Image tag */}
             <img 
               src={profilePic} 
               alt="Prasann - Frontend Developer" 
               className="w-full h-full object-cover"
             />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;