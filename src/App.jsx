import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Header from './components/layout/Header'
import Home from './pages/Home';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  );
}

export default App;
