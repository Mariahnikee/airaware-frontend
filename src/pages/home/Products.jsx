import { useState } from 'react';


export default function Product() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Products Badge */}
        <div className="flex justify-center mt-8">
          <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center ">Products</span>
        </div>
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-[40px] font-semibold self-stretch text-[#265B80] font-poppins mb-3">
            Protect Your Health with the Right Air Quality Solutions
          </h1>
          <p className="text-[#1E4866] self-start ">
            Shop high-quality air monitors, purifiers, and protective masks for a safer home and workspace.
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Air Purifier */}
             <div className="border border-gray-200  overflow-hidden bg-[#eaebec]">
              <div className="h-64 bg-white flex items-center justify-center rounded-lg m-4">
                <img src="/images/productimg1.png" alt="air purifier" className="max-h-full w-100 object-contain" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#265B80] mb-2">Air Purifier</h2>
                <p className="text-gray-600 mb-4">
                Breathe cleaner indoor air with advanced air purifiers. Equipped with HEPA and activated carbon filters, they remove dust, allergens, smoke, and harmful particles, making your home or workspace a safer environment.
                </p>
                <button className="border border-[#265B80] text-[#265B80] px-4 py-2 rounded hover:bg-blue-50">
                  Buy on Amazon
                </button>
              </div>
            </div>
            
            {/* Face Masks */}
            <div className="border border-gray-200  overflow-hidden bg-[#eaebec]">
              <div className="h-64 bg-white flex items-center justify-center rounded-lg m-4">
                <img src="images/productimg2.png" alt="Face mask with respirator valve" className="max-h-full w-100 object-contain" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#265B80] mb-2">Face Masks</h2>
                <p className="text-gray-600 mb-4">
                  Shield yourself from pollution and airborne particles with high-quality face masks. Designed for comfort and superior filtration, our masks help you breathe safer in high-pollution areas.
                </p>
                <button className="border border-[#265B80] text-[#265B80] px-4 py-2 rounded hover:bg-blue-50">
                  Buy on Amazon
                </button>
              </div>
            </div>
          </div>
          
          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leviot Air Purifier */}
            <div className="border border-gray-200  overflow-hidden bg-[#eaebec]">
              <div className="h-64 bg-white flex items-center justify-center rounded-lg m-4">
                <img src="images/productimg3.png" alt="Leviot air purifier" className="max-h-full w-100 object-contain" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#265B80] mb-2">Leviot Air Purifier</h2>
                <p className="text-gray-600 mb-4">
                  Breathe cleaner air with the Levoit Core 300. This compact purifier uses a True HEPA filter to capture 99.97% of dust, allergens, smoke, and airborne particles. Perfect for bedrooms or small spaces.
                </p>
                <button className="border border-[#265B80] text-[#265B80] px-4 py-2 rounded hover:bg-blue-50">
                  Buy on Amazon
                </button>
              </div>
            </div>
            
            {/* Air Quality Monitor */}
            <div className="border border-gray-200  overflow-hidden bg-[#eaebec]">
              <div className="h-64 bg-white flex items-center justify-center rounded-lg m-4">
                <img src="images/productimg4.png" alt="Air quality monitor on wooden table" className="max-h-full w-100 object-contain" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#265B80] mb-2">Air Quality Monitor</h2>
                <p className="text-gray-600 mb-4">
                  Stay informed with real-time air quality tracking. Our smart air monitors detect harmful pollutants like PM2.5, CO2, and VOCs, helping you take action before the air around you affects your health.
                </p>
                <button className="border border-[#265B80] text-[#265B80] px-4 py-2 rounded hover:bg-blue-50">
                  Buy on Amazon
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}