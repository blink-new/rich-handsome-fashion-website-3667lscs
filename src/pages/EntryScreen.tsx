import React from 'react'

interface EntryScreenProps {
  onEnter: () => void
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/rich-handsome-logo.png" 
            alt="Rich Hand$ome" 
            className="h-24 w-auto mx-auto filter invert brightness-0 contrast-100"
            style={{
              filter: 'invert(1) brightness(2) drop-shadow(0 0 20px rgba(255,255,255,0.3))'
            }}
          />
        </div>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          className="group relative px-12 py-4 bg-transparent border-2 border-white text-white font-light tracking-[0.2em] text-sm uppercase transition-all duration-500 hover:bg-white hover:text-black hover:tracking-[0.3em]"
        >
          <span className="relative z-10">Enter</span>
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>

        {/* Subtle tagline */}
        <p className="mt-8 text-gray-400 text-xs tracking-[0.15em] uppercase font-light">
          It's Better To Be Both
        </p>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
    </div>
  )
}

export default EntryScreen