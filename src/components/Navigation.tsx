import React, { useState } from 'react'

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/rich-handsome-logo.png" 
              alt="Rich Hand$ome" 
              className="h-8 w-auto filter invert brightness-0 contrast-100"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sports" className="text-white hover:text-gray-300 text-sm tracking-wide uppercase font-light transition-colors">
              Sports
            </a>
            <a href="#classic" className="text-white hover:text-gray-300 text-sm tracking-wide uppercase font-light transition-colors">
              Classic
            </a>
            <a href="#mono" className="text-white hover:text-gray-300 text-sm tracking-wide uppercase font-light transition-colors">
              Mono
            </a>
            <div className="w-px h-6 bg-gray-600"></div>
            <button className="text-white hover:text-gray-300 text-sm tracking-wide uppercase font-light transition-colors">
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-px bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-px bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-px bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#sports" className="text-white text-sm tracking-wide uppercase font-light">
                Sports
              </a>
              <a href="#classic" className="text-white text-sm tracking-wide uppercase font-light">
                Classic
              </a>
              <a href="#mono" className="text-white text-sm tracking-wide uppercase font-light">
                Mono
              </a>
              <button className="text-white text-sm tracking-wide uppercase font-light text-left">
                Cart (0)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation