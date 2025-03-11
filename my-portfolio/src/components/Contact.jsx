import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea><br />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;