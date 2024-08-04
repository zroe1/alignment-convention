import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import RegisterButton from "../RegisterButton/RegisterButton";
import { ReactComponent as AlignConLogo } from "./logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <AlignConLogo className="logo" />
      <div className="desktop-nav">
        <nav className="top-nav">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/speakers" className="nav-link">
            Speakers
          </Link>
          <Link to="/schedule" className="nav-link">
            Schedule
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
        <RegisterButton />
      </div>
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && (
        <nav className="mobile-menu">
          <Link to="/about" className="nav-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/speakers" className="nav-link" onClick={toggleMenu}>
            Speakers
          </Link>
          <Link to="/schedule" className="nav-link" onClick={toggleMenu}>
            Schedule
          </Link>
          <Link to="/sponsors" className="nav-link" onClick={toggleMenu}>
            Sponsors
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
