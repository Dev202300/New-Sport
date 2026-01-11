import React from 'react'

function MainFeature() {
  return (
    <div className="relative">
      {/* Main Image Container */}
      <div className="relative w-full h-[600px] bg-gray-200 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop&q=80&auto=format"
          alt="Basketball Player"
          className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
        />

        {/* Overlay Content - positioned on left side */}
        <div className="absolute inset-0 flex items-center p-8">
          <div className="max-w-xl z-10 animate-slide-in-up">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wide leading-tight drop-shadow-lg animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              TOP SCORER TO THE FINAL MATCH
            </h1>
            <p className="text-white text-base mb-6 leading-relaxed drop-shadow-md animate-slide-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals
            </p>
            <button className="bg-gray-800 text-white px-8 py-3 uppercase font-semibold tracking-wide hover:bg-gray-900 transition-colors animate-slide-in-up rounded-full" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              CONTINUE READING
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFeature
