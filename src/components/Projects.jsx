import React from "react";
import "./Projects.css";
import { FaReact, FaPython, FaDatabase, FaServer, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    title: "Smart AI-Powered Cardiac Monitor",
    summary: "A portable device combining ECG, SpO2, and ML anomaly detection with a React dashboard.",
    description:
      "This project integrates real-time biomedical sensors with embedded ML on ESP8266 to detect cardiac anomalies with 98% accuracy. Data is visualized on a live React dashboard.",
    tech: ["React", "Python", "Embedded ML", "ESP8266"],
    icons: [<FaReact />, <FaPython />, <FaServer />],
    confidence: 95,
  },
  {
    title: "Blood Bank Management System",
    summary: "End-to-end platform for donor registration, inventory, and blood request management.",
    description:
      "Built with React and Spring Boot, this system allows seamless role-based control, donor matching, and real-time blood stock tracking for hospitals.",
    tech: ["React", "Spring Boot", "MySQL"],
    icons: [<FaReact />, <FaDatabase />, <FaServer />],
    confidence: 90,
  },
  {
    title: "Course Enrollment Platform",
    summary: "A full-stack portal for course browsing, filtering, and enrollment with dashboards.",
    description:
      "A secure web app with dynamic course management, personalized dashboards, and real-time tracking using Spring Boot REST API and React frontend.",
    tech: ["React", "TypeScript", "Spring Boot"],
    icons: [<FaReact />, <FaDatabase />, <FaLaptopCode />],
    confidence: 88,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container py-5">
        <h2 className="section-title text-center">🚀 My Featured Projects</h2>
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    <div className="icon-set">
                      {project.icons.map((icon, i) => (
                        <span key={i}>{icon}</span>
                      ))}
                    </div>
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-summary">{project.summary}</p>
                    <div className="confidence-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.confidence}%` }}
                      >
                        {project.confidence}%
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-desc">{project.description}</p>
                    <div className="tech-badges">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="note">🔄 Hover to flip again</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
