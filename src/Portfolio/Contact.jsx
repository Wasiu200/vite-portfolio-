import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
  return (
<>
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2654096684755!2d4.598641674072423!3d7.76165220754008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103827489a44ee03%3A0xc8d59bcaa8bfd123!2sOsun%20State%20University!5e0!3m2!1sen!2sng!4v1761662737742!5m2!1sen!2sng" 
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Submit Message
          </button>
        </form>
      </div>
    </section>

</>
  )
}

export default Contact