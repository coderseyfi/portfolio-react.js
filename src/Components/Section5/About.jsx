import React from "react";
import "./About.css";
import avatar from "../../images/seyfi.jpg";
import Calendly from "../Calendly/Calendly";
function About() {
  return (
    <div className="about-me-container">
      <h2>
        Lets Book a call, <br />
        So that we discuss about your next step
      </h2>
      <div className="about-me-content">
        <div className="about-me-avatar">
          <img src={avatar} alt="" />
          <p>
            <strong>@Seyfaddin:</strong>
            Motivated Programmer with exceptional background spent in IT
            industry. Engaging demeanor known for working well in
            deadline-driven environments. Quickly masters new software packages
            and hardware technologies.
          </p>
        </div>
        <div className="about-me-calendar">
          <Calendly />
        </div>
      </div>
    </div>
  );
}

export default About;
