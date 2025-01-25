import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to handle form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    // Send form data to EmailJS
    emailjs
      .send(
        'service_b3wj4jq', 
        'template_6hb32se', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'gV_cwlIVG03Rx_SxG' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form fields
        },
        (error) => {
          console.log('FAILED...', error);
          setIsSubmitting(false);
          setSubmitError('Oops, something went wrong. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      

      {/* Form Section */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <input
          type="submit"
          value={isSubmitting ? 'Sending...' : 'Send Message'}
          disabled={isSubmitting}
        />
      </form>

      {/* Success/Error Message */}
      {submitSuccess && !isSubmitting && (
        <p className="success-message">Thank you! Your message has been sent.</p>
      )}
      {submitError && !isSubmitting && <p className="error-message">{submitError}</p>}

      {/* Social Media Links */}
      <div className="contact-social">
       <a href="/resume.pdf" download="Emma_Johnson_Resume.pdf">
          Resume
        </a> 
        <a href="https://github.com/ejohnson9862" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/emmajohnson6798/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:emma.a.johnson9862@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        
        
      </div>
    </section>
  );
};

export default Contact;
