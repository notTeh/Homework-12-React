import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { name, email, message } = formState;

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    
    if (name && email && message) {
      // Here you would typically send the form data to a server
      // Since there's no backend, we'll just show a success message
      setSuccessMessage('Thank you for your message! I will get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else {
      setErrorMessage('Please fill out all fields.');
    }
  }

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Two-column layout for name and email on larger screens */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
            onBlur={handleChange}
            placeholder="Your message here..."
            required
          />
        </div>
        
        {errorMessage && (
          <div className="error-message">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        
        {successMessage && (
          <div className="success-message">
            <p className="success-text">{successMessage}</p>
          </div>
        )}
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;