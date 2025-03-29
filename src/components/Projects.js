
import React from 'react';
import Slider from 'react-slick';  
import './Projects.css';
import OthelloGif from '../assets/images/OthelloGif.mp4';
import MovieSearchVid from '../assets/images/MovieSearchVid.mp4';
import OldPortfolio from '../assets/images/OldPortfolio.mp4';
import UrlShortener from '../assets/images/UrlShortener.mp4';
const projects = [
  {
    title: "URL Shortener",
    description: "A full-stack web app that shortens long URLs for easy sharing. Built with React, Node.js, and MongoDB, deployed on Netlify and Render. Users can shorten, copy, and share links effortlessly.",
    mediaType: "video", 
    mediaUrl: UrlShortener,
    link: "https://incomparable-pixie-34dd0d.netlify.app/"
  },
  {
    title: "Othello",
    description: "A classic strategy game recreated in React, featuring intuitive game logic, dynamic visuals, and smooth interactivity. Challenge yourself or a friend to master this timeless board game.",
    mediaType: "video", 
    mediaUrl: OthelloGif,
    link: "https://github.com/ejohnson9862/OthelloGame.git"
  },
  {
    title: "Movie Search",
    description: "A sleek movie search application built with React, leveraging a robust movie API for fast and accurate results. Effortlessly find movie details to find the perfect film for your movie night",
    mediaType: "video",
    mediaUrl: MovieSearchVid,
    link: "https://github.com/ejohnson9862/movie-recommendations.git"
  },
  {
    title: "Old Portfolio",
    description: "In the journey of web development, growth is a constant. This old portfolio represents where I started. By comparing it with my current React portfolio, you can clearly see how far I've come.",
    mediaType: "video",
    mediaUrl: OldPortfolio,
    link: "https://github.com/ejohnson9862/EJ-Old-Portfolio.git"
  }
];

const Project = () => {
  const settings = {
    dots: true,           // Shows dots for navigation
    infinite: true,       // Infinite loop (repeats the carousel)
    speed: 500,           
    slidesToShow: 3,      
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],   
  };

  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            {project.mediaType === "video" && (
              <video controls className="project-media">
                <source src={project.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Explore Project</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
