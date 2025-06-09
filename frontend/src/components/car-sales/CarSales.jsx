import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../sidebar/Sidebar";
import Navigation from "../navigation/Navigation";

// Components.
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";
import "./styles/car-sales.css"; 


function CarSales() {
  return (
    <>
      <Sidebar currentSelection="car-sales" />

      <div className="main-content">
        <Header title="Linear Regression - Car Sales" />
        <Navigation currentSelection="car-sales" />
        
        <div className="car-sales-container">
          <h2>Car Sales Predictor</h2>
          <Plot />
          <PredictionInput />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default CarSales;
