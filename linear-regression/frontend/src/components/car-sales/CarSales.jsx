import React from "react";
import Plot from "./Plot";
import PredictionInput from "./PredictionInput";

function CarSales() {
  return (
    <div className="car-sales-container">
      <h2>Car Sales Predictor</h2>
      <Plot />
      <PredictionInput />
    </div>
  );
}

export default CarSales;
