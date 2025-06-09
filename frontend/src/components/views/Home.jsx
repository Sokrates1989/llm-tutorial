import React from "react";

// Header, footer, Sidebar, Navigation.
import Header from "../skeleton/header/Header";
import Footer from "../skeleton/footer/Footer";
import Sidebar from "../skeleton/sidebar/Sidebar";
import Navigation from "../skeleton/navigation/Navigation";

// Test component.
import Test from "./test/Test";


function Home() {
  return (
    <>
      <Header title="Linear Regression" />
      <div className="app-body">
        <Sidebar currentSelection="home" />
        <div className="page-wrapper">
          <Navigation currentSelection="home" />

          
          <div className="main-content">
            <Test />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
