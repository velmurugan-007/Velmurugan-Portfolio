import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section py-5">
      <div className="container position-relative text-white">
        <h2 className="mb-4 text-center fw-bold">Internship Experience</h2>

        <div className="mb-4 experience-card">
          <h5>Junior Developer Intern – Smik Systems (OPC) Pvt. Ltd, Coimbatore</h5>
          <p className="mb-1"><small>Jan 2025 - Mar 2025</small></p>
          <ul>
            <li>Assisted in developing web interfaces using React.js, Bootstrap, HTML, and CSS.</li>
            <li>Contributed to UI component design, bug fixing, and integration testing.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h5>Embedded System Intern – Embuzz Technologies, Coimbatore</h5>
          <p className="mb-1"><small>July 2024 - Aug 2024</small></p>
          <ul>
            <li>Worked on microcontroller-based systems using ESP8266 and Arduino platforms.</li>
            <li>Assisted in integrating sensors, writing embedded C code, and testing real-time automation features.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
