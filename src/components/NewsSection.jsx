import React, { useState } from 'react'

function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4

  const newsItems = [
    {
      id: 1,
      category: 'Football',
      source: 'Agence France-Presse',
      date: '04 June 2023',
      headline: 'LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB CONFIRMS',
      description: 'The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&h=600&fit=crop&q=80&auto=format'
    },
    {
      id: 2,
      category: 'Basketball',
      source: 'ESPN',
      date: '05 June 2023',
      headline: 'NBA FINALS SET TO BEGIN WITH EXCITING MATCHUP',
      description: 'The championship series promises to deliver thrilling basketball action as the top teams compete for the title.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop&q=80&auto=format'
    },
    {
      id: 3,
      category: 'Tennis',
      source: 'Reuters',
      date: '06 June 2023',
      headline: 'GRAND SLAM TOURNAMENT KICKS OFF IN PARIS',
      description: 'Top tennis players from around the world gather for one of the most prestigious tournaments of the season.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop&q=80&auto=format'
    },
    {
      id: 4,
      category: 'Cycling',
      source: 'Cycling Weekly',
      date: '07 June 2023',
      headline: 'TOUR DE FRANCE ROUTE ANNOUNCED FOR 2024 SEASON',
      description: 'The iconic race will feature challenging mountain stages and exciting sprint finishes across France.',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&h=600&fit=crop&q=80&auto=format'
    }
  ]

  const currentNews = newsItems[currentPage - 1]

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="w-full mb-12 animate-fade-in">
      {/* Main Content Card */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg mb-6">
        {/* Background Image with Overlay */}
        <div 
          className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${currentNews.image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl z-10">
              {/* Category Tag */}
              <div className="mb-4 animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <span className="inline-block bg-gray-800/90 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded">
                  {currentNews.category}
                </span>
              </div>

              {/* Source and Date */}
              <div className="mb-4 text-white text-sm font-normal animate-slide-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                {currentNews.source} - {currentNews.date}
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-wide leading-tight drop-shadow-lg animate-slide-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                {currentNews.headline}
              </h2>

              {/* Description */}
              <p className="text-white text-base md:text-lg leading-relaxed drop-shadow-md max-w-3xl animate-slide-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                {currentNews.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 animate-slide-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center transition-colors ${
            currentPage === 1
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-gray-800 hover:bg-gray-700 cursor-pointer'
          }`}
          aria-label="Previous page"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-10 h-10 flex items-center justify-center transition-colors ${
              currentPage === page
                ? 'bg-gray-800 text-white rounded-full'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-gray-800 hover:bg-gray-700 cursor-pointer'
          }`}
          aria-label="Next page"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NewsSection
