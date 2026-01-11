import React from 'react'

function CyclingFeature() {
  return (
    <div className="w-full animate-slide-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
      {/* Main Image Container */}
      <div className="relative w-full h-[700px] overflow-hidden rounded-lg shadow-2xl group">
        <img
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=700&fit=crop&q=80&auto=format"
          alt="Cyclist"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category Tag - Inside Image */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block border-2 border-white px-4 py-2 bg-transparent text-white uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-gray-900 transition-colors duration-300 cursor-pointer rounded-full">
            Cycling
          </span>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 flex flex-col justify-end p-6 rounded-lg">
          <div className="mb-3 animate-slide-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <span className="text-xs text-white/90 font-medium tracking-wide uppercase">
              Debits - 03 June 2023
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase leading-tight tracking-wide mb-6 animate-slide-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
          </h2>
          <div>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 animate-slide-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CyclingFeature
