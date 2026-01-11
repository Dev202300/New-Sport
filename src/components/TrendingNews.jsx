import React from 'react'

function TrendingNews() {
  const articles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&q=80&auto=format',
      category: 'Horse Racing',
      author: 'Race98',
      date: '03 June 2023',
      title: '6-Year-Old Horse Dies at Belmont Park After Race Injury',
      snippet: 'NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week\'s main event.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&q=80&auto=format',
      category: 'Cycling',
      author: 'Jony.Ls',
      date: '03 June 2023',
      title: 'Savilia Blunk Embraces Longer Season With World Cup',
      snippet: 'Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&q=80&auto=format',
      category: 'Boxing',
      author: 'King.F',
      date: '03 June 2023',
      title: 'Ryan Garcia is fighting again, this time on social media',
      snippet: 'Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words.'
    }
  ]

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
        <div className="relative">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">Trending News</h2>
          <div className="absolute -bottom-4 left-0 w-1/2 h-1 bg-black"></div>
        </div>
        <button className="text-sm font-bold text-gray-500 hover:text-black transition-colors uppercase tracking-wider">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="group grid grid-cols-12 gap-6 items-start animate-slide-in-up"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
          >
            {/* Image Container */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4 relative overflow-hidden rounded-xl shadow-md aspect-[4/3]">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-black rounded-full">
                {article.category}
              </span>
            </div>

            {/* Content */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col justify-center h-full space-y-3">
              <div
                className="flex items-center text-xs font-medium text-gray-500 space-x-3 uppercase tracking-wide animate-slide-in-up"
                style={{ animationDelay: `${index * 0.15 + 0.2}s`, animationFillMode: 'both' }}
              >
                <span className="text-black font-bold">{article.author}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{article.date}</span>
              </div>

              <h3
                className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-600 transition-colors duration-300 cursor-pointer animate-slide-in-up"
                style={{ animationDelay: `${index * 0.15 + 0.3}s`, animationFillMode: 'both' }}
              >
                {article.title}
              </h3>

              <p
                className="text-gray-600 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.15 + 0.4}s`, animationFillMode: 'both' }}
              >
                {article.snippet}
              </p>

              <div className="pt-2">
                <button
                  className="inline-flex items-center bg-gray-900 text-white px-5 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest hover:bg-gray-700 transition-colors duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.15 + 0.5}s`, animationFillMode: 'both' }}
                >
                  Read Story
                  <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TrendingNews
