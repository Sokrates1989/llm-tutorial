import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "../../skeleton/header/Header";
import Footer from "../../skeleton/footer/Footer";
import Sidebar from "../../skeleton/sidebar/Sidebar";
import Navigation from "../../skeleton/navigation/Navigation";

// Components.
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";


function CarSalesTrainTest() {
  return (
    <>    
      <Header title="Linear Regression - Train/Test" />
      <div className="app-body">
        <Sidebar currentSelection="train-test" />
        <div className="page-wrapper">
          <Navigation currentSelection="train-test" />


          <div className="main-content">
            <h2>Car Sales Train Test</h2>
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
