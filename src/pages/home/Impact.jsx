import { useState } from 'react';

export default function Impact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="real-time-air bg-white">
        <div className="flex px-[128px] items-center gap-8">
          <div className="flex max-w-[576px] flex-col items-start gap-8 shrink-0">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center  ">
              Features
            </span>
            <h2 className="text-[40px] font-semibold self-stretch text-[#265B80] font-poppins">
              Real-Time Air Quality Monitoring
            </h2>
            <p className="text-[#1E4866] self-start ">
              Get instant air quality reports for your location. Whether at
              home, work, or traveling, Air Aware provides live AQI data,
              pollution levels, and weather conditions, helping you make
              informed decisions for a healthier life.
            </p>
          </div>

          <div className="md:w-1/2">
              <div className="text-center mb-6">
                <h3 className="text-green-600 font-medium mb-2">How your support helps?</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-blue-800 font-semibold mb-2">Awareness & Education</h3>
                  <p className="text-sm text-gray-600">
                    Support campaigns that educate people on air pollution risks.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-blue-800 font-semibold mb-2">Research & Advocacy</h3>
                  <p className="text-sm text-gray-600">
                    Drive change by funding scientific research on air quality.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-blue-800 font-semibold mb-2">Medical Aid for Victims</h3>
                  <p className="text-sm text-gray-600">
                    Provide oxygen support, treatments, and medical care.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <h3 className="text-blue-800 font-semibold mb-2">Clean Air Initiatives</h3>
                  <p className="text-sm text-gray-600">
                    Help fund air purifiers, masks, and protective measures.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>


      {/* Articles Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="px-4 py-1 bg-green-200 text-green-700 rounded-full text-sm">
              Articles
            </span>
            
            <h2 className="text-3xl font-bold text-blue-800 mt-6 mb-4">
              Stay Informed, Stay Protected
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Knowledge is power when it comes to air quality and health. Explore expert articles, research insights, and practical guides to understand air pollution, its effects, and how to protect yourself and your loved ones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="/api/placeholder/600/300" 
                alt="Factory pollution" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  The Hidden Dangers of Air Pollution
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Learn how air pollution affects your lungs, heart, and overall well-being, even when you can't see it.
                </p>
                
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="/api/placeholder/600/300" 
                alt="Woman wearing mask" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  How to Protect Yourself from Poor Air Quality
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Practical tips on minimizing exposure to pollution, from using air purifiers to wearing the right masks.
                </p>
                
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="/api/placeholder/600/300" 
                alt="Air quality index chart" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Understanding the Air Quality Index (AQI)
                </h3>
                
                <p className="text-gray-600 mb-4">
                  What do AQI numbers mean, and how can you use them to stay safe? A simple guide to air quality readings.
                </p>
                
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="/api/placeholder/600/300" 
                alt="Chest X-ray" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Protecting Your Lungs
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Simple steps to reduce health risks from poor air quality—indoors and outdoors.
                </p>
                
                <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}