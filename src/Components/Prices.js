import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import "../App.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: 'Starter Package - CAD$199',
      description: '- 3 Pages \n - Responsive design \n - SEO Optimization \n - +80/per page ',
      image: 'https://assets.aws.shawdirect.ca/uploadedimages/promotions/english/shawgo/sportsnet_new/hero.jpg',
      projectUrl: <Link to="/PackageOne">Learn more</Link> // This is for internal routing
    },
    {
      title: 'Business Package - CAD$399',
      description: 'A network monitoring tool using Python where users can ping sites, check on their DNS, find the traceroute, and monitor the I/O of the network.',
      image: 'https://w7.pngwing.com/pngs/650/930/png-transparent-computer-network-management-network-monitoring-technical-support-network-service-research-service-people-computer.png',
      projectUrl: <Link to="/PackageTwo">Learn more</Link> // This is for internal routing
    },
    {
      title: 'Elite Package - CAD$599',
      description: 'An e-commerce-based web application for a bookstore where users can add, update or remove their books',
      image: 'https://files.realpython.com/media/Get-Started-With-Django_Watermarked.15a1e05597bc.jpg',
      projectUrl: <Link to="/PackageThree">Learn more</Link> // This is for internal routing
    },
  ];

  const items = projects.map((project, index) => (
    <div
      key={index}
      className={`item ${activeIndex === index ? 'active' : ''}`}
      data-value={index + 1}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      style={{ textAlign: 'center', transition: 'transform 0.3s ease-in-out' }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',       /* Responsive width */
          maxWidth: '300px',   /* Limit the width to avoid it being too large */
          height: 'auto',      /* Keep the height proportional */
          objectFit: 'cover',  /* Maintain aspect ratio and crop if necessary */
          borderRadius: '10px' 
        }}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {typeof project.projectUrl === 'string' ? (
          <a href={project.projectUrl} target="_blank" rel="noreferrer">Live Project</a>
        ) : (
          project.projectUrl // This renders the <Link> component for internal navigation
        )}
      </div>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
}

export default Portfolio;
