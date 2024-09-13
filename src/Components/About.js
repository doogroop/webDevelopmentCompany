import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";

function About() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleClick = () => {
    navigate('/aboutpage'); // Navigate to AboutPage route
  };

  return (
    <div data-aos="fade-up" id="about" className='about'>
      <h1 data-aos="fade-up">About Me</h1>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <p data-aos="fade-up">We create Websites for start ups and established businesses in North America.</p>
      {/* Link component for navigation */}
      <Link to="/aboutpage">
        <button data-aos="fade-up">Go to About Page</button>
      </Link>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default About;
