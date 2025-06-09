// src/api/car_sales.js
const API_BASE_URL = window._env_?.VITE_BACKEND_URL || "http://localhost:8000";

export async function fetchPlotImageUrl(endpoint = "plot") {
  try {
    const response = await fetch(`${API_BASE_URL}/car-sales/${endpoint}`);
    if (!response.ok) throw new Error("Failed to load plot image");
    return response.url;
  } catch (err) {
    console.error("Plot fetch error:", err);
    return null;
  }
}

export async function fetchPredictedPrice(kilometer) {
  try {
    const res = await fetch(`${API_BASE_URL}/car-sales/predict?kilometer=${kilometer}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Prediction failed");
    return json;
  } catch (err) {
    console.error("Prediction error:", err);
    return { error: err.message };
  }
}
