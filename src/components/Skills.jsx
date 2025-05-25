import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaUsers } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section py-5 position-relative text-white">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="mb-5 text-center fw-bold">Technical Skills</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-4 skill-card p-4 rounded shadow bg-dark">
            <h5 className="mb-3">
              <FaCode className="me-2 skill-icon" /> Languages
            </h5>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Embedded C</li>
            </ul>
          </div>
          <div className="col-md-4 skill-card p-4 rounded shadow bg-dark">
            <h5 className="mb-3">
              <FaLaptopCode className="me-2 skill-icon" /> Frontend
            </h5>
            <ul>
              <li>React.js</li>
              <li>HTML, CSS, Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="col-md-4 skill-card p-4 rounded shadow bg-dark">
            <h5 className="mb-3">
              <FaDatabase className="me-2 skill-icon" /> Backend & DB
            </h5>
            <ul>
              <li>Spring Boot</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="col-md-4 skill-card p-4 rounded shadow bg-dark">
            <h5 className="mb-3">
              <FaTools className="me-2 skill-icon" /> Tools
            </h5>
            <ul>
              <li>Git, VS Code, Webpack (Basic)</li>
              <li>REST APIs, Eclipse</li>
            </ul>
          </div>
          <div className="col-md-4 skill-card p-4 rounded shadow bg-dark">
            <h5 className="mb-3">
              <FaUsers className="me-2 skill-icon" /> Soft Skills
            </h5>
            <ul>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Eagerness to Learn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="background-animation"></div>
    </section>
  );
}

export default Skills;
