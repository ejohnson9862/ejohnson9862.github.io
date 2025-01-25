import React from 'react';
import './Experience.css';
import { FaDocker, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaNpm, FaGithub } from 'react-icons/fa'; 
import { SiPostman, SiNextdotjs, SiAmazonwebservices, SiPostgresql, SiFirebase, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandOauth } from "react-icons/tb";
import Tooltip from './Tooltip'; // Import Tooltip component

const Experience = () => {
  return (
    <div className="experience">
      <h2>My Experience</h2>
      {/* <div className="experience-list">
        
        <div className="experience-item">
          <h3>MIT xPRO's Professional Certificate in Coding: Full Stack Development with MERN</h3>
          <p className="experience-date">March 2024 - October 2024</p>
          <p className="experience-description">
          Gained expertise in web development with the MERN stack (MongoDB, Express.js, React, Node.js). Developed full-stack applications, built and tested APIs, and deployed cloud-ready solutions.</p>
          <h4>Key Highlights:</h4>
            <ul>
              <li>Built and deployed React-based applications with dynamic data handling and responsive design.</li>
              <li>Created and tested APIs with MongoDB and Express.js for efficient data management.</li>
              <li>Implemented modern deployment pipelines, using Docker, Postman, and Swagger.</li>
              <li>Developed a professional GitHub portfolio, showcasing collaborative projects and version control skills.</li>
            </ul>
        </div> */}
        
        <div className="experience-item">
          <h3>FrontEnd Development</h3>
          <p>Technologies I’ve worked with:</p>
          <div className="tech-icons">
            <Tooltip text="HTML5">
              <FaHtml5 size={40} />
            </Tooltip>
            <Tooltip text="CSS3">
              <FaCss3Alt size={40} />
            </Tooltip>
            <Tooltip text="JavaScript (ES6+)">
              <FaJs size={40} />
            </Tooltip>
            <Tooltip text="React">
              <FaReact size={40} />
            </Tooltip>
            <Tooltip text="npm (node package manager)">
              <FaNpm size={40} />
            </Tooltip>
            <Tooltip text="Next.js">
              <SiNextdotjs size={40} />
            </Tooltip>
            <Tooltip text="Bootstrap">
              <FaBootstrap size={40} />
            </Tooltip>
            <Tooltip text="Tailwind CSS">
              <RiTailwindCssFill size={40} />
            </Tooltip>
            
          </div>
        </div>

        <div className="experience-item">
          <h3>BackEnd Development</h3>
          <p>Technologies I’ve worked with:</p>
          <div className="tech-icons">
            <Tooltip text="Node.js">
              <FaNodeJs size={40} />
            </Tooltip>
            <Tooltip text="MongoDB">
              <FaDatabase size={40} />
            </Tooltip>
            <Tooltip text="Express.js">
              <SiExpress size={40} />
            </Tooltip>
            <Tooltip text="Docker">
              <FaDocker size={40} />
            </Tooltip>
            <Tooltip text="GitHub">
              <FaGithub size={40} />
            </Tooltip>
            <Tooltip text="Amazon Web Services">
              <SiAmazonwebservices size={40} />
            </Tooltip>
            <Tooltip text="Firebase">
              <SiFirebase size={40} />
            </Tooltip>
            <Tooltip text="PostgreSQL">
              <SiPostgresql size={40} />
            </Tooltip>
            <Tooltip text="Postman">
              <SiPostman size={40} />
            </Tooltip>
          </div>
        </div>
        
      </div>
    // </div>
  );
}

export default Experience;
