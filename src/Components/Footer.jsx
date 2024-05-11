import React from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url('src/assets/images/footer-bg.png')` }}
    >
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="src/assets/images/Verbal.png"
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </a>
            <p className="footer-brand-text">
              Empower your presence with our AI-driven app: Predict, correct,
              and refine your English Fluency effortlessly for confident
              communication.
            </p>
            <div className="wrapper">
              <span className="span">Add:</span>
              <address className="address">Delhi</address>
            </div>
            <div className="wrapper">
              <span className="span">Call:</span>
              <a href="tel:+919874589658" className="footer-link">
                +91 9874589658
              </a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:info@verbalace" className="footer-link">
                info@verbalace
              </a>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Home</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Get Started
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                News & Articles
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Sign In/Registration
              </a>
            </li>
          </ul>
          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>
            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
              />
              <button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </form>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Made with love by
            <a href="#" className="copyright-link">
              Hack.O.Bars
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
