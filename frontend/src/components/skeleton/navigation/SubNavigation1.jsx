import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function SubNavigation1({ currentSelection }) {
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="sub-nav-1">
      <Link className={`nav-link ${isActive("home")}`} to="/">Home</Link>
      <Link className={`nav-link ${isActive("car-sales")}`} to="/car-sales">Car Sales</Link>
      <Link className={`nav-link ${isActive("train-test")}`} to="/car-sales-train-test">Train/Test</Link>
    </nav>
  );
}

export default SubNavigation1;
