import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Mon feed</li>
        </NavLink>
        <NavLink to="/about">
          <li>Ma bio</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
