// src/components/Test.jsx
import React, { useEffect, useState } from "react";
import api from "../../api";
import "./test.css";

function Test() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    async function fetchStatus() {
      const response = await api.test.checkBackend();
      setMessage(response.message);
    }

    fetchStatus();
  }, []);

  return (
    <>
      <h1 className="backend-message">{message}</h1>
      <br />
    </>
  );
}

export default Test;
