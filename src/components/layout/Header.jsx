import React from 'react'

function Header() {
  return (
      <header className="bg-white shadow-[0_-2px_10px_0_rgba(0,0,0,0.10)] flex py-4 px-[128px] justify-between items-center ">
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Air Aware Logo"
            className="h-8 "
          />
          <span className="ml-2 text-[#88C6A1] font-medium">Air Aware</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-[#1E4866] hover:text-blue-900">
            Home
          </a>
          <a href="#" className="text-[#1E4866] hover:text-blue-900">
            How it works
          </a>
          <a href="#" className="text-[#1E4866] hover:text-blue-900">
            Products
          </a>
          <a href="#" className="text-[#1E4866] hover:text-blue-900">
            Impact
          </a>
        </nav>
        <button className=" h-[44px] px-4 py-2.5 text-[#265B80] rounded hover:bg-[#c7cfd5] border border-[#265B80]">
          Log In
        </button>
      </header>
  )
}

export default Header