import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Header from './components/layout/Header'
import Home from './pages/home/Home';
import HowItWorks from './pages/home/HowItWorks';
import Products from './pages/home/Products'
import Impact from './pages/home/Impact';
import Footer from './components/layout/Footer';
import MainLayout from './components/layout/MainLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import AirQtyDash from './pages/dashboard/AirQtyDashbd';
import MapExplore from './pages/dashboard/MapExplore';
import LasepaPopup from './pages/dashboard/LasepaPopup';
import Notification from './pages/dashboard/settings/Notification';
import Profile from './pages/dashboard/settings/Profile';
import Privacy from './pages/dashboard/settings/Profile';
import HelpSupport from './pages/dashboard/settings/HelpSupport';
import './index.css';
import { Import } from 'lucide-react';

function App() {
  return (
    <>
    {/* Debug element */}
    <div style={{ display: 'none' }}>React is working</div>

    <Router>
      <Routes>
        {/* Auth Routes (No Header/Footer) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Main Layout Routes (with Header/Footer) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="impact" element={<Impact />} />
        </Route>

      
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/air-qty-dashbd" element={<AirQtyDash />} />
          <Route path="/dashboard/map-explore" element={<MapExplore />} />
          <Route path="/dashboard/lasepa-popup" element={<LasepaPopup />} />
          <Route path="settings/profile" element={<Privacy />} />
        </Route>
    
      </Routes>
    </Router>
    </>
  );
}

export default App;