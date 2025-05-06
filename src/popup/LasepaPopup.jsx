import React from 'react';
import { Download, Plus } from 'lucide-react';

const LasapaPopup = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
        <div className="text-white font-medium">Daily</div>
        <div className="flex space-x-3">
          <button className="text-white p-1 rounded-full hover:bg-blue-700 transition-colors">
            <Plus size={18} />
          </button>
          <button className="text-white p-1 rounded-full hover:bg-blue-700 transition-colors">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Location and Status */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-red-600 font-bold text-lg">Unhealthy</div>
            <div className="text-gray-500 text-sm">156 AQI</div>
          </div>
          <div className="text-gray-800 font-medium">Oktika, Rivers</div>
          <div className="text-gray-500">Nigeria</div>
        </div>

        {/* Pollutants */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-700 mb-3">Pollutants</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm">PM2.5</div>
              <div className="font-bold">100.4 µg/m³</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm">PM10</div>
              <div className="font-bold">143.9 µg/m³</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm">NO2</div>
              <div className="font-bold">19.4 µg/m³</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-gray-500 text-sm">O3</div>
              <div className="font-bold">169 µg/m³</div>
            </div>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-700 mb-3">Stay Safe tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Keep your inhaler handy and avoid heavy traffic areas</li>
            <li>Avoid outdoor activities, especially strenuous exercises like jogging.</li>
          </ul>
        </div>

        {/* Charts */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-gray-700 mb-3">Air Pollution Trends</h3>
            <div className="h-40 bg-gray-100 rounded-lg flex items-end p-2">
              {[100, 200, 300, 150].map((value, index) => (
                <div 
                  key={`trend-${index}`}
                  className="flex-1 mx-1 bg-blue-500 rounded-t-sm"
                  style={{ height: `${value / 4}px` }}
                />
              ))}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-gray-500">
                <span>Mar 01</span>
                <span>Mar 03</span>
                <span>Mar 05</span>
                <span>Mar 07</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-700 mb-3">Air Pollution Levels</h3>
            <div className="h-40 bg-gray-100 rounded-lg flex items-end p-2">
              {[50, 250, 350, 200].map((value, index) => (
                <div 
                  key={`level-${index}`}
                  className="flex-1 mx-1 bg-red-500 rounded-t-sm"
                  style={{ height: `${value / 4}px` }}
                />
              ))}
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-gray-500">
                <span>Mar 01</span>
                <span>Mar 03</span>
                <span>Mar 05</span>
                <span>Mar 07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LasapaPopup;