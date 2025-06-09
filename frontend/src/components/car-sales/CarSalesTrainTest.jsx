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


function CarSalesTrainTest() {
  return (
    <>
      <Sidebar currentSelection="train-test" />

      <div className="main-content">
        <Header title="Linear Regression - Train/Test" />
        <Navigation currentSelection="train-test" />

        <div className="car-sales-container">
          <h2>Car Sales Train Test</h2>
          <Plot plotEndpoint="plot-train-test" />
          <PredictionInput />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default CarSalesTrainTest;
