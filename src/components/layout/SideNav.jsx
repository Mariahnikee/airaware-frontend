import React from "react";
import { Link } from "react-router-dom";
import { Home, Compass, Settings } from "lucide-react";

function SideNav() {
  return (
    <div className="w-[200px] flex-shrink-0 pt-7 bg-white items-center gap-10 flex flex-col">
      <div className="flex">
        <Link to="/">
          <img src="/logo.png" alt="Air Aware Logo" className="h-8 " />
        </Link>
        <Link to="/">
          <span className="ml-2 text-[#88C6A1] font-medium">Air Aware</span>
        </Link>
      </div>

      <nav className="flex-1">
        <ul>
          <li>
            <div className="flex items-center p-4 text-[#265B80] hover:bg-[#265B80] hover:text-[#fff]">
              <Link
                to="/dashboard/air-qty-dashbd"
                className="flex items-center"
              >
                <Home size={20} />
                <span className="ml-2 font-medium">Home</span>
              </Link>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div className="flex items-center p-4 text-[#265B80] hover:bg-[#265B80] hover:text-[#fff]">
              <Link to="/dashboard/map-explore" className="flex items-center">
                <Compass size={20} />
                <span className="ml-2 font-medium">Explore</span>
              </Link>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="flex items-center p-4 text-[#265B80] hover:bg-[#265B80] hover:text-[#fff]">
              <Link to="settings/profile" className="flex items-center">
                <Settings size={20} />
                <span className="ml-2 font-medium">Settings</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
