import React from "react";
import { usePredictionInput } from "./functions/usePredictionInput";

function PredictionInput() {
  const {
    kilometer,
    setKilometer,
    price,
    error,
    handlePredict,
  } = usePredictionInput();

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Predict Price by Kilometer</h3>
      <input
        type="number"
        placeholder="Enter kilometers"
        value={kilometer}
        onChange={(e) => setKilometer(e.target.value)}
        min={5000}
        max={200000}
        step={5000}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={handlePredict}>Predict</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {price !== null && (
        <p style={{ marginTop: "1rem" }}>
          🚗 Estimated Price: <strong>€{price}</strong>
        </p>
      )}
    </div>
  );
}

export default PredictionInput;
