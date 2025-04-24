import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Settings } from 'lucide-react';

function SideNav() {
  return (
    <div className="w-[252px] flex-shrink-0 pt-56px pb-[154px] bg-white items-center gap-14 flex flex-col">
      <div className="p-4 h-16 flex items-start justify-items-start bg-white">
        <Link to="/">
          <img 
          src="logo.png"
           alt="Air Aware Logo" className="h-8" />
          <span className="ml-2 text-[#88C6A1] font-medium">Air Aware</span>
        </Link>
      </div>

      <nav className="flex-1">
        <ul>
          <li className='flex items-center p-4 text-[#265B80] hover:bg-[#265B80] hover:text-[#fff]'>
            <Link to="/dashboard/air-qty-dashbd"><Home className="mr-3" size={20} /><span>Home</span></Link>
          </li>
        </ul>
        <ul>
          <li className='flex items-center p-4 text-[#265B80] hover:bg-[#265B80] hover:text-[#fff]'>
            <Link to="/dashboard/map-explore"><Compass className="mr-3" size={20} /><span>Explore</span></Link>
          </li>
        </ul>
        <ul>
          <li className='flex items-center p-4 text-[#265B80] hover:bg-[#265B80] hover:text-[#fff]'>
            <Link to="settings/privacy"><Settings className="mr-3" size={20} /><span>Setting</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
