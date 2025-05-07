import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getAllLocations } from "../../services/LocationService";

import { MapPin, Search, Bell } from "lucide-react";
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


function MapResizeHandler() {
  const [allLocations, setAllLocations] = useState([]);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const navigate = useNavigate();

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

  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState("details");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
const [selectedLocations, setSelectedLocations] = useState([]);
const navigate = useNavigate();  
const handleAddLocationpage = () => {
  navigate("/dashboard/lasepa-popup");
};


  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getAllLocations();
        setLocations(data);
      } catch (error) {
        console.error("Failed to load locations:", error);
      }
    };

    fetchLocations();
  }, []);

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
    if (aqi >= 151) return "bg-red-600";
    if (aqi >= 101) return "bg-yellow-500";
    return "bg-green-500";
  };

  const toggleLocation = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const popularLocations = [
    { name: "Okrika, Rivers", region: "Rivers, Nigeria" },
    { name: "Lasepa, Ikeja", region: "Lagos, Nigeria" },
    { name: "Portharcourt", region: "Rivers, Nigeria" },
    { name: "Abuja", region: "FCT, Nigeria" },
    { name: "Fugar", region: "Edo, Nigeria" },
    { name: "Apapa", region: "Lagos, Nigeria" },
    { name: "Umundugba", region: "Imo, Nigeria" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-[#fafafa] relative  px-10">
      {/* Header */}
      <header className="h-16 bg-[#FAFAFA] flex items-center justify-between px-6 pt-8">
        <div className="flex items-center">
          <MapPin size={18} className="mt-1 mx-2" />

          <h1 className="text-[28px] font-[500] p-1 text-[#525252]">
            Explore Air Quality Map
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={18} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={18} />
          </button>

          <button className="h-8 w-8 rounded-full hover:bg-gray-100">
            <img
              src="/images/profilepic.png"
              alt="profile picture"
              className="h-8"
            />
          </button>
        </div>
      </header>

      {/* Search and Controls */}
      <div className="w-full bg-[#fafafa] flex flex-col md:flex-row gap-3  py-3">
        <div className="relative flex-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">
              <Search size={18} />
            </span>
          </div>
          <input
            type="text"
            placeholder="Search Location"
            className="block w-full px-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white placeholder-gray-500 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* CTA Button */}
        <div className="flex flex-1 gap-2">
        <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-1"   onClick={handleAddLocationpage}>
    <span>+</span> Add Location
  </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 gap-10 border-none overflow-hidden ">
        {/* Map Container */}
        <div
          className={`${
            selectedLocation && !isMobile
              ? "w-full md:w-2/3"
              : "w-full md:w-1/2"
          } h-full relative border border-[#c0baba]`}
        >
          <MapContainer
            center={center}
            zoom={zoomLevel}
            style={{
              width: "100%",
              height: "calc(100vh - 112px)",
            }}
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

        {/* Locations List */}
        {(!selectedLocation || isMobile) && (
          <div
            className={`${
              isMobile && selectedLocation ? "hidden" : "w-[15px] md:w-[500px]"
            } p-4 bg-[#fafafa] h-full overflow-y-auto`}
          >
            <div>
              <button className="bg-[#265B80] justify-center items-center mr-4 border self-stretch rounded-lg text-[#ffff] bg-primary-300 h-11 px-4">
                All
              </button>
              <button className="bg-[#fdfdfd] justify-center items-center gap-2 border self-stretch rounded-lg border-[#1b425d] h-11 px-4 text-[#265B80]">
                Cities
              </button>
              <h3 className="text-md font-medium text-gray-700 mr-3 mb-3 mt-5">
                Popular Locations
              </h3>
              <div className="space-y-3">
                {popularLocations.map((location, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedLocations.includes(location.name)
                        ? "border-grey-200/50 bg-[#fafafa]"
                        : "border-gray-200 hover:bg-[#868f95]"
                    }`}
                    onClick={() => toggleLocation(location.name)}
                  >
                    <input
                      type=""
                      checked={selectedLocations.includes(location.name)}
                      onChange={() => toggleLocation(location.name)}
                      className="h-5 w-5 text-green-500 rounded focus:ring-green-500 border-gray-300"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-800">
                        {location.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {location.region}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile only */}
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
