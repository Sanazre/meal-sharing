import React from "react";
import "./aboutStyles.css";
import Header from "../header/Header.js";

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-content">
          I am persian woman who owns a restaurant called "Sanaz." This
          restaurant is renowned for offering high-quality Turkish and Iranian
          cuisines. By indulging in these dishes, you can enjoy the exquisite
          taste of authentic food with traditional recipes and savor their high
          quality.
        </p>
      </div>
    </>
  );
}

export default About;
