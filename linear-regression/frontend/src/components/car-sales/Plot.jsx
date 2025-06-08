import React, { useEffect, useState } from "react";
import api from "../../api";

function Plot() {
  const [plotUrl, setPlotUrl] = useState(null);

  useEffect(() => {
    api.carSales.fetchPlotImageUrl().then(setPlotUrl);
  }, []);

  if (!plotUrl) return <p>Loading plot...</p>;

  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Price vs Kilometer</h3>
      <img
        src={plotUrl}
        alt="Car Price Plot"
        style={{ maxWidth: "100%", border: "1px solid #ccc", borderRadius: "8px" }}
      />
    </div>
  );
}

export default Plot;
