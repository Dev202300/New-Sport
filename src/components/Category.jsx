import React, { useState, useEffect, useRef } from 'react'

function Category() {
  const categories = [
    {
      type: 'text',
      content: 'FOOTBALL',
      twoLine: false
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&q=80&auto=format',
      alt: 'Basketball'
    },
    {
      type: 'text',
      content: 'CAR SPORT',
      twoLine: false
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop&q=80&auto=format',
      alt: 'Table Tennis'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&q=80&auto=format',
      alt: 'Soccer'
    },
    {
      type: 'text',
      content: 'BASKETBALL',
      twoLine: true,
      line1: 'BASKET',
      line2: 'BALL'
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=80&auto=format',
      alt: 'Race Car'
    },
    {
      type: 'text',
      content: 'TABLE TENNIS',
      twoLine: true,
      line1: 'TABLE',
      line2: 'TENNIS'
    }
  ]

  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-8" ref={categoryRef}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`relative ${isVisible ? 'animate-slide-in-up' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s`, 
              animationFillMode: 'both',
              opacity: isVisible ? 1 : 0
            }}
          >
            {category.type === 'text' ? (
              <div className="bg-gray-100 h-48 flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 rounded-lg">
                {category.twoLine ? (
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-gray-800 uppercase tracking-wider transition-colors duration-300 leading-tight">
                      {category.line1}
                    </div>
                    <div className="text-2xl font-extrabold text-gray-600 uppercase tracking-wider transition-colors duration-300 leading-tight">
                      {category.line2}
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl font-extrabold text-gray-800 uppercase text-center tracking-wider transition-colors duration-300 hover:text-gray-900 leading-tight">
                    {category.content}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-48 overflow-hidden rounded-lg">
                <img 
                  src={category.image} 
                  alt={category.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
