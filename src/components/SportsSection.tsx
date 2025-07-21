import React from 'react'
import ProductMockup from './ProductMockup'

const SportsSection: React.FC = () => {
  return (
    <section id="sports" className="min-h-screen relative overflow-hidden">
      {/* Chrome-textured background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-4 tracking-tight">
              RICH HAND<span className="text-red-600">$</span>OME
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-black/80 tracking-[0.2em] uppercase mb-6">
              Sports
            </h2>
            <p className="text-black/60 text-sm tracking-[0.15em] uppercase font-light">
              It's Better To Be Both
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <ProductMockup
              name="Chrome Hoodie"
              price="$285"
              material="Tech Fleece"
              image="/api/placeholder/400/500"
              backgroundColor="white"
            />
            <ProductMockup
              name="Razor Tee"
              price="$125"
              material="Premium Cotton"
              image="/api/placeholder/400/500"
              backgroundColor="white"
            />
          </div>

          {/* Material Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 text-black/70 text-xs tracking-[0.1em] uppercase">
              <span>Cotton Blend</span>
              <div className="w-px h-4 bg-black/30"></div>
              <span>Tech Fleece</span>
              <div className="w-px h-4 bg-black/30"></div>
              <span>Performance Fit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SportsSection