import React, { useState } from 'react'

function SportsArticle() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const articles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop&q=80&auto=format',
      category: 'Basketball',
      author: 'Jake Will.',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&q=80&auto=format',
      date: '04 June 2023',
      title: '5 Exercises Basketball Players Should Be Using To Develop Strength',
      snippet: 'This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn\'t all about a massive body mass or ripped muscles.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&q=80&auto=format',
      category: 'Hockey',
      author: 'Foxi.zacon',
      authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&q=80&auto=format',
      date: '03 June 2023',
      title: 'Golden Knights out to fulfill owner\'s quest to win Stanley Cup in 6th year',
      snippet: 'The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=500&fit=crop&q=80&auto=format',
      category: 'Badminton',
      author: 'Bong Lozada',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&q=80&auto=format',
      date: '01 June 2023',
      title: '\'Outdoor\' Badminton Gets Support From Local Federation',
      snippet: 'The Badminton World Federation is developing Air Badminton and the country\'s governing body, Philippine Badminton Association.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=500&fit=crop&q=80&auto=format',
      category: 'Tennis',
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&q=80&auto=format',
      date: '31 May 2023',
      title: 'French Open 2023: Djokovic Advances to Quarterfinals',
      snippet: 'Novak Djokovic continues his quest for a record-breaking 23rd Grand Slam title as he advances to the quarterfinals at Roland Garros.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&q=80&auto=format',
      category: 'Soccer',
      author: 'Mike Torres',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&q=80&auto=format',
      date: '30 May 2023',
      title: 'Champions League Final Preview: Manchester City vs Inter Milan',
      snippet: 'The stage is set for an epic showdown as Manchester City faces Inter Milan in the Champions League final this Saturday.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=80&auto=format',
      category: 'Basketball',
      author: 'Alex Chen',
      authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&q=80&auto=format',
      date: '29 May 2023',
      title: 'NBA Finals: Heat and Nuggets Battle for Championship',
      snippet: 'The Miami Heat and Denver Nuggets are set to face off in what promises to be an exciting NBA Finals series.'
    }
  ]

  // Display 3 articles at a time, cycling through
  const displayedArticles = articles.slice(currentIndex, currentIndex + 3)
  const hasMore = currentIndex + 3 < articles.length
  const hasPrevious = currentIndex > 0

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - 3))
    }
  }

  const handleNext = () => {
    if (hasMore) {
      setCurrentIndex(Math.min(articles.length - 3, currentIndex + 3))
    }
  }

  return (
    <div className="w-full mb-12 animate-fade-in">
      {/* Section Title */}
      <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase mb-8">
        Sports Article
      </h2>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article, index) => (
          <div key={article.id} className="relative">
            <article
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Category Tag */}
                <div className="absolute top-3 right-3 bg-black px-3 py-1.5 rounded">
                  <span className="text-white text-xs font-bold uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {article.snippet}
                </p>
              </div>
            </article>

            {/* Navigation Buttons - positioned below first card */}
            {index === 0 && (
              <div className="flex items-center gap-2 mt-4 animate-slide-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <button
                  onClick={handlePrevious}
                  disabled={!hasPrevious}
                  className={`w-10 h-10 flex items-center justify-center transition-colors ${
                    hasPrevious
                      ? 'bg-gray-800 hover:bg-gray-700 cursor-pointer'
                      : 'bg-gray-200 cursor-not-allowed'
                  }`}
                  aria-label="Previous articles"
                >
                  <svg
                    className={`w-5 h-5 ${hasPrevious ? 'text-white' : 'text-gray-400'}`}
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

                <button
                  onClick={handleNext}
                  disabled={!hasMore}
                  className={`w-10 h-10 flex items-center justify-center transition-colors ${
                    hasMore
                      ? 'bg-gray-800 hover:bg-gray-700 cursor-pointer'
                      : 'bg-gray-200 cursor-not-allowed'
                  }`}
                  aria-label="Next articles"
                >
                  <svg
                    className={`w-5 h-5 ${hasMore ? 'text-white' : 'text-gray-400'}`}
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
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SportsArticle
