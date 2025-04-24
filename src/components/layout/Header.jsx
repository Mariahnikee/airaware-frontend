import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // If using Lucide for icons (optional)

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header bg-white/80 backdrop-blur-md shadow-sm flex flex-wrap py-5 px-4 md:px-[128px] justify-between items-center border-b border-[#cae2e4]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <Link to="/">
            <img src="logo.png" alt="Air Aware Logo" className="h-8" />
          </Link>
          <span className="ml-2 text-[#88C6A1] font-medium">Air Aware</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1E4866]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`w-full md:w-auto ${
          menuOpen ? "block" : "hidden"
        } md:flex mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto text-center md:text-left">
          <li className="text-[#1E4866] hover:text-blue-900 py-2 md:py-0">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#1E4866] hover:text-blue-900 py-2 md:py-0">
            <Link to="#">How It Works</Link>
          </li>
          <li className="text-[#1E4866] hover:text-blue-900 py-2 md:py-0">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-[#1E4866] hover:text-blue-900 py-2 md:py-0">
            <Link to="/impact">Impact</Link>
          </li>
        </ul>
      </nav>

      {/* Auth Links */}
      <div
        className={`auth-links ${
          menuOpen ? "block" : "hidden"
        } md:block mt-4 md:mt-0`}
      >
        <Link
          to="/login"
          className="login-btn h-[44px] px-4 py-2.5 text-[#265B80] rounded hover:bg-[#c7cfd5] border border-[#265B80] block text-center"
        >
          Log In
        </Link>
      </div>
    </header>
  );
}

export default Header;
