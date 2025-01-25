import React from 'react';
import './Header.css';
import FinnPlaceholder from '../assets/images/FinnPlaceholder.jpg'; // Correct path


const Header = () => {
  return (
    <header className="header">
      <h2>Hello!</h2>
      <p>I'm <b>Emma Johnson</b></p>
      
      
      {/* Correct image usage with import */}
      <img 
        src={FinnPlaceholder}  // Using imported image variable
        alt="Emma Johnson"
        className="header-image"
      />
    <h4>Front-end developer who builds engaging, user-friendly web experiences</h4>
    {/* add resume button */}
    {/* <a 
          href="/resume.pdf"  // Link to the resume PDF
          download="Emma_Johnson_Resume.pdf"  // Specify the download name
          className="download-button"
        >
          <b>View Resume</b>
        </a> */}
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
