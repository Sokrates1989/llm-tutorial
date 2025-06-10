import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";
import MobileBottomNav from "../../skeleton/navigation/MobileBottomNav";

// Components.
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";


function CarSalesTrainTest() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <> 
      <Header 
        title={t("train_test.title")} 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="app-body">
        <Sidebar 
          currentSelection="train_test" 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="page-wrapper">
          {/* Desktop Navigation (hidden on mobile) */}
          <div className="desktop-nav">
            <Navigation currentSelection="train_test" />
          </div>
          {/* Mobile Navigation */}
          <MobileBottomNav currentSelection="train_test" />


          <div className="main-content">
            <h2>{t("train_test.predictor_heading")}</h2>
            <Plot plotEndpoint="plot-train-test" />
            <PredictionInput />
          </div>


          <Footer />
        </div>
      </div>
    </>
  );
}

export default CarSalesTrainTest;
