import "./Footer.css";
import { ReactComponent as Logo } from "../Header/logo.svg";

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
          <a className="footer-link" href="https://www.google.com/">
            About
          </a>
          <a className="footer-link" href="https://www.google.com/">
            Speakers
          </a>
          <a className="footer-link" href="https://www.google.com/">
            Schedule
          </a>
          <a className="footer-link" href="https://www.google.com/">
            Sponsers
          </a>
        </nav>
      </div>
      <div className="footer-container">
        <p className="footer-logo-title">Take Action</p>
        <nav className="footer-link-contianer">
          <a className="footer-link" href="https://www.google.com/">
            Register
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
