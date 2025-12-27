import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Each section should have an ID that matches your Navbar hrefs (e.g., #home, #projects) */}
      
      <section id="home">
        <Hero />
      </section>

      <section id="skills" className="bg-white">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;