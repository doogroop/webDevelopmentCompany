import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import "../App.css";

function Portfolio() {
  const projects = [
    {
      title: 'SportsOnTheGo',
      description: 'A mobile application using react-native to display real-time information on basketball matches and let users buy tickets to upcoming tournaments.',
      image: 'https://assets.aws.shawdirect.ca/uploadedimages/promotions/english/shawgo/sportsnet_new/hero.jpg',
      projectUrl: 'live-demo.com',
      githubUrl: 'https://github.com/ZeRav3n/SportsOnTheGo'
    },
    {
      title: 'Network-Management',
      description: 'A network monitoring tool using Python where users can ping sites, check on their DNS, find the traceroute, and monitor the I/O of the network.',
      image: 'https://w7.pngwing.com/pngs/650/930/png-transparent-computer-network-management-network-monitoring-technical-support-network-service-research-service-people-computer.png',
      projectUrl: 'live-demo.com',
      githubUrl: 'https://github.com/ZeRav3n/Network-Management'
    },
    {
      title: 'Bookly',
      description: 'An e-commerce-based web application for a bookstore where users can add, update or remove their books',
      image: 'https://files.realpython.com/media/Get-Started-With-Django_Watermarked.15a1e05597bc.jpg',
      projectUrl: 'live-demo.com',
      githubUrl: 'https://github.com/ZeRav3n/CPAN-214_Python-Project'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [clonedProjects, setClonedProjects] = useState([...projects, ...projects]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? clonedProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === clonedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>
        ‹
      </button>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-activeIndex * 260}px)` }}
      >
        {clonedProjects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.projectUrl} target="_blank" rel="noreferrer">Live Project</a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNextClick}>
        ›
      </button>
    </div>
  );
}

export default Portfolio;
