import React from 'react';
import './Experience.css';
import { FaDocker, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaNpm, FaGithub } from 'react-icons/fa'; 
import { SiNetlify, SiRender, SiPostman, SiNextdotjs, SiAmazonwebservices, SiPostgresql, SiFirebase, SiExpress, SiJest } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import Tooltip from './Tooltip'; // Import Tooltip component

const Experience = () => {
  return (
    <div className="experience">
      <h2>Technical Skills</h2>
      <h3>Learn more about my background</h3>
      <h5>Hover for Proficiency Level</h5>
        <div className="experience-item">
          <div className="title">FrontEnd Development</div>
          <div className="tech-icons">
            <Tooltip text="Intermediate">
              <FaHtml5 size={40} />
              <div>HTML5</div>
            </Tooltip>
            <Tooltip text="Intermediate">
              <FaCss3Alt size={40} />
              <div>CSS3</div>
            </Tooltip>
            <Tooltip text="Intermediate">
              <FaJs size={40} />
              <div>JavaScript (ES6+)</div>
            </Tooltip>
            <Tooltip text="Intermediate">
              <FaReact size={40} />
              <div>React</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <FaNpm size={40} />
              <div>node package manager</div>
            </Tooltip>
            <Tooltip text="Beginner">
              <SiNextdotjs size={40} />
              <div>Next.js</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <FaBootstrap size={40} />
              <div>Bootstrap</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <RiTailwindCssFill size={40} />
              <div>Tailwind CSS</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <SiNetlify size={40} />
              <div>Netlify</div>
            </Tooltip>
            
          </div>
        </div>

        <div className="experience-item">
        <div className="title">BackEnd Development</div>
          <div className="tech-icons-be">
            <Tooltip text="Intermediate">
              <FaNodeJs size={40} />
              <div>Node.js</div>
            </Tooltip>
            <Tooltip text="Beginner">
              <FaDatabase size={40} />
              <div>MongoDB</div>
            </Tooltip>
            <Tooltip text="Beginner">
              <SiExpress size={40} />
              <div>Express.js</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <SiFirebase size={40} />
              <div>Firebase</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <SiPostgresql size={40} />
              <div>PostgreSQL</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <SiRender size={40} />
              <div>Render</div>
            </Tooltip>
          
          </div>
        </div>
        <div className="experience-item">
        <div className="title">Additional Technologies</div>
          <div className="tech-icons">
            <Tooltip text="Beginner">
              <FaDocker size={40} />
              <div>Docker</div>
            </Tooltip>
            <Tooltip text="Proficient">
              <FaGithub size={40} />
              <div>GitHub</div>
            </Tooltip>
            <Tooltip text="Intermediate">
              <SiAmazonwebservices size={40} />
              <div>Amazon Web Services</div>
            </Tooltip>
            <Tooltip text="Advanced">
              <SiPostman size={40} />
              <div>Postman</div>
            </Tooltip>
            <Tooltip text="Beginner">
              <SiJest size={40} />
              <div>Jest</div>
            </Tooltip>
            <Tooltip text="Intermediate">
              <GrGraphQl size={40} />
              <div>GraphQL</div>
            </Tooltip>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Experience;
