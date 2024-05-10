import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img
            src="src/assets/images/Verbal.png"
            style={{ width: "162", height: "50px" }}
            alt="Verbal Ace"
          />
        </a>

        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              <img
                src="src/assets/images/logo.svg"
                style={{ width: "116262", height: "50" }}
                alt="Verbal Arc logo"
              />
            </a>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                Use Cases
              </a>
            </li>

            <li className="navbar-item">
              <a href="#courses" className="navbar-link" data-nav-link>
                About Us
              </a>
            </li>

            <li className="navbar-item">
              <a href="#blog" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href="https://663e10e8fed9c20fc7225eaa--glittery-alfajores-ae9dcd.netlify.app/"
            className="btn has-before"
          >
            <span className="span">Get Started </span>
            <FaArrowRightLong />
          </a>

          <button
            className="header-action-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Header;
