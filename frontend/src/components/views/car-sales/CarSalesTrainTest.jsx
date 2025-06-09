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


function CarSalesTrainTest() {
  const { t } = useTranslation();
  return (
    <>    
      <Header title={t("train_test.title")} />
      <div className="app-body">
        <Sidebar currentSelection="train-test" />
        <div className="page-wrapper">
          <Navigation currentSelection="train-test" />


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
