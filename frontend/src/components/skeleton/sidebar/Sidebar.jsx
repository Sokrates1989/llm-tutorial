import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { FaHome, FaCar, FaFlask, FaTimes  } from "react-icons/fa";
import "./sidebar.css";

function Sidebar({ currentSelection, isOpen, onClose }) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-close" onClick={onClose}>
        <FaTimes />
      </button>
      <nav className="sidebar-nav">
        <Link className={`sidebar-link ${isActive("home")}`} to="/">
          <FaHome className="icon" /> {t("sidebar.home")}
        </Link>
        <Link className={`sidebar-link ${isActive("car_sales")}`} to="/car-sales">
          <FaCar className="icon" /> {t("sidebar.car_sales")}
        </Link>
        <Link className={`sidebar-link ${isActive("train_test")}`} to="/car-sales-train-test">
          <FaFlask className="icon" /> {t("sidebar.train_test")}
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
