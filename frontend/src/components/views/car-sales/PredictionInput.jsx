import React from "react";
import { useTranslation } from 'react-i18next';
import { usePredictionInput } from "./functions/usePredictionInput";

function PredictionInput() {
  const { t } = useTranslation();
  const {
    kilometer,
    setKilometer,
    price,
    error,
    handlePredict,
  } = usePredictionInput();

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>{t("prediction_input.heading")}</h3>
      <input
        type="number"
        placeholder={t("prediction_input.placeholder")}
        value={kilometer}
        onChange={(e) => setKilometer(e.target.value)}
        min={5000}
        max={200000}
        step={5000}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={handlePredict}>{t("prediction_input.button")}</button>

      {error && <p style={{ color: "red" }}>{t("prediction_input.error")}</p>}
      {price !== null && (
        <p style={{ marginTop: "1rem" }}> 
          🚗 {t("prediction_input.resultLabel")} <strong>€{price}</strong>
        </p>
      )}
    </div>
  );
}

export default PredictionInput;
