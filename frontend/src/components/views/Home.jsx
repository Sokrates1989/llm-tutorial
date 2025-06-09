import React from "react";
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../skeleton/header/Header";
import Footer from "../skeleton/footer/Footer";
import Sidebar from "../skeleton/sidebar/Sidebar";
import Navigation from "../skeleton/navigation/Navigation";

// Test component.
import Test from "./test/Test";


function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("home.title")} />
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
