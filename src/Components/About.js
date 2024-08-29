import React from 'react';
import "../App.css"
import './AboutPage'

function About() {
  return (
    <div data-aos="fade-up" id="about" className='about'>
      <h1 data-aos="fade-up">About Me</h1>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <a href='#aboutpage' onClick={(e) => { e.preventDefault(); window.location.href = '/AboutPage'; }} >
      <button >Click to learn more!</button>
      </a>
    </div>
  );
}

export default About;