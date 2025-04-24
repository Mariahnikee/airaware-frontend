import { useState } from 'react';

export default function AirAwareWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 shadow-sm">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/40/40" 
            alt="Air Aware Logo" 
            className="h-8"
          />
          <span className="ml-2 text-blue-600 font-medium">air aware</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">How it works</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Impact</a>
        </div>
        
        <div>
          <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            Log in
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-4 py-1 bg-green-200 text-green-700 rounded-full text-sm">
              Fundraising & Partnership
            </span>
          </div>
          
          <div className="md:flex md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
                Take a Stand for Clean Air & Healthier Lives
              </h1>
              
              <p className="text-gray-600 mb-8">
                Air pollution affects millions, causing severe health issues and even loss of life. Through partnerships and donations, we can provide relief, raise awareness, and drive change. Join us in protecting communities and saving lives.
              </p>
              
              <div className="flex space-x-4">
                <button className="px-6 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-50">
                  Donate Today
                </button>
                
                <button className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900">
                  Become a Partner
                </button>
              </div>
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

      {/* Footer */}
      <footer className="bg-white py-12 px-6 md:px-12 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Dashboard Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Educational Articles</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Shop Air Quality Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Support & Partnerships</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Air Aware Dashboard</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Face Masks</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Air Monitors</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Air Purifiers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Play Pollupop Game</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Partnership and Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Become a Partner</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Support Clean Air Projects</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Help Air Pollution Victims</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Donate</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Contact Us</h4>
              <p className="text-gray-600 text-sm mb-2">Email: support@airaware.ng</p>
              <p className="text-gray-600 text-sm mb-4">Address: Lagos, Nigeria</p>
              
              <div className="flex space-x-3">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t text-center text-gray-500 text-sm">
            &copy; 2025 Air Aware. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}