import React from "react";
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";
import "./styles/car-sales.css"; 

function CarSalesTrainTest() {
  return (
    <div className="car-sales-container">
      <h2>Car Sales Predictor</h2>
      <Plot />
      <PredictionInput />
    </div>
  );
}

export default CarSalesTrainTest;
