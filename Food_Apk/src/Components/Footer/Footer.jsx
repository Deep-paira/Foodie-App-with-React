import React from 'react'

function footer() {
  return (
    <div>

{/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-12">
        <div className="container mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2">🍔</span>
                <h3 className="text-2xl font-bold text-red-400">DeltaFoodHub</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Delivering happiness, one meal at a time. Experience the finest cuisines
                from your favorite restaurants, delivered fresh and fast to your doorstep.
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
                  Order Now
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                  Download App
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Menu</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Restaurants</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Track Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">📞</span>
                  <span>+91 89277 46507</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">✉️</span>
                  <span>hello@deltafoodhub.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">📍</span>
                  <span>Bhubaneswar, Odisha</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">⏰</span>
                  <span>24/7 Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Food Categories Icons */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="flex justify-center space-x-8 text-4xl">
              <span className="hover:scale-110 transition-transform duration-200 cursor-pointer" title="Pizza">🍕</span>
              <span className="hover:scale-110 transition-transform duration-200 cursor-pointer" title="Burger">🍔</span>
              <span className="hover:scale-110 transition-transform duration-200 cursor-pointer" title="Indian">🍛</span>
              <span className="hover:scale-110 transition-transform duration-200 cursor-pointer" title="Chinese">🍜</span>
              <span className="hover:scale-110 transition-transform duration-200 cursor-pointer" title="Drinks">🥤</span>
              <span className="hover:scale-110 transition-transform duration-200 cursor-pointer" title="Desserts">🍰</span>
            </div>
          </div>

          {/* Social Media & Bottom */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-2xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-2xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-2xl">🐦</a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-2xl">💼</a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-1">
                  © 2025 <span className="text-red-400 font-semibold">DeltaFoodHub</span>. All rights reserved.
                </p>
                <p className="text-sm text-gray-500">
                  Made with ❤️ for food lovers everywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default footer