import React from 'react';
import ContactPage from './ContactPage';
import "../App.css"

function Contact() {
  return (
    <div id="contact" data-aos="fade-up">
      <h1>Contact me</h1>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <p data-aos="fade-up">I am a student at the Humber College Institute of Technology & Advanced Learning, Canada studying Computer Programming and Analysis. I am interested in website programming & development, and database management. I am currently looking for a lost semi-colon.</p>
      <a href='#contactpage' onClick={(e) => { e.preventDefault(); window.location.href = ContactPage; }} >
      <button data-aos="fade-up" >Click to learn more!</button>
      </a>
      <form>
        {/* Form elements go here */}
      </form>
    </div>
  );
}

export default Contact;