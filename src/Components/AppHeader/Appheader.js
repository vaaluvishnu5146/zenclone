import React from "react";
import { Link } from "react-router-dom";

export default function Appheader({ journeyName = "", routes = [] }) {
  return (
    <div id="zen-header-bar" className="zen-header">
      <h4>{journeyName}</h4>
      <div className="zen-sub-journey-container">
        {routes &&
          routes.map((route, index) => (
            <Link key={`zen-sub-jouney-link-${index}`} to={route.route}>
              <p className="zen-sub-journey-link">{route.label}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
