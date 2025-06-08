import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaCar, FaFlask } from "react-icons/fa";
import "./sidebar.css";

function Sidebar({ currentSelection }) {
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <aside className="sidebar">
      <div className="sidebar-title">🚗 Linear Regression</div>
      <nav className="sidebar-nav">
        <Link className={`sidebar-link ${isActive("home")}`} to="/">
          <FaHome className="icon" /> Home
        </Link>
        <Link className={`sidebar-link ${isActive("car-sales")}`} to="/car-sales">
          <FaCar className="icon" /> Car Sales
        </Link>
        <Link className={`sidebar-link ${isActive("train-test")}`} to="/car-sales-train-test">
          <FaFlask className="icon" /> Train/Test
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
