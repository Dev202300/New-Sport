import React from 'react'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-script font-bold text-black">
            Sport News
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Category
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Trending News
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Recent News
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Clubs Ranking
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors">
              Sports Article
            </a>
          </nav>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-gray-600 px-4 py-2 pl-10 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>
    </header>
  )
}

export default Header
