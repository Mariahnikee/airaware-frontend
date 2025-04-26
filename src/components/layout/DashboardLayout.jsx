import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

function DashboardLayout() {
  return (
    <div className="dashboard-layout flex h-screen overflow-hidden">
      <SideNav />
      <main>
        <Outlet /> {/* This is where page content will be rendered */}
      </main>
    </div>
  );
}

export default DashboardLayout;
