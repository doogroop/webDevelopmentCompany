import React, { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import "../App.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import logo from './logo-color.png'
import { Link } from 'react-router-dom';

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: 'Starter Package - CAD$199',
      description: '- 3 Pages \n - Responsive design \n - SEO Optimization \n - +80/per page ',
      image: logo,
      projectUrl: '/PackageOne'
    },
    {
      title: 'Business Package - CAD$399',
      description: 'A network monitoring tool using Python where users can ping sites, check on their DNS, find the traceroute, and monitor the I/O of the network.',
      image: logo,
      projectUrl: '/PackageTwo'
    },
    {
      title: 'Elite Package - CAD$599',
      description: 'An e-commerce-based web application for a bookstore where users can add, update or remove their books',
      image: logo,
      projectUrl: '/PackageThree'
    },
  ];

  const items = projects.map((project, index) => (
    <Link to={project.projectUrl} key={index} style={{ textDecoration: 'none' }}>
      <div
        className={`item ${activeIndex === index ? 'active' : ''}`}
        data-value={index + 1}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        style={{ 
          textAlign: 'center', 
          transition: 'transform 0.5s ease-in-out',
          width: '280px',  // Set a fixed width for all cards
          height: '400px', // Set a fixed height for all cards
          cursor: 'pointer', // Make the cursor a pointer to indicate clickability
          backgroundImage: `${project.image}`, // Set the background image
          backgroundColor:'#4067e6',
          backgroundSize: 'cover', // Ensure the image covers the entire card
          backgroundPosition: 'center', // Center the image
          color: 'white', // Ensure text is readable
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px'
        }}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
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
