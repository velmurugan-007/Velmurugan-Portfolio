import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000); // auto-dismiss
  };

  return (
    <section id="contact" className="contact-section">
      <div className="animated-bg"></div>
      <div className="container py-5">
        <h2 className="section-title text-center" data-aos="fade-down">
          <span>📬 Get in Touch</span>
        </h2>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
              <div className="form-group floating-label">
                <input type="text" required />
                <label>Name</label>
              </div>

              <div className="form-group floating-label">
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="form-group floating-label">
                <textarea rows="4" required></textarea>
                <label>Your Message</label>
              </div>

              <div className="form-check mb-3 text-start">
                <input className="form-check-input" type="checkbox" required />
                <label className="form-check-label">
                  I agree to the privacy policy.
                </label>
              </div>

              <button type="submit" className="btn btn-glow w-100">🚀 Send Message</button>

              {sent && (
                <div className="alert alert-success mt-3 text-center" data-aos="zoom-in">
                  ✅ Message sent successfully!
                </div>
              )}
            </form>

            <div className="social-icons text-center mt-4" data-aos="fade-up">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:your@email.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
