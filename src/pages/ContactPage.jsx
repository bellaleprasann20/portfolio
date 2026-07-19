import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────
// FORM SENDING: this now uses EmailJS (free tier, no backend needed) so
// submissions actually reach your inbox instead of just logging to console.
// Setup (5 min): 
//   1. Create a free account at emailjs.com
//   2. Add an Email Service (e.g. Gmail) and an Email Template
//   3. Replace the three placeholder strings below with your real IDs
//   4. npm install @emailjs/browser
// Until you do this, the form will show a clear error instead of silently
// pretending to succeed.
// ─────────────────────────────────────────────────────────────────────────
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: Mail,  label: 'Email Me', value: 'prasannbellale@gmail.com', accent: '#6366f1' },
    { icon: MapPin, label: 'Location', value: 'Bidar, Karnataka, India', accent: '#f59e0b' },
    { icon: Phone, label: 'Call Me',  value: '+91 9380646560',          accent: '#22c55e' },
  ];

  const socials = [
    { icon: Github,   href: 'https://github.com/bellaleprasann20',    accent: '#6366f1' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prasann-bellale', accent: '#6366f1' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#080c14' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .field {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
        }
        .field::placeholder { color: rgba(255,255,255,0.25); }
        .field:focus { outline: none; border-color: #6366f1; }
      `}</style>

      <div className="max-w-7xl mx-auto inter">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: '#6366f1' }}>
            Let's connect
          </p>
          <h1 className="syne font-extrabold text-white leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Get In Touch
          </h1>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
            Have a project in mind or a role that fits? I'm currently available and usually reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="glass rounded-2xl p-8 lg:p-10">
            <h3 className="syne font-bold text-white text-xl mb-6">Contact Information</h3>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, accent }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="syne text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, accent }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}25`, color: accent }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Your Name
                  </label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    className="field w-full px-4 py-3 rounded-xl text-sm transition-all"
                    placeholder="Your name" required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Email Address
                  </label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    className="field w-full px-4 py-3 rounded-xl text-sm transition-all"
                    placeholder="you@example.com" required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Subject
                </label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className="field w-full px-4 py-3 rounded-xl text-sm transition-all"
                  placeholder="Project inquiry / job opportunity" required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Message
                </label>
                <textarea
                  id="message" name="message" rows="5"
                  value={formData.message} onChange={handleChange}
                  className="field w-full px-4 py-3 rounded-xl text-sm resize-none transition-all"
                  placeholder="Tell me about your project or role..." required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="syne w-full py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
                }}
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} />
              </button>

              {status === 'sent' && (
                <p className="text-sm text-center" style={{ color: '#22c55e' }}>
                  Message sent — thanks for reaching out, I'll reply within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-center" style={{ color: '#f87171' }}>
                  Email sending isn't set up yet — see the EMAILJS setup comment at the top of this file,
                  or reach out directly at{' '}
                  <a href="mailto:prasannbellale@gmail.com" style={{ color: '#8b5cf6', textDecoration: 'underline' }}>
                    prasannbellale@gmail.com
                  </a>.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;