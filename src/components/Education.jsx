import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h5>SNS College of Technology - Coimbatore</h5>
          <p><small>B.E. in Electronics and Communication Engineering [ 2021 - 2025 ]</small></p>
          <p>CGPA: 8.2 </p>
        </div>

        <div className="education-card">
          <h5>Boo Vijesh Matriculation Higher Secondary School - Tirunelveli</h5>
          <p><small>HSC – 88% | 2019</small></p>
          <p><small>SSLC – 85% | 2021</small></p>
        </div>
      </div>
    </section>
  );
}

export default Education;
