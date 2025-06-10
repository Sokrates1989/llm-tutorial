import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navigation.css";

function SubNavigation2({ currentSelection }) {
  const { t } = useTranslation();
  const isActive = (id) => (currentSelection === id ? "active" : "");

  return (
    <nav className="sub-nav-2">
          <Link className={`nav-link ${isActive("home")}`} to="/">{t("sidebar.home")}</Link>
          <Link className={`nav-link ${isActive("car_sales")}`} to="/car-sales">{t("sidebar.car_sales")}</Link>
          <Link className={`nav-link ${isActive("train_test")}`} to="/car-sales-train-test">{t("sidebar.train_test")}</Link>
    </nav>
  );
}

export default SubNavigation2;
