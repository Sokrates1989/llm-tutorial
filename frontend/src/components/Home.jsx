import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";
import Navigation from "./navigation/Navigation";

// Test component.
import Test from "./test/Test";


function Home() {
  return (
    <>
      <Sidebar currentSelection="home" />

      <div className="main-content">
        <Header title="Linear Regression" />
        <Navigation currentSelection="home" />
        <Test />
        <Footer />
      </div>
    </>
  );
}

export default Home;
