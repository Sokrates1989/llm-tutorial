import { useState } from "react";
import api from "../../../../api";

export function usePredictionInput() {
  const [kilometer, setKilometer] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setPrice(null);
    setError("");

    const km = parseInt(kilometer, 10);
    if (isNaN(km) || km < 0) {
      setError("Please enter a valid positive number.");
      return;
    }

    const result = await api.carSales.fetchPredictedPrice(km);
    if (result.error) {
      setError(result.error);
    } else {
      setPrice(result.estimated_price);
    }
  };

  return {
    kilometer,
    setKilometer,
    price,
    error,
    handlePredict,
  };
}
