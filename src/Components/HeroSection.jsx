import React from "react";

export default function HeroSection() {
  return (
    <>
      <section
        className="section hero has-bg-image"
        id="home"
        aria-label="home"
        style={{ backgroundImage: "url('src/assets/images/hero-bg.svg')" }}
      >
        {" "}
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 section-title">
              Speak English with <span className="span">Confidence</span>
            </h1>
            <p className="hero-text">
              Empower your presence with our AI-driven app: Predict, correct,
              and refine your English Fluency effortlessly for confident
              communication.
            </p>
            <a
              href="https://663e10e8fed9c20fc7225eaa--glittery-alfajores-ae9dcd.netlify.app/"
              className="btn has-before"
            >
              <span className="span">Get Started</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true" />
            </a>
          </div>
          <figure className="hero-banner">
            <div
              className="img-holder one"
              style={{ width: "270", height: "300" }}
            >
              <img
                src="src/assets/images/hero-banner-1.jpg"
                style={{ width: "270", height: "300" }}
                alt="hero banner"
                className="img-cover"
              />
            </div>
            <div
              className="img-holder two"
              style={{ width: "240", height: "370" }}
            >
              <img
                src="src/assets/images/hero-banner-2.jpg"
                style={{ width: "240", height: "370" }}
                alt="hero banner"
                className="img-cover"
              />
            </div>
            <img
              src="src/assets/images/hero-shape-1.svg"
              style={{ width: "380", height: "190" }}
              alt="hero shape 1"
              className="shape hero-shape-1"
            />
            <img
              src="src/assets/images/hero-shape-2.png"
              style={{ width: "622", height: "551" }}
              alt
              className="shape hero-shape-2"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
