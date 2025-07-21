import React from 'react'
import ProductMockup from './ProductMockup'

const ClassicSection: React.FC = () => {
  return (
    <section id="classic" className="min-h-screen bg-black text-white relative">
      {/* Gallery-style lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              RICH HANDSOME
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-white/80 tracking-[0.2em] uppercase mb-6">
              Classic
            </h2>
            <p className="text-white/60 text-sm tracking-[0.15em] uppercase font-light">
              It's Better To Be Both
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white/5 p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <ProductMockup
                  name="Hard Rich T-Shirt"
                  price="$95"
                  material="Heavyweight Cotton"
                  image="/api/placeholder/400/500"
                  backgroundColor="white"
                />
                <div className="mt-6 text-center">
                  <div className="w-12 h-px bg-white/30 mx-auto mb-4"></div>
                  <p className="text-white/50 text-xs tracking-[0.1em] uppercase">
                    Gallery Piece 01
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/5 p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <ProductMockup
                  name="Classic Crewneck"
                  price="$185"
                  material="Heavyweight Cotton"
                  image="/api/placeholder/400/500"
                  backgroundColor="white"
                />
                <div className="mt-6 text-center">
                  <div className="w-12 h-px bg-white/30 mx-auto mb-4"></div>
                  <p className="text-white/50 text-xs tracking-[0.1em] uppercase">
                    Gallery Piece 02
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Info */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-8 text-white/50 text-xs tracking-[0.1em] uppercase">
              <span>Museum Quality</span>
              <div className="w-px h-4 bg-white/20"></div>
              <span>Limited Edition</span>
              <div className="w-px h-4 bg-white/20"></div>
              <span>Heavyweight Cotton</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassicSection