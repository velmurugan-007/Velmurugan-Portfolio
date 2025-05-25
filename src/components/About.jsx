import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <section id="about" className="py-5 about-section position-relative overflow-hidden">
      {/* Animated floating circles background */}
      <div className="floating-circles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`circle circle-${i + 1}`}></div>
        ))}
      </div>

      <div className="container position-relative text-white" style={{ zIndex: 2, maxWidth: 800 }}>
        <h2 className="mb-4 text-center fw-bold">About Me</h2>
        <p className="lead">
          Hello! I'm Velmurugan, a passionate React Developer with a keen eye for detail and a love for crafting seamless user experiences. I specialize in building responsive, dynamic web applications and integrating AI-powered healthcare solutions.
        </p>
        <p className="lead">
          I thrive in collaborative environments and enjoy turning complex challenges into simple, elegant solutions. When I’m not coding, I’m exploring the latest in AI, enhancing my skills, or contributing to open-source projects.
        </p>
        <p className="lead fst-italic">
          "Code is like humor. When you have to explain it, it’s bad." – Cory House
        </p>
      </div>
    </section>
  );
}

export default About;
