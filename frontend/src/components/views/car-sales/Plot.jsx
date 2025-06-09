import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import api from "../../../api";

export default function Plot({ plotEndpoint = "plot" }) {
  const { t } = useTranslation();
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
      <h3>{t("plot.heading")}</h3>
      {plotUrl ? (
        <img
          src={plotUrl}
          alt={t("plot.alt")}
          style={{ maxWidth: "100%", border: "1px solid #ccc", borderRadius: "8px" }}
        />
      ) : (
        <p>{t("plot.loading")}</p>
      )}
    </div>
  );
}
