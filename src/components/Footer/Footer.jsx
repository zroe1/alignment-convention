import "./Footer.css";
import { ReactComponent as Logo } from "../Header/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Logo className="footer-logo" />
        <p className="footer-text">Aligning AI and securing our collective future.</p>
      </div>
      <div className="footer-container">
        <p className="footer-logo-title">Links</p>
        <nav className="footer-link-contianer">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/speakers" className="footer-link">
            Speakers
          </Link>
          <Link to="/schedule" className="footer-link">
            Schedule
          </Link>
          <Link to="/register" className="footer-link">
            Register
          </Link>
        </nav>
      </div>
      <div className="footer-container">
        <p className="footer-logo-title">Take Action</p>
        <nav className="footer-link-contianer">
          <a className="footer-link" href="https://www.google.com/">
            Interest Form
          </a>
          <a className="footer-link" href="https://www.google.com/">
            Contact
          </a>
        </nav>
      </div>
      <p className="copyright">© 2021 AlignCon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
