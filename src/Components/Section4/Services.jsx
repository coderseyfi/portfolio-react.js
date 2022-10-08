import React from "react";

import "./Services.css";
import { GiSpiderWeb, GiAbstract061, GiDiagram } from "react-icons/gi";
function Services() {
  const serviceList = [
    {
      icon: <GiSpiderWeb />,
      title: "Web development",
    },
    {
      icon: <GiAbstract061 />,
      title: "Web design",
    },
    {
      icon: <GiDiagram />,
      title: "Web development",
    },
  ];
  return (
    <div className="service-container">
      <h2 clas>Services that I provide</h2>
      <div className="service-cards-container">
        {serviceList.map(({ icon, title }) => (
          <div className="service-card">
            <div className="service-card-icon">{icon}</div>
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
