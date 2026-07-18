import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Linkedin, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Phone,
      label: 'Call Me',
      value: '+91 9380646560',
      href: 'tel:+919380646560',
      accent: '#22c55e',
    },
    {
      icon: Mail,
      label: 'Email Me',
      value: 'prasannbellale@gmail.com',
      href: 'mailto:prasannbellale@gmail.com',
      accent: '#6366f1',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bidar, Karnataka, India',
      href: null,
      accent: '#f59e0b', 
    },
  ];

  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      handle: '@bellaleprasann20',
      href: 'https://github.com/bellaleprasann20',
      accent: '#ffffff',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'Prasann Bellale',
      href: 'https://linkedin.com/in/prasann-bellale',
      accent: '#0ea5e9',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'prasannbellale@gmail.com',
      href: 'mailto:prasannbellale@gmail.com',
      accent: '#6366f1',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: '#080c14' }}
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

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 inter">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: '#6366f1' }}>
            Let's connect
          </p>
          <h2 className="syne font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Get In Touch
          </h2>
          <p className="mt-3 text-sm max-w-md"
            style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>
            I'm currently open to new opportunities. Whether it's a project, job, or just a chat — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-5">

          {/* LEFT — main CTA + contact cards */}
          <div className="md:col-span-3 space-y-4">

            {/* Big CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Decorative blob */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2), transparent)' }} />

              <div className="relative">
                <div className="text-4xl mb-4">👋</div>
                <h3 className="syne font-bold text-white text-2xl mb-2">
                  Let's Build Something Together
                </h3>
                <p className="text-sm leading-relaxed mb-6"
                  style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                  I'm a MERN stack developer looking for exciting opportunities. If you have a project in mind or a role that fits, I'd love to hear from you.
                </p>
                <motion.a
                  href="mailto:prasannbellale@gmail.com"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="syne inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
                  }}>
                  <Send size={15} /> Say Hello
                </motion.a>
              </div>
            </motion.div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                const inner = (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 group cursor-pointer h-full transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                      style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}30` }}>
                      <Icon size={17} style={{ color: c.accent }} />
                    </div>
                    <div>
                      <p className="syne text-[10px] font-bold tracking-widest uppercase mb-1"
                        style={{ color: 'rgba(255,255,255,0.3)' }}>{c.label}</p>
                      <p className="text-xs font-medium text-white break-all leading-relaxed">{c.value}</p>
                    </div>
                  </motion.div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block h-full">{inner}</a>
                ) : (
                  <div key={c.label} className="h-full">{inner}</div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — social links + availability */}
          <div className="md:col-span-2 space-y-4">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0"
                  style={{ boxShadow: '0 0 10px #34d399' }} />
                <p className="syne font-bold text-white text-sm">Available for Work</p>
              </div>
              <p className="text-xs leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
                Open to full-time roles, freelance projects, and internships. Response time: within 24 hours.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex gap-2 flex-wrap">
                  {['Full-time', 'Freelance', 'Remote'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full syne"
                      style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <p className="syne text-[10px] font-bold tracking-widest uppercase mb-4"
                style={{ color: 'rgba(255,255,255,0.3)' }}>
                Find me on
              </p>
              <div className="space-y-3">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all group"
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}>
                        <Icon size={14} style={{ color: s.accent }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="syne text-xs font-bold text-white">{s.label}</p>
                        <p className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.handle}</p>
                      </div>
                      <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.2)' }}
                        className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="text-2xl mb-2">⚡</p>
              <p className="syne font-bold text-white text-sm mb-1">Fast Response</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>
                Usually reply within 24 hours
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs syne font-bold" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2025 Prasann Bellale. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 300 }}>
            Built with React · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;