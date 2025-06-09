import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaHome, FaChartLine, FaCar, FaFlask } from "react-icons/fa";
import "./sidebar.css";

function Sidebar({ currentSelection }) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link className={`sidebar-link ${isActive("home")}`} to="/">
          <FaHome className="icon" /> {t("sidebar.home")}
        </Link>
        <Link className={`sidebar-link ${isActive("car-sales")}`} to="/car-sales">
          <FaCar className="icon" /> {t("sidebar.car_sales")}
        </Link>
        <Link className={`sidebar-link ${isActive("train-test")}`} to="/car-sales-train-test">
          <FaFlask className="icon" /> {t("sidebar.train_test")}
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
