import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/17085.webp";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="Nav">
      <img src={logo} alt="logo" />
      <div className="Link">
        {location.pathname !== "/" && (
          <NavLink to="/" ClassName="HomeHeader">
            Home
          </NavLink>
        )}
        {location.pathname !== "/employee-list" && (
          <NavLink to="/employee-list" ClassName="EmployeHeader">
            View Current Employees
          </NavLink>
        )}
      </div>
    </nav>
  );
}
