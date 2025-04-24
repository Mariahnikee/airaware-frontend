import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet /> {/* This is where page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;