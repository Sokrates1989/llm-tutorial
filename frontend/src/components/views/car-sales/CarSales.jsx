import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";

// Components.
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";


function CarSales() {
  return (
    <>
      <Header title="Linear Regression - Car Sales" />
      <div className="app-body">
        <Sidebar currentSelection="car-sales" />
        <div className="page-wrapper">
          <Navigation currentSelection="car-sales" />


          <div className="main-content">
            <h2>Car Sales Predictor</h2>
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
