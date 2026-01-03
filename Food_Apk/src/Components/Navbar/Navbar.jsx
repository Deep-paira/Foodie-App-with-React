
function navbar() {
  return (
    <div>
        {/*NAVBAR*/}

      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <button className=" cursor-pointer text-2xl font-bold text-red-500">🍔DeltaFoodHub</button>
        <input
          type="text"
          placeholder="Search for food..."
          className="border-2 border-gray-300 px-6 py-1.5 rounded-full w-1/2 max-w-md focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200 text-gray-700 placeholder-gray-500 shadow-sm hover:shadow-md"
        />
        <div className="flex items-center gap-8">
          {/* Cart Button */}
          <button className="flex items-center gap-2 text-lg hover:text-red-600 transition-colors duration-200 group cursor-pointer">
            <span className="text-xl">🛒</span>
            <span className="font-medium group-hover:underline group-hover:decoration-red-600 group-hover:decoration-2 group-hover:underline-offset-4">
              Cart
            </span>
          </button>

          {/* Profile Button */}
          <button className="flex items-center gap-2 text-lg hover:text-blue-600 transition-colors duration-200 group">
            <span className="text-xl">👤</span>
            <span className="font-medium group-hover:underline group-hover:decoration-blue-600 group-hover:decoration-2 group-hover:underline-offset-4">
              Profile
            </span>
          </button>
        </div>
      </nav>

    </div>
  )
}

export default navbar