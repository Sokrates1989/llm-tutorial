import React from "react";
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";

// Components.
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";


function CarSales() {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("car_sales.title")} />
      <div className="app-body">
        <Sidebar currentSelection="car-sales" />
        <div className="page-wrapper">
          <Navigation currentSelection="car-sales" />


          <div className="main-content">
            <h2>{t("car_sales.predictor_heading")}</h2>
            <Plot />
            <PredictionInput />
          </div>


          <Footer />
        </div>
      </div>
    </>
  );
}

export default CarSales;
