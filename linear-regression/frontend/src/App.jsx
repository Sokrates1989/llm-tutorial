import React from "react";

// Header, footer.
import Header from "./components/Header";
import Footer from "./components/Footer";

// Test component.
import Test from "./components/Test";


function App() {
  return (
    <>
      <Header title="Property based Header"/>

      <Test />

      <Footer />
    </>
  );
}

export default App;
