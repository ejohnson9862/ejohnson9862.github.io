import React from 'react';
import './Header.css';
import logoEL from '../assets/images/logoEL.png';

const Header = () => {
  return (
    <header className="header">
      <img 
        src={logoEL}  
        alt="Emma Johnson"
        className="header-image"
      />
      <h2>Hello!</h2>
      <p>I'm <b>Emma</b></p>
      
    <h4>A front-end developer who builds</h4>
      <h4>engaging, user-friendly web experiences</h4>
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
