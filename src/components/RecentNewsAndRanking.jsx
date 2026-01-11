import React, { useState } from 'react'

function ClubLogo({ logo, color, initials, name }) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center text-white text-[10px] font-bold`}>
        {initials}
      </div>
    )
  }

  return (
    <img
      src={logo}
      alt={name}
      className="w-8 h-8 object-contain"
      onError={() => setImageError(true)}
    />
  )
}

function RecentNewsAndRanking() {
  const recentNewsItems = [
    {
      id: 1,
      hashtag: '#Pollar. 87',
      date: '12 July 2023',
      title: 'Baku 2023 Taekwondo Championships',
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=150&h=150&fit=crop&q=80&auto=format'
    },
    {
      id: 2,
      hashtag: '#Goft. Toni',
      date: '20 July 2023',
      title: 'Open Championship Royal Liverpool Golf',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=150&h=150&fit=crop&q=80&auto=format'
    },
    {
      id: 3,
      hashtag: '#Cricket. Toni',
      date: '27 July 2023',
      title: 'Ireland Tour of England Test 2023',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=150&h=150&fit=crop&q=80&auto=format'
    }
  ]

  const clubsRanking = [
    {
      rank: 1,
      name: 'Manchester City',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png',
      color: 'bg-blue-500',
      initials: 'MC',
      gp: 38,
      w: 29,
      d: 6,
      l: 3,
      f: 99,
      a: 26,
      gd: 73
    },
    {
      rank: 2,
      name: 'Liverpool',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png',
      color: 'bg-red-500',
      initials: 'LFC',
      gp: 38,
      w: 28,
      d: 8,
      l: 2,
      f: 94,
      a: 26,
      gd: 68
    },
    {
      rank: 3,
      name: 'Newcastle',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Newcastle-Logo.png',
      color: 'bg-black',
      initials: 'NUF',
      gp: 38,
      w: 19,
      d: 14,
      l: 5,
      f: 68,
      a: 33,
      gd: 35
    },
    {
      rank: 4,
      name: 'Tottenham Hotspur',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Hotspur-Logo.png',
      color: 'bg-blue-700',
      initials: 'TH',
      gp: 38,
      w: 22,
      d: 5,
      l: 11,
      f: 69,
      a: 40,
      gd: 29
    },
    {
      rank: 5,
      name: 'Everton',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Everton-Logo.png',
      color: 'bg-blue-700',
      initials: 'EFC',
      gp: 38,
      w: 18,
      d: 13,
      l: 7,
      f: 55,
      a: 46,
      gd: 9
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-fade-in">
      {/* Recent News Section */}
      <div className="animate-slide-in-left">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase mb-6">Recent News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main News Card */}
          <div className="relative rounded-lg overflow-hidden shadow-lg animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="relative h-64 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&h=500&fit=crop&q=80&auto=format"
                alt="Sports Arena Stadium"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-gray-300 text-xs mb-1">Day 5 Highlights</p>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Baku 2023 World Taekwondo Championships
                </h3>
              </div>
            </div>
          </div>

          {/* Smaller News List */}
          <div className="flex flex-col gap-4">
            {recentNewsItems.map((item, index) => (
              <div
                key={item.id}
                className="flex gap-3 animate-slide-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-xs text-gray-500 mb-1">
                    <span className="font-semibold text-gray-700">{item.hashtag}</span> - {item.date}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
            
            {/* More Button */}
            <button className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors animate-slide-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              More →
            </button>
          </div>
        </div>
      </div>

      {/* Clubs Ranking Section */}
      <div className="animate-slide-in-right">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase mb-6">Clubs Ranking</h2>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 border-b border-gray-300">
                  <th className="text-left py-3 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Club</th>
                  <th className="text-right py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">GP</th>
                  <th className="text-right py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">W</th>
                  <th className="text-right py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">D</th>
                  <th className="text-right py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">L</th>
                  <th className="text-right py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">F</th>
                  <th className="text-right py-3 px-2 text-xs font-bold text-gray-700 uppercase tracking-wider">A</th>
                  <th className="text-right py-3 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider">GD</th>
                </tr>
              </thead>
              <tbody>
                {clubsRanking.map((club, index) => (
                  <tr
                    key={club.rank}
                    className={`border-b border-gray-200 transition-colors hover:bg-gray-50 animate-slide-in-up ${
                      index === 0 ? 'bg-gray-200' : 'bg-white'
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-700 w-6">{club.rank}</span>
                        <ClubLogo logo={club.logo} color={club.color} initials={club.initials} name={club.name} />
                        <span className="text-sm font-semibold text-gray-900">{club.name}</span>
                      </div>
                    </td>
                    <td className="text-right py-3 px-2 text-sm text-gray-700">{club.gp}</td>
                    <td className="text-right py-3 px-2 text-sm text-gray-700">{club.w}</td>
                    <td className="text-right py-3 px-2 text-sm text-gray-700">{club.d}</td>
                    <td className="text-right py-3 px-2 text-sm text-gray-700">{club.l}</td>
                    <td className="text-right py-3 px-2 text-sm text-gray-700">{club.f}</td>
                    <td className="text-right py-3 px-2 text-sm text-gray-700">{club.a}</td>
                    <td className="text-right py-3 px-4 text-sm font-semibold text-gray-900">{club.gd > 0 ? `+${club.gd}` : club.gd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentNewsAndRanking
