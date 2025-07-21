import React from 'react'
import Navigation from '../components/Navigation'
import SportsSection from '../components/SportsSection'
import ClassicSection from '../components/ClassicSection'
import MonoSection from '../components/MonoSection'

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Three Collection Sections */}
      <main>
        <ClassicSection />
        <SportsSection />
        <MonoSection />
      </main>
    </div>
  )
}

export default Homepage