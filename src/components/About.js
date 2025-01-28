// src/components/About.js
import React from 'react';
import './About.css';
import FinnPlaceholder from '../assets/images/FinnPlaceholder.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src={FinnPlaceholder}
          alt="About Me" 
          className="about-image" 
        />
        <div className="about-text">
          <p>
            I hold a Professional Certificate in Full Stack Development from MIT xPRO where I developed skills in the MERN stack. I now have experience building with React, using API integrations, and curating responsive web design. Before transitioning into tech, I graduated with a B.S. in Psychological Sciences from the University of Connecticut, which sharpened my problem-solving and analytical thinking skills.
          </p>
          <p>
            Beyond coding, I’m always curious and love diving into creative projects. Whether it’s restoring antique furniture, building detailed models, or learning a new craft, I’m energized by opportunities to think outside the box and challenge myself.
          </p>
          <p>
            I’m excited to bring my creativity, technical expertise, and enthusiasm for learning to a front-end development role where I can create meaningful, impactful applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
