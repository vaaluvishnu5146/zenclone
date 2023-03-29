import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Appheader({ journeyName = "", routes = [] }) {
  const {
    userName = "",
    email = "",
    role = "",
    greet = () => {},
    course = "",
  } = useAuth();
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
        {userName && <div className="profile-circle">{userName[0]}</div>}
      </div>
    </div>
  );
}
