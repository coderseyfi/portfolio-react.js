import React from "react";
import PortfolioProjects from "./PortfolioCards/PortfolioProjects";
import { Link } from "react-router-dom";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <h2>Some of my Works</h2>
        <div className="project-section">
          <PortfolioProjects items={4} />
        </div>
        <Link to="portfolio" className="portfolio-button">
          See More Projects
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
