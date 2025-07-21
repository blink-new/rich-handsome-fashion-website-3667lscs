import React from 'react'
import ProductMockup from './ProductMockup'

const MonoSection: React.FC = () => {
  return (
    <section id="mono" className="min-h-screen relative" style={{ backgroundColor: '#F5F5F0' }}>
      {/* Architectural elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-black/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/10"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-black/5"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-black/5"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-light text-black/90 mb-4 tracking-tight">
              MONO
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-black/60 tracking-[0.3em] uppercase mb-6">
              Collection
            </h2>
            <p className="text-black/40 text-sm tracking-[0.15em] uppercase font-light">
              It's Better To Be Both
            </p>
          </div>

          {/* Minimal Grid */}
          <div className="grid md:grid-cols-2 gap-24 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white/50 p-12 shadow-sm hover:shadow-md transition-all duration-700">
                <ProductMockup
                  name="Mono Essential"
                  price="$75"
                  material="Organic Cotton"
                  image="/api/placeholder/400/500"
                  backgroundColor="white"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="w-8 h-px bg-black/20 mx-auto mb-3"></div>
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase font-light">
                  Architectural Form
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/50 p-12 shadow-sm hover:shadow-md transition-all duration-700">
                <ProductMockup
                  name="Mono Structure"
                  price="$95"
                  material="Organic Cotton"
                  image="/api/placeholder/400/500"
                  backgroundColor="white"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="w-8 h-px bg-black/20 mx-auto mb-3"></div>
                <p className="text-black/30 text-xs tracking-[0.2em] uppercase font-light">
                  Minimal Design
                </p>
              </div>
            </div>
          </div>

          {/* Material Philosophy */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-black/50 text-sm leading-relaxed font-light tracking-wide">
                Soft, flat, and architectural. The Mono Collection embraces the beauty of simplicity 
                through carefully considered proportions and premium organic cotton construction.
              </p>
              <div className="mt-8 inline-flex items-center space-x-6 text-black/40 text-xs tracking-[0.1em] uppercase">
                <span>Organic Cotton</span>
                <div className="w-px h-3 bg-black/20"></div>
                <span>Minimal Construction</span>
                <div className="w-px h-3 bg-black/20"></div>
                <span>Architectural Cut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MonoSection