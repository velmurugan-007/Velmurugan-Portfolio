import React from 'react';
import './Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="animated-bg">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>

      <div className="container content">
        <h2 className="mb-4 text-center fw-bold">Certifications</h2>
        <ul className="cert-list">
          <li>Java Full Stack Development – Yuva Shakthi Academy</li>
          <li>Java & SQL Basics – PrepInsta</li>
          <li>Introduction to Industry 4.0 and Industrial IoT – NPTEL (12 Weeks)</li>
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
