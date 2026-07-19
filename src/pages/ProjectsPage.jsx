import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Replaced placeholder template data (yourusername/project1, stock Unsplash
// photos, fake .com links) with your real, deployed projects.
// Swap in real screenshots for `image` when you have them — using accent-
// colored placeholders for now instead of unrelated stock photos.
const Projects = () => {
  const projects = [
    {
      title: 'Atharv Preschool — School Management Platform',
      description: 'Full-stack school management system with admin dashboard, Razorpay fee payments, automated PDF receipts, and email notifications.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
      github: 'https://github.com/bellaleprasann20/ATHARV-PRESCHOOL',
      live: 'https://atharv-preschool.vercel.app',
      accent: '#6366f1',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Socket.io-powered messaging platform with online status, typing indicators, and file sharing.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      // Verify this matches your actual repo name/casing before publishing.
      github: 'https://github.com/bellaleprasann20/Chat-App',
      live: 'https://chat-app-eight-sand-86.vercel.app',
      accent: '#06b6d4',
    },
    {
      title: 'Food Hub — Food Delivery Platform',
      description: 'Multi-restaurant ordering platform with cart management, Stripe payments, and an admin analytics dashboard.',
      tags: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Stripe'],
      // Verify this matches your actual repo name/casing before publishing.
      github: 'https://github.com/bellaleprasann20/Food-hub',
      live: 'https://food-hub-seven-rho.vercel.app',
      accent: '#f59e0b',
    },
    {
      title: 'JobPortal — Job Search & Application Platform',
      description: 'Role-based job platform for Job Seekers, Employers, and Admins with resume parsing and an aggregation-based matching algorithm.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/bellaleprasann20',
      live: '#',
      accent: '#8b5cf6',
    },
    {
      title: 'Portfolio Website',
      description: 'This site — built with React, Tailwind CSS, and Framer Motion.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/bellaleprasann20',
      live: '/',
      accent: '#ec4899',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: '#06080f' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500&display=swap');
        .syne { font-family: 'Syne', sans-serif; }
        .inter { font-family: 'Inter', sans-serif; }
        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .tag { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08); }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 inter">
        <div className="text-center mb-16">
          <p className="syne text-xs font-bold tracking-[0.3em] uppercase mb-3" style={{ color: '#6366f1' }}>
            What I've built
          </p>
          <h2 className="syne font-extrabold text-white leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Accent header block instead of an unrelated stock photo */}
              <div className="relative h-32 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}0d)` }}>
                <span className="syne font-extrabold text-3xl" style={{ color: `${project.accent}55` }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6">
                <h3 className="syne font-bold text-white text-lg mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="tag px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold syne transition-colors"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target={project.live.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold syne transition-colors"
                    style={{ color: project.accent }}
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;