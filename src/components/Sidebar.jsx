import React from 'react'

function Sidebar() {
  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=400&fit=crop&q=80&auto=format',
      category: 'Race98',
      date: '03 June 2023',
      title: 'Ethiopian runners took the top four spots.'
    },
    {
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop&q=80&auto=format',
      category: 'INDYCAR',
      date: '03 June 2023',
      title: 'IndyCar Detroit: Dixon quickest in second practice'
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Today</h2>
      
      {newsItems.map((item, index) => (
        <div key={index} className="bg-white animate-slide-in-up" style={{ animationDelay: `${0.3 + index * 0.2}s`, animationFillMode: 'both' }}>
          {/* News Image */}
          <div className="w-full h-48 mb-3 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-xl"
            />
          </div>
          
          {/* Category and Date */}
          <p className="text-sm text-gray-400 mb-2">
            {item.category} - {item.date}
          </p>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
