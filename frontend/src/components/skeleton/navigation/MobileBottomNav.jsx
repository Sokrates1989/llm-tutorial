import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCar, FaFlask  } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./navigation.css"; 

export default function MobileBottomNav(currentSelection) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" className={`mobile-tab ${isActive("home")}`}>
        <FaHome className="nav-icon" />
        <span className="nav-label">{t("sidebar.home")}</span>
      </NavLink>
      <NavLink to="/car-sales" className={`mobile-tab ${isActive("car_sales")}`}>
        <FaCar className="nav-icon" />
        <span className="nav-label">{t("sidebar.car_sales")}</span>
      </NavLink>
      <NavLink to="/car-sales-train-test" className={`mobile-tab ${isActive("train-test")}`}>
        <FaFlask className="nav-icon" />
        <span className="nav-label">{t("sidebar.train_test")}</span>
      </NavLink>
    </nav>
  );
}