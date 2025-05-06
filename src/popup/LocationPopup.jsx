import React, { useState } from 'react';
import { X } from 'lucide-react'; // Importing the 'X' icon for close functionality

function LocationPopup({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center w-[539px] p-[24px] rounded-[12px] bg-white gap-10 relative">
      {/* Close Button */}
      <button
        onClick={onClose} // This will trigger the onClose function passed as a prop
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200"
      >
        <X size={24} className="text-[#525252]" />
      </button>

      <div>
        <img src="/images/cloud.png" alt="cloud Logo" className="h-[128px] w-[128px]" />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <p className="text-[#525252] font-inter text-[22px] font-medium leading-[125%]">Welcome to Air Aware!</p>
        <span className="text-[#525252] font-inter font-[400] leading-[150%]">
          This platform helps you stay safe by tracking the air you breathe. Let’s start by adding your location.
        </span>
      </div>
      <div className="flex items-start gap-6 self-stretch">
        <button className="text-[#1E4866] px-[32px] py-[16px] justify-center items-center flex-1 rounded-[3px] border border-[#D3E2EC]">
          Maybe Later
        </button>
        <button className="bg-[#265B80] text-[#ffffff] px-[32px] py-[16px] justify-center items-center gap-[8px] flex-1 rounded-[3px] border border-[#D3E2EC]">
          Add Location
        </button>
      </div>
    </div>
  );
}

export default LocationPopup;
