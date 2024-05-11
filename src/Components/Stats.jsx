import React from "react";

function Stats() {
  return (
    <section className="section stats" aria-label="stats">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div
              className="stats-card"
              style={{
                backgroundColor: "hsl(169, 55%, 94%)",
                color: "hsl(169, 74%, 41%)",
              }}
            >
              <h3 className="card-title">2.3k+</h3>
              <p className="card-text">Practice Hours</p>
            </div>
          </li>
          <li>
            <div
              className="stats-card"
              style={{
                backgroundColor: "hsl(350, 90%, 96%)",
                color: "hsl(351, 83%, 61%)",
              }}
            >
              <h3 className="card-title">80%</h3>
              <p className="card-text">Fluency Gain %</p>
            </div>
          </li>
          <li>
            <div
              className="stats-card"
              style={{
                backgroundColor: "hsl(261, 100%, 97%)",
                color: "hsl(260, 100%, 67%)",
              }}
            >
              <h3 className="card-title">100%</h3>
              <p className="card-text">Satisfaction Rate</p>
            </div>
          </li>
          <li>
            <div
              className="stats-card"
              style={{
                backgroundColor: "hsl(42, 100%, 95%)",
                color: "hsl(42, 94%, 55%)",
              }}
            >
              <h3 className="card-title">354+</h3>
              <p className="card-text">User Count</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Stats;
