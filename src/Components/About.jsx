import React from "react";

function About() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div
            className="img-holder"
            style={{ width: "520px", height: "370px" }}
          >
            <img
              src="src/assets/images/about-banner.jpg"
              width="520"
              height="370"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />
          </div>
          {/* You can uncomment and replace the image tags if needed */}
          {/* <img
            src="./assets/images/about-shape-1.svg"
            width="360"
            height="420"
            loading="lazy"
            alt=""
            className="shape about-shape-1"
          /> */}
          {/* <img
            src="./assets/images/about-shape-2.svg"
            width="371"
            height="220"
            loading="lazy"
            alt=""
            className="shape about-shape-2"
          /> */}
          <img
            src="src/assets/images/about-shape-3.png"
            style={{ width: "722px", height: "528px", loading: "lazy" }}
            alt=""
            className="shape about-shape-3"
          />
        </figure>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
            Your <span className="span">AI-Powered</span> Partner for English
            Fluency Mastery.
          </h2>
          <p className="section-text">
            Verbal Ace is your AI-powered partner for mastering communication.
            Our platform offers conversational exercises, grammar correction,
            and body language assessment to enhance English fluency
            effortlessly.
          </p>
          <ul className="about-list">
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Personalized Learning</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Real-Time Feedback</span>
            </li>
            <li className="about-item">
              <ion-icon
                name="checkmark-done-outline"
                aria-hidden="true"
              ></ion-icon>
              <span className="span">Confidence Building</span>
            </li>
          </ul>
          <img
            src="./assets/images/about-shape-4.svg"
            width="100"
            height="100"
            loading="lazy"
            alt=""
            className="shape about-shape-4"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
