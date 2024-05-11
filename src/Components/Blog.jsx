import React from "react";

function BlogSection() {
  return (
    <section
      className="section blog has-bg-image"
      id="blog"
      aria-label="blog"
      style={{ backgroundImage: `url('src/assets/images/blog-bg.svg')` }}
    >
      <div className="container">
        <p className="section-subtitle">Latest Articles</p>
        <h2 className="h2 section-title">Get Blogs With Verbal Arc</h2>
        <ul className="grid-list">
          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-after"
                style={{ width: "370px", height: "370px" }}
              >
                <img
                  src="src/assets/images/blog-1.jpg"
                  style={{ width: "370px", height: "370px", loading: "lazy" }}
                  alt="Become A Better Blogger: Content Planning"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <a href="#" className="card-btn" aria-label="read more">
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    The Power of Communication: Mastering English Fluency
                  </a>
                </h3>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">May 10, 2024</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon
                      name="chatbubbles-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">Com 09</span>
                  </li>
                </ul>
                <p className="card-text">
                  This blog can delve into the importance of English fluency...
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-after"
                style={{ width: "370px", height: "370px" }}
              >
                <img
                  src="src/assets/images/blog-2.jpg"
                  style={{ width: "370px", height: "370px", loading: "lazy" }}
                  alt="Become A Better Blogger: Content Planning"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <a href="#" className="card-btn" aria-label="read more">
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Body Language: Your Silent Partner in Language Mastery
                  </a>
                </h3>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">May 10, 2024</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon
                      name="chatbubbles-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">Verbal Arc</span>
                  </li>
                </ul>
                <p className="card-text">
                  Here, you can explore the significance of nonverbal...
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-after"
                style={{ width: "370px", height: "370px" }}
              >
                <img
                  src="src/assets/images/blog-3.jpg"
                  style={{ width: "370px", height: "370px", loading: "lazy" }}
                  alt="Become A Better Blogger: Content Planning"
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <a href="#" className="card-btn" aria-label="read more">
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Unlocking Vocabulary: Strategies for Language Expansion
                  </a>
                </h3>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">May 10, 2024</span>
                  </li>
                  <li className="card-meta-item">
                    <ion-icon
                      name="chatbubbles-outline"
                      aria-hidden="true"
                    ></ion-icon>
                    <span className="span">Verbal Arc</span>
                  </li>
                </ul>
                <p className="card-text">
                  Unlocking Vocabulary: Strategies for Language Expansion
                </p>
              </div>
            </div>
          </li>
        </ul>
        <img
          src="src/assets/images/blog-shape.png"
          style={{ width: "186px", height: "186x", loading: "lazy" }}
          alt=""
          className="shape blog-shape"
        />
      </div>
    </section>
  );
}

export default BlogSection;
