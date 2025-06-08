import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css"; 

function Navigation({ currentSelection }) {
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="main-nav">
      <Link className={isActive("home")} to="/">Home</Link>
      <Link className={isActive("car-sales")} to="/car-sales">Car Sales</Link>
      <Link className={isActive("train-test")} to="/car-sales-train-test">Train/Test</Link>
    </nav>
  );
}

export default Navigation;
