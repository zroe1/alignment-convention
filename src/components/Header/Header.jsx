import React, { useState } from "react";
import "./Header.css";
import RegisterButton from "../RegisterButton/RegisterButton";
import { ReactComponent as AlignConLogo } from "./logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <header>
      <AlignConLogo className="logo" />
      <div className="desktop-nav">
        <nav className="top-nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#speakers" className="nav-link">
            Speakers
          </a>
          <a href="#schedule" className="nav-link">
            Schedule
          </a>
          <a href="#sponsors" className="nav-link">
            Sponsors
          </a>
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
          <a href="#about" className="nav-link" onClick={toggleMenu}>
            About
          </a>
          <a href="#speakers" className="nav-link" onClick={toggleMenu}>
            Speakers
          </a>
          <a href="#schedule" className="nav-link" onClick={toggleMenu}>
            Schedule
          </a>
          <a href="#sponsors" className="nav-link" onClick={toggleMenu}>
            Sponsors
          </a>
        </nav>
      )}
      {/* <RegisterButton /> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
