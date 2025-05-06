return (
  <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore</h1>
    
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Location</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a location"
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
/>
</svg>
</div>
</div>

<div className="mb-6">
<h3 className="text-md font-medium text-gray-700 mb-3">AI</h3>
<div className="text-sm font-medium text-gray-600 mb-2">Cities</div>
{/* AI Cities content would go here */}
</div>

    

      <div className="mt-8">
        <button className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
          Add Selected Locations
        </button>
      </div>
    </div>
  );
};
