import React from "react";
import { Download, Plus ,MoreVertical} from "lucide-react";

const LasapaPopup = () => {
  return (
    <div className="w-full max-w-5xl bg-[#fafafa] rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
     


      <div className="px-6 p-4  flex justify-between items-center ">
     
        <div className="flex items-center">
          <div className="flex h-9 px-4 py-2 items-center gap-2 rounded-md bg-gray-50">
            Daily
          </div>
          <div className="ml-2">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex h-11 px-4 py-3 justify-center items-center gap-2 rounded-sm border border-blue-100 hover:bg-blue-50 transition-colors">
            <Plus size={16} className="mr-2" />
            <span>Add Location</span>
          </button>
          <button className="flex h-11 px-4 bg-[#265B80] py-3 justify-center items-center gap-2 rounded-sm border border-blue-100 hover:bg-blue-800 transition-colors">
            <Download size={16} className="mr-2" />
            <span>Download Data</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* AQI Section */}
        
        <div className="bg-white p-6 rounded-lg border border-[#fff]">

          <div className="flex justify-center mb-4">
            <div className="relative">
              <svg className="w-36 h-36" viewBox="0 0 120 120">
                {/* AQI Gauge Background */}
                <path
                  d="M10,60 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Green segment */}
                <path
                  d="M10,60 a50,50 0 0,1 25,-43.3"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Yellow segment */}
                <path
                  d="M35,16.7 a50,50 0 0,1 25,0"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Orange segment */}
                <path
                  d="M60,16.7 a50,50 0 0,1 25,0"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Red segment - highlight this as we're in "Unhealthy" range */}
                <path
                  d="M85,16.7 a50,50 0 0,1 25,43.3"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Indicator needle */}
                <line
                  x1="60"
                  y1="60"
                  x2="95"
                  y2="35"
                  stroke="#374151"
                  strokeWidth="2"
                />
                <circle cx="60" cy="60" r="5" fill="#374151" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">156</div>
                <div className="text-sm text-gray-500">AQI</div>
              </div>
            </div>
          </div>

          
         </div>



        {/* Pollutants Section */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-gray-800 mb-6">Pollutants</h3>

          <div className="space-y-4">
            {/* PM2.5 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">PM2.5 μg/m³</span>
                <span className="font-semibold">100.4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            {/* PM10 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">PM10 μg/m³</span>
                <span className="font-semibold">143.9</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-300 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            {/* NO2 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">NO2 μg/m³</span>
                <span className="font-semibold">19.4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>

            {/* O3 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">O3 μg/m³</span>
                <span className="font-semibold">169</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Tips Section */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-gray-800 mb-6">Stay Safe tips</h3>

          <div className="space-y-4">
            <div className="flex">
              <div className="mr-3 text-yellow-500">
                <span
                  className="inline-block w-6 h-6 text-center"
                  role="img"
                  aria-label="Warning"
                >
                  ⚠️
                </span>
              </div>
              <div>
                <p className="text-gray-800">
                  Keep your inhaler handy and avoid heavy traffic areas
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-3 text-yellow-500">
                <span
                  className="inline-block w-6 h-6 text-center"
                  role="img"
                  aria-label="Warning"
                >
                  ⚠️
                </span>
              </div>
              <div>
                <p className="text-gray-800">
                  Avoid outdoor activities, especially strenuous exercises like
                  jogging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Air Pollution Trends */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-gray-800 mb-4">Air Pollution Trends</h3>

          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>

            {/* Chart grid */}
            <div className="absolute left-8 right-0 top-0 bottom-0">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={`grid-${i}`}
                  className="absolute left-0 right-0 border-t border-dashed border-gray-200"
                  style={{ top: `${i * 25}%` }}
                ></div>
              ))}

              {/* Line chart */}
              <svg
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,230 L60,50 L120,150 L180,70 L240,120 L300,200 L360,80"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="3"
                />
                {/* Current point */}
                <circle cx="360" cy="80" r="6" fill="#1d4ed8" />
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-gray-500">
              <span>Mar 01</span>
              <span>Mar 03</span>
              <span>Mar 05</span>
              <span>Mar 07</span>
            </div>
          </div>
        </div>

        {/* Air Pollution Levels */}
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-gray-800 mb-4">Air Pollution Levels</h3>

          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>

            {/* Chart grid */}
            <div className="absolute left-8 right-0 top-0 bottom-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={`grid-level-${i}`}
                  className="absolute left-0 right-0 border-t border-dashed border-gray-200"
                  style={{ top: `${i * 25}%` }}
                ></div>
              ))}

              {/* Bar chart */}
              <div className="flex h-full items-end justify-between px-4">
                <div
                  className="w-8 bg-green-500 rounded-t"
                  style={{ height: "10%" }}
                ></div>
                <div
                  className="w-8 bg-red-500 rounded-t"
                  style={{ height: "60%" }}
                ></div>
                <div
                  className="w-8 bg-yellow-400 rounded-t"
                  style={{ height: "25%" }}
                ></div>
                <div
                  className="w-8 bg-orange-300 rounded-t"
                  style={{ height: "35%" }}
                ></div>
                <div
                  className="w-8 bg-red-500 rounded-t"
                  style={{ height: "45%" }}
                ></div>
                <div
                  className="w-8 bg-yellow-400 rounded-t"
                  style={{ height: "20%" }}
                ></div>
                <div
                  className="w-8 bg-orange-300 rounded-t"
                  style={{ height: "30%" }}
                ></div>
                <div
                  className="w-8 bg-red-500 rounded-t"
                  style={{ height: "35%" }}
                ></div>
              </div>
            </div>

            {/* X-axis labels */}
            <div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-gray-500">
              <span>Mar 01</span>
              <span>Mar 03</span>
              <span>Mar 05</span>
              <span>Mar 07</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LasapaPopup;
