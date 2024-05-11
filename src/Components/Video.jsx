import React from "react";
import Scenario from "./Scenario";

function Video() {
  return (
    <>
      <section className="section course" id="courses" aria-label="course">
        <Scenario />
      </section>

      <section
        className="video has-bg-image"
        aria-label="video"
        style={{ backgroundImage: `url('src/assets/images/video-bg.png')` }}
      >
        <div className="container">
          <div className="video-card">
            <div
              className="video-banner img-holder has-after"
              style={{ width: "", height: "" }}
            >
              <img
                src="src/assets/images/video-banner.jpg"
                style={{ width: "970px", height: "550px", loading: "lazy" }}
                alt="video banner"
                className="img-cover"
              />
              <button className="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <img
              src="src/assets/images/video-shape-1.png"
              style={{ width: "1089px", height: "605px", loading: "lazy" }}
              alt=""
              className="shape video-shape-1"
            />
            <img
              src="src/assets/images/video-shape-2.png"
              style={{ width: "158px", height: "174px", loading: "lazy" }}
              alt=""
              className="shape video-shape-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
