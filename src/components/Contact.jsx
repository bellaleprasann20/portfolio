import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Using Vite Environment Variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Success state resets after 5 seconds
        setTimeout(() => setIsSent(false), 5000); 
      }, (error) => {
        setIsSending(false);
        alert("Something went wrong. Please check your internet or try again.");
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4">Have a question or want to work together?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm"
          >
            <ContactDetail 
              icon={<FaPhoneAlt />} 
              label="Call Me" 
              value="+91 9380646560" 
            />
            <ContactDetail 
              icon={<FaEnvelope />} 
              label="Email Me" 
              value="prasannbellale@gmail.com" 
            />
            <ContactDetail 
              icon={<FaMapMarkerAlt />} 
              label="Location" 
              value="India" 
            />
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                name="user_name" 
                type="text"
                required
                className="w-full p-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:text-white focus:border-indigo-500 outline-none transition-all"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              
              <input
                name="user_email"
                type="email"
                required
                className="w-full p-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:text-white focus:border-indigo-500 outline-none transition-all"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <textarea
                name="message"
                required
                className="w-full p-4 bg-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl dark:text-white focus:border-indigo-500 outline-none transition-all"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <motion.button 
                disabled={isSending}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-white ${
                  isSent ? 'bg-green-500' : 'bg-indigo-600 hover:bg-indigo-700'
                } disabled:opacity-70`}
              >
                {isSending ? (
                  "Sending..."
                ) : isSent ? (
                  <><FaCheckCircle /> Message Sent!</>
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sub-component for contact details
const ContactDetail = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
      <span className="text-xl">{icon}</span>
    </div>
    <div>
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default Contact;