import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Custom hook to handle map resize
function MapResizeHandler() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
}

const MapExplore = () => {
  const center = [9.082, 8.6753];
  const zoomLevel = 6;

  // Air quality monitoring stations with pollution data
  const locations = [
    {
      name: "Oktika, Rivers",
      position: [4.8156, 7.0498],
      type: "monitoring",
      aqi: 156,
      status: "Unhealthy",
      pollutants: [
        { name: "PM2.5", value: 100.4, unit: "µg/m³" },
        { name: "PM10", value: 143.9, unit: "µg/m³" },
        { name: "NO2", value: 19.4, unit: "µg/m³" },
        { name: "O3", value: 169, unit: "µg/m³" },
      ],
      tips: [
        "Keep your inhaler handy and avoid heavy traffic areas",
        "Avoid outdoor activities, especially strenuous exercises like jogging",
      ],
    },
    {
      name: "Lagos Mainland",
      position: [6.5244, 3.3792],
      type: "monitoring",
      aqi: 98,
      status: "Moderate",
      pollutants: [
        { name: "PM2.5", value: 65.2, unit: "µg/m³" },
        { name: "PM10", value: 98.7, unit: "µg/m³" },
        { name: "NO2", value: 24.1, unit: "µg/m³" },
        { name: "O3", value: 112, unit: "µg/m³" },
      ],
      tips: [
        "Sensitive groups should reduce prolonged outdoor exertion",
        "Keep windows closed to avoid dirty outdoor air",
      ],
    },
    // Add more monitoring stations as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getAqiColor = (aqi) => {
    if (aqi >= 151) return "bg-red-600"; // Unhealthy
    if (aqi >= 101) return "bg-yellow-500"; // Moderate
    return "bg-green-500"; // Good
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="text-green-600 mr-2">🌍</span>
          Nigeria Air Quality Map
        </h1>
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="text-gray-600">🔔</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-700 font-medium">NG</span>
          </div>
        </div>
      </header>

      {/* Search and Controls */}
      <div className="px-4 py-3 bg-gray-50 border-b flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            placeholder="Search monitoring stations..."
            className="block w-full px-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            + Add Location
          </button>
         
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Map Container - Takes full width on mobile, 2/3 on desktop */}
        <div
          className={`${
            selectedLocation && !isMobile ? "w-full md:w-2/3" : "w-full"
          } h-full relative`}
        >
          <MapContainer
            center={center}
            zoom={zoomLevel}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <MapResizeHandler />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomControl position="topright" />

            {filteredLocations.map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                icon={
                  new L.DivIcon({
                    html: `
                    <div class="relative">
                      <div class="w-8 h-8 rounded-full ${getAqiColor(
                        location.aqi
                      )} flex items-center justify-center text-white font-bold text-xs">
                        ${location.aqi}
                      </div>
                      <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-4 border-t-${
                        getAqiColor(location.aqi).split("-")[1]
                      }"></div>
                    </div>
                  `,
                    className: "border-none bg-transparent",
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                  })
                }
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div className="font-medium text-gray-800">
                    {location.name}
                  </div>
                  <div
                    className={`text-sm ${getAqiColor(location.aqi).replace(
                      "bg",
                      "text"
                    )}`}
                  >
                    AQI: {location.aqi} ({location.status})
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Side Panel - Hidden on mobile unless location selected */}
        {selectedLocation && (
          <div
            className={`${
              isMobile ? "absolute inset-0 bg-white z-10" : "w-1/3"
            } flex flex-col border-l border-gray-200 h-full overflow-hidden`}
          >
            {isMobile && (
              <button
                onClick={() => setSelectedLocation(null)}
                className="p-2 text-gray-500 hover:text-gray-700 absolute top-2 right-2 z-20"
              >
                ✕
              </button>
            )}

            {/* Location Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {selectedLocation.name}
                  </h2>
                  <div className="flex items-center mt-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getAqiColor(
                        selectedLocation.aqi
                      )} text-white`}
                    >
                      {selectedLocation.status}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">Nigeria</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">
                    {selectedLocation.aqi}
                  </div>
                  <div className="text-xs text-gray-500">AQI</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "details"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "trends"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("trends")}
              >
                Trends
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === "levels"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("levels")}
              >
                Levels
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {activeTab === "details" && (
                <>
                  <h3 className="font-medium text-gray-800 mb-3">Pollutants</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {selectedLocation.pollutants.map((pollutant, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">
                          {pollutant.name}
                        </div>
                        <div className="text-lg font-semibold">
                          {pollutant.value} {pollutant.unit}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-medium text-gray-800 mb-3">
                    Stay Safe Tips
                  </h3>
                  <ul className="space-y-2">
                    {selectedLocation.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "trends" && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">
                    Air Pollution Trends
                  </h3>
                  <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">
                      Trend chart would appear here
                    </p>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 px-2">
                    <span>Mar 01</span>
                    <span>Mar 03</span>
                    <span>Mar 05</span>
                    <span>Mar 07</span>
                  </div>
                </div>
              )}

              {activeTab === "levels" && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">
                    Air Pollution Levels
                  </h3>
                  <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">
                      Levels chart would appear here
                    </p>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 px-2">
                    <span>Mar 01</span>
                    <span>Mar 03</span>
                    <span>Mar 05</span>
                    <span>Mar 07</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Only show on mobile */}
      {isMobile && (
        <nav className="bg-white border-t flex justify-around py-2 md:hidden sticky bottom-0 z-20">
          <button className="p-2 text-gray-600 flex flex-col items-center">
            <span>📅</span>
            <span className="text-xs mt-1">Daily</span>
          </button>
          <button className="p-2 text-green-600 flex flex-col items-center">
            <span>🗺️</span>
            <span className="text-xs mt-1">Map</span>
          </button>
          <button className="p-2 text-gray-600 flex flex-col items-center">
            <span>⚙️</span>
            <span className="text-xs mt-1">Settings</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default MapExplore;
