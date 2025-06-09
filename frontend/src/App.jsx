import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Our main pages.
import Home  from "./components/views/Home";
import CarSales from "./components/views/car-sales/CarSales";
import CarSalesTrainTest from "./components/views/car-sales/CarSalesTrainTest";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-sales" element={<CarSales />} />
        <Route path="/car-sales-train-test" element={<CarSalesTrainTest />} />
      </Routes>
    </Router>
  );
}

export default App;
