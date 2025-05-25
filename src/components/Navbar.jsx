import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Certifications",
    "Contact",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar fixed-top bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-primary fw-bold" href="#hero">
          PORTFOLIO
        </a>

        {/* Hamburger Icon - always visible */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Menu items - show only if menuOpen is true */}
      {menuOpen && (
        <div className="menu-items bg-dark text-center">
          {navItems.map((item) => (
            <a
              key={item}
              className="nav-link text-white py-2"
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
