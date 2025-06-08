import React from "react";

// Header, footer.
import Header from "./components/Header";
import Footer from "./components/Footer";

// Test component.
import Test from "./components/Test";

// Car sales module.
import CarSales from "./components/car-sales/CarSales";


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
