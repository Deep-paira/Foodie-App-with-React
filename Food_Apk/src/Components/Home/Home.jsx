import React from 'react'

function home() {

    const food = [
    {
      "title": "Pizza",
      "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Burger",
      "imageUrl": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "title": "Snacks",
      "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
      "title": "South Indian",
      "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U291dGglMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fHww"
    },
    {
      "title": "Chinese",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1661600135596-dcb910b05340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
    },
    {
      "title": "Drinks",
      "imageUrl": "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jbyUyMGNvbGF8ZW58MHx8MHx8fDA%3D"
    },
    {
      "title": "Sushi",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VzaGl8ZW58MHx8MHx8fDA%3D"
    },
    {
      "title": "Desserts",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1707227914281-4e53ddc16c9b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  return (
    <div>

        {/*Hero Section*/}
      <section className="bg-[url('https://plus.unsplash.com/premium_photo-1673749866533-9fa1cef19c2a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-white h-96 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mt-10">Delicious food, delivered fast!</h2>
        <p className="mt-2">Order your favorite meals anytime, anywhere.</p>
        <div className="mt-4 flex gap-4">
          <button className="bg-red-500 px-6 py-2 rounded-lg hover:scale-105 transition">Order Now</button>
          <button className="bg-white text-red-500 px-6 py-2 rounded-lg hover:scale-105 transition">
            Explore Menu
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Browse Categories</h3>
        <div className="grid grid-cols-3 gap-4">
          {food.map(
            (cat) => (
              <div
                key={cat}
                className="p-4 bg-gray-100 rounded-lg text-center shadow-md cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={cat.imageUrl}
                  alt={cat}
                  className="mx-auto mb-2 rounded-full"
                />
                <p className="font-medium">{cat.title}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Popular Dishes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Margherita Pizza */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1751026044631-2aa676914b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyZ2VyaXRhJTIwcGl6emF8ZW58MHx8MHx8fDA%3D"
              alt="Margherita Pizza"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg text-gray-800 mb-1">Margherita Pizza</h4>
              <p className="text-gray-600 text-sm mb-3">Fresh tomatoes, mozzarella & basil</p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-xl">₹299</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Chicken Burger */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Chicken Burger"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg text-gray-800 mb-1">Chicken Burger</h4>
              <p className="text-gray-600 text-sm mb-3">Juicy chicken patty with fresh veggies</p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-xl">₹249</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Butter Chicken */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Butter Chicken"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg text-gray-800 mb-1">Butter Chicken</h4>
              <p className="text-gray-600 text-sm mb-3">Creamy tomato curry with tender chicken</p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-xl">₹349</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Chocolate Cake */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Chocolate Cake"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg text-gray-800 mb-1">Chocolate Cake</h4>
              <p className="text-gray-600 text-sm mb-3">Rich and moist chocolate delight</p>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-bold text-xl">₹199</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default home