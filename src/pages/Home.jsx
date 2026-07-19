import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Training from '../components/Training';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// Hero, Skills, Training, Certifications, Projects, and Contact each already
// render their own <section id="..."> internally — no outer wrapper needed.
// Wrapping again duplicates IDs and breaks anchor-link scrolling.
const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Skills />
      <Training />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;