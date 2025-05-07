import { useState } from "react";
import LocationPopup from "../../popup/LocationPopup";

import {
  MoreVertical,
  Home,
  Compass,
  Settings,
  PlusSquare,
  Search,
  Bell,
  Grid2x2,
  SquarePlus
} from "lucide-react";

export default function AirQtyDashbd() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#FAFAFA] px-2 relative">
      {/* Top Navigation */}
      <header className="h-16 bg-[#FAFAFA] flex items-center justify-between px-6 pt-8">
        <div className="flex items-center">
          
            <Grid2x2 size={18} className="mt-1 mx-2" />
       
          <h1 className="text-[28px] font-[500] p-1 text-[#525252]">Home</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={18} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={18} />
          </button>

          <button className="h-8 w-8 rounded-full hover:bg-gray-100">
            <img
              src="/images/profilepic.png"
              alt="profile picture"
              className="h-8"
            />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 mt-4">
        <p className="text-[32px] font-[500] text-[#525252] font-inter leading-[36px] pb-1">
          Welcome John!
        </p>
        <p className="text-gray-600 mb-4">
          Let's check the air quality around you
        </p>
        <h3 className="text-[#525252] font-inter text-[24px] font-medium leading-[36px]">
          Watchlists (0)
        </h3>

        {/* Add Location Card */}
        <div className="flex bg-white rounded-[10px] w-[330px] h-[270px] flex-col justify-center items-center gap-6 mb-4">
          <div className="text-center">
            <h3 className="text-[#404040] text-center font-inter text-[18px] font-medium leading-[27px]">
              No Location Selected
            </h3>
            <p className="text-[#737373] text-center font-inter text-[14px] font-normal leading-[21px]">
              Please select one or more Locations
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={handleOpenModal}
                className="align-middle mt-4"
              >
                <SquarePlus size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              Breaking Down the Air Quality Index (AQI):
            </h2>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              What It Means for You
            </h3>
            <p className="text-gray-600 mb-6">
              The Air Quality Index (AQI) helps you understand whether the air
              is safe to breathe. But what do the colors and numbers mean? This
              video explains AQI in simple terms so you can make informed health
              decisions.
            </p>
            <div className="flex gap-6">
            <button className="px-4 py-2 bg-[#265B80] text-white rounded hover:bg-[#838f96]">
              Show me how
            </button>
            <button className="px-4 py-2 rounded-[3px] border border-[#D3E2EC] text-[#1E4866] text-center hover:bg-[#838f96]">
            Learn More
            </button>
            </div>
            
          </div>

          <div className="bg-white shadow-sm p-6 rounded-[12px] bg-gradient-to-b from-[rgba(19,197,255,0.10)] to-[rgba(255,231,186,0.10)]">
            <h2 className="text-xl font-medium text-gray-800 my-6">
              Try the Pollupop Game!
            </h2>
            <p className="text-gray-600 mb-6">
              Test your skills by bursting air pollutants while avoiding clean
              air bubbles. How high can you score?
            </p>
            <button className="px-4 py-2 rounded-[3px] border border-[#D3E2EC] text-[#1E4866] hover:bg-[#838f96]">
              Play Now
            </button>
          </div>
        </div>
      </main>

      {/* Location Popup */}
     {showModal && (
  <div className="fixed inset-0 z-50">
    <div
      className="absolute inset-0 bg-white/20
 bg-opacity-10 backdrop-blur-sm"
      onClick={handleCloseModal}
    ></div>
    <div className="flex items-center justify-center h-full relative z-50">
      <LocationPopup onClose={handleCloseModal} />
    </div>
  </div>
)}

    </div>
  );
}
