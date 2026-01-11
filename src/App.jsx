import React from 'react'
import Header from './components/Header'
import MainFeature from './components/MainFeature'
import Sidebar from './components/Sidebar'
import Category from './components/Category'
import TrendingNews from './components/TrendingNews'
import CyclingFeature from './components/CyclingFeature'
import NewsSection from './components/NewsSection'
import RecentNewsAndRanking from './components/RecentNewsAndRanking'
import SportsArticle from './components/SportsArticle'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 animate-slide-in-left">
            <MainFeature />
          </div>
          <div className="lg:col-span-1 animate-slide-in-right">
            <Sidebar />
          </div>
        </div>
        <div className="animate-fade-in mb-12">
          <Category />
        </div>
        <div className="animate-fade-in mb-12">
          <NewsSection />
        </div>
        <div className="animate-fade-in mb-12">
          <RecentNewsAndRanking />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
          <div className="lg:col-span-2 animate-slide-in-left">
            <TrendingNews />
          </div>
          <div className="lg:col-span-1 animate-slide-in-right">
            <CyclingFeature />
          </div>
        </div>
        <div className="animate-fade-in mb-12">
          <SportsArticle />
        </div>
        <div className="animate-fade-in mb-12">
          <Newsletter />
        </div>
      </main>
    </div>
  )
}

export default App
