import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../App.css"; // Add styles here or in your CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs.sendForm('service_uq5q8c2', 'template_ac98npf', e.target, '9B4inKB9u81yuCPif')
        .then((result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">Thank you for contacting us!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button className='forumButton'type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
