import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
      
        <header className="site-header bg-[#ffffff] shadow-sm flex py-5 px-[128px] justify-between items-center border-b-1 border-[#265B80] border-opacity-100" >
        <div className="flex">
          <Link to="/">
          <img
            src="logo.png"
            alt="Air Aware Logo"
            className="h-8 "
          />
          </Link>
          <span className="ml-2 text-[#88C6A1] font-medium">Air Aware</span>
        </div>

        <nav className="main-nav hidden md:flex">
  <ul className="flex space-x-6">
    <li className='text-[#1E4866] hover:text-blue-900'><Link to="/">Home</Link></li>
    <li className='text-[#1E4866] hover:text-blue-900'><Link to="/how-it-works">How It Works</Link></li>
    <li className='text-[#1E4866] hover:text-blue-900'><Link to="/products">Products</Link></li>
    <li className='text-[#1E4866] hover:text-blue-900'><Link to="/impact">Impact</Link></li>
  </ul>
</nav>


         <div className="auth-links">
        <Link to="/signup" className="login-btn h-[44px] px-4 py-2.5 text-[#265B80] rounded hover:bg-[#c7cfd5] border border-[#265B80]">Log In</Link>
        </div>  

        
      </header>
  )
}

export default Header