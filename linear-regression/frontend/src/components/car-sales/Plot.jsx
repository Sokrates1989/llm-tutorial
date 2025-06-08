import React from "react";
const API_BASE_URL = window._env_?.VITE_BACKEND_URL || "http://localhost:8000";

function Plot() {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Price vs Kilometer</h3>
      <img
        src={`${API_BASE_URL}/car-sales/plot`}
        alt="Car Price Plot"
        style={{ maxWidth: "100%", border: "1px solid #ccc", borderRadius: "8px" }}
      />
    </div>
  );
}

export default Plot;
