import { useState } from 'react';
import { Search, Menu, Compass, Home, Settings, Bell } from 'lucide-react';

export default function MapExplore() {
  return (

    <div className="flex-1 flex flex-col overflow-hidden bg-[#FAFAFA] mb-7">
      {/* Top Navigation */}
         <header className="h-16 bg-[#FAFAFA] flex items-center justify-between px-6 pt-4 ">
         <div className="flex items-center">
          <span className="text-xl font-semibold text-gray-700 flex items-center">
            <Compass className="mr-2" size={22} />
            Explore
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
          <Search size={18} />
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell size={18} />
          </button>
          
          <button className="h-8 w-8 rounded-full hover:bg-gray-100 ">
          <img src="/images/profilepic.png" alt="profile picture" className="h-8 " />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-6 py-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Location"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      
      {/* Map Component */}
      <div className="flex-1 overflow-hidden">
        <MapComponent />
      </div>
    </div>
  );
}

function MapComponent() {
  return (
    <div className="relative h-full w-full bg-[#FAFAFA]  px-6" >
      <img
        src="/images/basemap-image.png"
        alt="Map"
        className="object-cover w-full h-full rounded-lg"
      />
    </div>
  );
}