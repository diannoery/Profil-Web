import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const MainContent = () => {
  return (
    <div className="w-3/4 p-8 overflow-y-auto">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default MainContent;
