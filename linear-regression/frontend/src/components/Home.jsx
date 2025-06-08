import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Header, footer, Navigation.
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./navigation/Navigation";

// Test component.
import Test from "./Test";

// Car sales module.
import CarSales from "./car-sales/CarSales";


function App() {
  return (
    <>
      <Header title="Property based Header"/>

      <Test />

      <CarSales />

      <Footer />
    </>
  );
}

export default App;
