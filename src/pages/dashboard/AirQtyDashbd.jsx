import { useState } from 'react';
import { MoreVertical, Home, Compass, Settings, PlusSquare,Search,Bell } from 'lucide-react';

export default function AirQtyDashbd() {
  const [activeLocation, setActiveLocation] = useState(0);
  
  const locations = [
    {
      name: 'LASEPA Ikeja',
      area: 'Lagos',
      aqi: '',   // Added AQI value
      moderate: true,
      pm25: 6.7,
      pm10: 9.7,
      no2: 14.0,
      o3: 14.0
    },
    {
      name: 'Okrika, Rivers',
      area: 'Rivers',
      aqi: '',  // Added AQI value
      moderate: true,
      pm25: 6.7,
      pm10: 9.7,
      no2: 14.0,
      o3: 14.0
    }
  ];

  const getAqiColor = (aqi) => {
    if (aqi <= 50) return 'bg-green-500';
    if (aqi <= 100) return 'bg-yellow-400';
    if (aqi <= 150) return 'bg-orange-400';
    if (aqi <= 200) return 'bg-red-500';
    if (aqi <= 300) return 'bg-purple-600';
    return 'bg-red-800';
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#FAFAFA]">
      {/* Top Navigation */}
      <header className="h-16 bg-[#FAFAFA] flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center">
          <h1 className="text-[28px] font-[500] text-[#525252]">Welcome, John!</h1>
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
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6">
        
        <p className="text-gray-600 mb-6">Let's check the air quality around you</p>
        
        {/* Air Quality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2 p-4">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm py-4 px-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-yellow-50 rounded-full p-1 mr-2">
                    <span className="text-lg">😷</span>
                  </div>
                  <span className="text-sm text-gray-600">Moderate</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={18} />
                </button>
              </div>
              
              <h2 className="font-semibold text-lg">{location.name}</h2>
              <p className="text-gray-500 text-sm">{location.area}</p>
              
              <div className="flex justify-center">
                <div className="relative w-24 h-24">
                <img
                  src="/images/aqi-index.svg"
                  alt="aqi"
                  className="h-24"
                />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-2xl font-bold">{location.aqi}</div>
                    <div className="text-xs text-gray-500 invisible">AQI</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className='bg-gray-100'>
                  <div className="flex justify-between text-xs text-gray-500 mb-1 ">
                    <span>PM2.5 μg/m3</span>
                    <span className="font-semibold">{location.pm25}</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div className="h-1 bg-green-500 rounded-full" style={{ width: `${location.pm25 * 5}%` }}></div>
                  </div>
                </div>
                
                <div className='bg-gray-100'>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>PM10 μg/m3</span>
                    <span className="font-semibold">{location.pm10}</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div className="h-1 bg-green-500 rounded-full" style={{ width: `${location.pm10 * 5}%` }}></div>
                  </div>
                </div>
                
                <div className='bg-gray-100'>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>NO2 μg/m3</span>
                    <span className="font-semibold">{location.no2}</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div className="h-1 bg-yellow-400 rounded-full" style={{ width: `${location.no2 * 3}%` }}></div>
                  </div>
                </div>
                
                <div className='bg-gray-100'>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>O3 μg/m3</span>
                    <span className="font-semibold">{location.o3}</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div className="h-1 bg-yellow-400 rounded-full" style={{ width: `${location.o3 * 3}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add Location Card */}
          <div className="border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center p-4 bg-white bg-opacity-50">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Add Location</h3>
              <button className="text-blue-500 hover:text-blue-600">
                <PlusSquare size={20} className="mx-auto" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Breaking Down the Air Quality Index (AQI):</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-4">What It Means for You</h3>
            
            <p className="text-gray-600 mb-6">
              The Air Quality Index (AQI) helps you understand whether the air is safe to breathe. But what do the colors and numbers mean? This video explains AQI in simple terms so you can make informed health decisions.
            </p>
            
            <button className="px-4 py-2 bg-[#265B80] text-white rounded hover:bg-blue transition">
              Show me how
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium text-gray-800 my-6">Try the Pollupop Game!</h2>
            
            <p className="text-gray-600 mb-6">
              Test your skills by bursting air pollutants while avoiding clean air bubbles. How high can you score?
            </p>
            
            <button className="px-4 py-2 bg-[#265B80] text-white rounded hover:bg-blue transition">
              Play Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}