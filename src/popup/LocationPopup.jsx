import React from 'react';
import { useNavigate } from "react-router-dom";
import { X } from 'lucide-react'; 

function LocationPopup({ onClose }) {
  const navigate = useNavigate();

  const handleAddLocation = () => {
    onClose(); // optional: close popup before navigating
    navigate("/dashboard/map-explore");
  };

  return (
    <div className="flex flex-col items-center justify-center w-[539px] p-[24px] rounded-[12px] bg-white gap-10 relative border border-gray-300">
      
      {/* Close Icon */}
      <button
        onClick={onClose} 
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
      >
        <X size={24} className="text-[#525252]" />
      </button>

      {/* Cloud Image */}
      <div>
        <img src="/images/cloud.png" alt="cloud Logo" className="h-[128px] w-[128px]" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="text-[#525252] font-inter text-[22px] font-medium leading-[125%]">
          Welcome to Air Aware!
        </p>
        <span className="text-[#525252] font-inter font-[400] leading-[150%]">
          This platform helps you stay safe by tracking the air you breathe. Let’s start by adding your location.
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-start gap-6 self-stretch">
        <button
          onClick={onClose}
          className="text-[#1E4866] px-[32px] py-[16px] justify-center items-center flex-1 rounded-[3px] border border-[#D3E2EC] hover:bg-[#2d6993] hover:text-[#fff]"
        >
          Maybe Later
        </button>
        <button
          onClick={handleAddLocation}
          className="bg-[#265B80] text-[#ffffff] px-[32px] py-[16px] justify-center items-center gap-[8px] flex-1 rounded-[3px] border border-[#D3E2EC] hover:bg-[#2d6993]"
        >
          Add Location
        </button>
      </div>
    </div>
  );
}

export default LocationPopup;
