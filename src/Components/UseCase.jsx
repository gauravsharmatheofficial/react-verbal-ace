import React from "react";

function CategorySection() {
  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Use Cases</p>

        <h2 className="h2 section-title">
          Speak with <span className="span">Confidence</span>, Excel with Verbal
          Ace!
        </h2>

        <p className="section-text">
          Elevate your English with Verbal Ace! Advanced tech, personalized
          coaching for confident communication. Unlock your potential!
        </p>

        <ul className="grid-list">
          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "hsl(169, 55%, 94%)" }}
            >
              <div className="card-icon">
                <img
                  src="src/assets/images/category-1.svg"
                  style={{ width: "40px", height: "40px", loading: "lazy" }}
                  alt="Online Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Language Practice Sessions
                </a>
              </h3>

              <p className="card-text">
                Users can actively engage in conversational exercises with the
                app, speaking on diverse random topics provided by the API to
                enhance fluency, and articulation.
              </p>

              <span className="card-badge">Get Started</span>
            </div>
          </li>

          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "hsl(350, 90%, 96%)" }}
            >
              <div className="card-icon">
                <img
                  src="src/assets/images/category-2.svg"
                  style={{ width: "40px", height: "40px", loading: "lazy" }}
                  alt="Non-Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Grammar Correction Tool
                </a>
              </h3>

              <p className="card-text">
                The app can analyze spoken sentences in real-time, providing
                immediate feedback on grammatical errors and suggesting
                corrections to enhance English proficiency.
              </p>

              <span className="card-badge">Get Started</span>
            </div>
          </li>

          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "hsl(229, 81%, 96%)" }}
            >
              <div className="card-icon">
                <img
                  src="src/assets/images/category-3.svg"
                  style={{ width: "40px", height: "40px", loading: "lazy" }}
                  alt="Off-Campus Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Vocabulary Expansion
                </a>
              </h3>

              <p className="card-text">
                By identifying the most frequently used words in the user's
                speech, the app helps learners target areas for vocabulary
                expansion and offers alternatives to diversify their language.
              </p>

              <span className="card-badge">Get Started</span>
            </div>
          </li>

          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "hsl(42, 100%, 95%)" }}
            >
              <div className="card-icon">
                <img
                  src="src/assets/images/category-4.svg"
                  style={{ width: "40px", height: "40px", loading: "lazy" }}
                  alt="Hybrid Distance Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Body Language Assessment
                </a>
              </h3>

              <p className="card-text">
                Users receive feedback on their body language cues during
                speech, enabling them to refine nonverbal communication skills
                alongside their language fluency development.
              </p>

              <span className="card-badge">Get Started</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CategorySection;
