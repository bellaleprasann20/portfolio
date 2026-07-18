import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Training from '../components/Training';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// Hero, Skills, Training, Certifications, and Projects each already render their
// own <section id="..."> internally — no outer <section> wrapper needed here.
// Wrapping them again would duplicate IDs and break anchor-link scrolling.
const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Skills />
      <Training />
      <Certifications />
      <Projects />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;