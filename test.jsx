<div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-2 p-4">
{locations.map((location, index) => (
  <div
    key={index}
    className="bg-white rounded-lg shadow-sm py-4 px-8"
  >
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
        <img src="/images/aqi-index.svg" alt="aqi" className="h-24" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold">{location.aqi}</div>
          <div className="text-xs text-gray-500 invisible">AQI</div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-100">
        <div className="flex justify-between text-xs text-gray-500 mb-1 ">
          <span>PM2.5 μg/m3</span>
          <span className="font-semibold">{location.pm25}</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-1 bg-green-500 rounded-full"
            style={{ width: `${location.pm25 * 5}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>PM10 μg/m3</span>
          <span className="font-semibold">{location.pm10}</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-1 bg-green-500 rounded-full"
            style={{ width: `${location.pm10 * 5}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>NO2 μg/m3</span>
          <span className="font-semibold">{location.no2}</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-1 bg-yellow-400 rounded-full"
            style={{ width: `${location.no2 * 3}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>O3 μg/m3</span>
          <span className="font-semibold">{location.o3}</span>
        </div>
        <div className="h-1 bg-gray-200 rounded-full">
          <div
            className="h-1 bg-yellow-400 rounded-full"
            style={{ width: `${location.o3 * 3}%` }}
          ></div>
        </div>
      </div>
    </div>
  </div>
))}

{/* Add Location Card */}
<div className="border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center p-4 bg-white bg-opacity-50">
  <div className="text-center">
    <h3 className="text-lg font-medium text-gray-700 mb-2">
      Add Location
    </h3>
    <button className="text-blue-500 hover:text-blue-600">
      <PlusSquare size={20} className="mx-auto" />
    </button>
  </div>
</div>
</div>