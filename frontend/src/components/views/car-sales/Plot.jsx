import React, { useEffect, useState } from "react";
import api from "../../../api";

export default function Plot({ plotEndpoint = "plot" }) {
  const [plotUrl, setPlotUrl] = useState(null);

  useEffect(() => {
    async function loadPlot() {
      const url = await api.carSales.fetchPlotImageUrl(plotEndpoint);
      setPlotUrl(url);
    }
    loadPlot();
  }, [plotEndpoint]);

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Price vs Kilometer</h3>
      {plotUrl ? (
        <img
          src={plotUrl}
          alt="Car Price Plot"
          style={{ maxWidth: "100%", border: "1px solid #ccc", borderRadius: "8px" }}
        />
      ) : (
        <p>Loading plot...</p>
      )}
    </div>
  );
}
