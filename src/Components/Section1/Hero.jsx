import React from "react";
import "./Hero.css";
import underline from "../../images/Vector.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-heading-container">
          <h1 className="hero-heading">
            Your next Project <span>Done right</span>
            <img className="hero-heading-underline" src={underline} alt="" />
          </h1>
        </div>
        <div className="hero-content-highlights">
          <div className="hero-cards">
            <h2>3 years</h2>
            <h5>Experience</h5>
          </div>
          <div className="hero-cards">
            <h2>5+</h2>
            <h5>Projects Completed</h5>
          </div>
          <div className="hero-cards">
            <h2>From 20</h2>
            <h5>Countries</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
