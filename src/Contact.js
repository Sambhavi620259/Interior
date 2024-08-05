import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact" id="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below or reach us at contact:shubhisingh791@gmail.com.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
