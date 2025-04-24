import { useState } from 'react';
import { Home } from 'lucide-react';

export default function Impact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans ">

      {/* Hero Section */}
      <section className="real-time-air bg-white py-7">
        <div className="flex px-[128px] items-center gap-8 ">
          <div className="flex max-w-[576px] flex-col items-start gap-8 shrink-0 m-6">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6 items-center justify-center">
            Fundraising & Partnership
            </span>
            <h2 className="text-[40px] font-semibold self-stretch text-[#265B80] font-poppins">
            Take a Stand for Clean Air & Healthier Lives
            </h2>
            <p className="text-[#1E4866] self-start ">
            Air pollution affects millions, causing severe health issues and even loss of life. Through partnerships and donations, we can provide relief, raise awareness, and drive change. Join us in protecting communities and saving lives.
            </p>
            <div className="flex space-x-4">
                <button className="bg-[#265B80] h-14 text-white py-2.5 px-8 justify-center items-center gap-2  rounded-lg hover:bg-blue-700">
                  Donate Today
                </button>
                
                <button className="border border-[#265B80] border-opacity-100 h-14 text-[#265B80] py-2.5 px-8 justify-center items-center gap-2  rounded-lg hover:bg-blue-700">
                  Become a Partner
                </button>
              </div>
          </div>

          <div className="md:w-1/2">
              <div className="text-start mb-6">
                <h3 className="text-green-600 font-medium mb-2 ">How your support helps?</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                    <Home className="mr-3" size={20} />
                  </div>
                  
                  <h3 className="text-[18px] font-semibold text-[#265B80]">Awareness & Education</h3>
                  <p className="text-[#1E4866] font-inter leading-[24px]">
                    Support campaigns that educate people on air pollution risks.
                  </p>
                </div>
                
                <div className="bg-[#FFFEF0] p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                   <Home className="mr-3" size={20} />
                  </div>
                  
                  <h3 className="text-[18px] font-semibold text-[#265B80]">Research & Advocacy</h3>
                  <p className="text-[#1E4866] font-inter leading-[24px]">
                    Drive change by funding scientific research on air quality.
                  </p>
                </div>
                
                <div className="bg-[#FFFEF0] p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                    <Home className="mr-3" size={20} />
                  </div>
                  
                  <h3 className="text-[18px] font-semibold text-[#265B80]">Medical Aid for Victims</h3>
                  <p className="text-[#1E4866] font-inter leading-[24px]">
                    Provide oxygen support, treatments, and medical care.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded mb-4">
                  <Home className="mr-3" size={20} />
                  </div>
                  
                  <h3 className="text-[18px] font-semibold text-[#265B80]">Clean Air Initiatives</h3>
                  <p className="text-[#1E4866] font-inter leading-[24px]">
                    Help fund air purifiers, masks, and protective measures.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>


      {/* Articles Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 ">
            <span className="bg-[#88C6A1] text-white rounded-3xl py-1 px-6  items-center justify-center">
              Articles
            </span>
            
            <h2 className="text-[40px] font-semibold self-stretch text-[#265B80] font-poppins p-4">
              Stay Informed, Stay Protected
            </h2>
            
            <p className="text-[#1E4866] self-start pb-2">
              Knowledge is power when it comes to air quality and health. Explore expert articles, research insights, and practical guides to understand air pollution, its effects, and how to protect yourself and your loved ones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-30 ">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="/images/images.jpeg" 
                alt="Factory pollution" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-[#1E4866] mb-3">
                  The Hidden Dangers of Air Pollution
                </h3>
                
                <p className="text-[#1E4866] mb-4">
                  Learn how air pollution affects your lungs, heart, and overall well-being, even when you can't see it.
                </p>
                
                <button className="text-blue-800 font-medium text-sm hover:text-blue-600">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="images/images.jpeg" 
                alt="Woman wearing mask" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-[#1E4866] mb-3">
                  How to Protect Yourself from Poor Air Quality
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Practical tips on minimizing exposure to pollution, from using air purifiers to wearing the right masks.
                </p>
                
                <button className="text-blue-800 font-medium text-sm hover:text-blue-600">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="images/images.jpeg" 
                alt="Air quality index chart" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-[#1E4866] mb-3">
                  Understanding the Air Quality Index (AQI)
                </h3>
                
                <p className="text-gray-600 mb-4">
                  What do AQI numbers mean, and how can you use them to stay safe? A simple guide to air quality readings.
                </p>
                
                <button className="text-blue-800 font-medium text-sm hover:text-blue-600">
                  Read More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="images/images.jpeg" 
                alt="Chest X-ray" 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">March 28, 2025</div>
                <h3 className="text-xl font-semibold text-[#1E4866] mb-3">
                  Protecting Your Lungs
                </h3>
                
                <p className="text-gray-600text-[#1E4866] mb-4">
                  Simple steps to reduce health risks from poor air quality—indoors and outdoors.
                </p>
                
                <button className="text-blue-800 font-medium text-sm hover:text-blue-600">
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