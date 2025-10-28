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
            src=""
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