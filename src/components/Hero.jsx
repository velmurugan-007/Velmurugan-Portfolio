import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'React|Java Full Stack Developer';

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate(${-x}px, ${-y}px)`;
      if (blob3Ref.current) blob3Ref.current.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll fade-in
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Parallax Blobs */}
      <div className="blobs">
        <div ref={blob1Ref} className="blob blob1"></div>
        <div ref={blob2Ref} className="blob blob2"></div>
        <div ref={blob3Ref} className="blob blob3"></div>
      </div>

      <div className="container text-center">
        <h1 className="hero-title fade-in">VELMURUGAN M</h1>
        <p className="hero-subtitle fade-in typing">{typedText}</p>
        <p className="hero-location fade-in">Tirunelveli, Tamil Nadu – 627602</p>
        
        {/* Elaborate Summary paragraph */}
        <p className="hero-summary fade-in">
          I am a dedicated React Developer and Java Full Stack enthusiast with a strong passion for creating efficient, scalable, and user-centric web applications. 
          Skilled in modern frontend frameworks, backend development, and database management, I thrive on solving complex problems and delivering impactful solutions. 
          With a keen interest in AI and automation, I continuously seek to integrate intelligent features into applications to enhance user experience and business value.
          I am eager to collaborate with innovative teams where I can contribute my technical expertise while learning and growing professionally in dynamic environments.
        </p>

        <div className="hero-icons fade-in">
          <a
            href="mailto:velmurugan.m.7678@gmail.com?subject=Hello%20Velmurugan&body=Hi%20Velmurugan,%0D%0A%0D%0AI%20am%20reaching%20out%20to%20connect%20with%20you."
            className="icon-link"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a href="https://wa.me/919025738607" className="icon-link" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/velmurugan-007" className="icon-link" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vel-m" className="icon-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
