import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            I’m currently available for new opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Centered Contact Information Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <ContactDetail 
            icon={<FaPhoneAlt />} 
            label="Call Me" 
            value="+91 9380646560" 
            href="tel:+919380646560"
          />
          <ContactDetail 
            icon={<FaEnvelope />} 
            label="Email Me" 
            value="prasannbellale@gmail.com" 
            href="mailto:prasannbellale@gmail.com"
          />
          <ContactDetail 
            icon={<FaMapMarkerAlt />} 
            label="Location" 
            value="India" 
          />
        </motion.div>
      </div>
    </section>
  );
};

const ContactDetail = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full">
      <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
        {label}
      </p>
      <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors text-center break-all">
        {value}
      </p>
    </div>
  );

  return href ? (
    <a href={href} className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
};

export default Contact;