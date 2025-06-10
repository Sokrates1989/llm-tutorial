import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Header, footer, Sidebar, Navigation.
import Header from "../skeleton/header/Header";
import Footer from "../skeleton/footer/Footer";
import Sidebar from "../skeleton/sidebar/Sidebar";
import MobileBottomNav from "../skeleton/navigation/MobileBottomNav";

// Test component.
import Test from "./test/Test";


function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Header 
        title={t("home.title")} 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="app-body">
        <Sidebar 
          currentSelection="home" 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="page-wrapper">
          <MobileBottomNav currentSelection="home" />

          
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
