import React, { useState } from 'react'

interface ProductMockupProps {
  name: string
  price: string
  material: string
  image: string
  backgroundColor?: string
}

const ProductMockup: React.FC<ProductMockupProps> = ({ 
  name, 
  price, 
  material, 
  image, 
  backgroundColor = 'white' 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden mb-6">
        <div 
          className={`aspect-[4/5] bg-${backgroundColor} rounded-sm flex items-center justify-center transition-all duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          style={{ backgroundColor: backgroundColor }}
        >
          {/* Rotating Animation */}
          <div className={`transition-transform duration-1000 ${isHovered ? 'rotate-12' : 'rotate-0'}`}>
            <div className="w-48 h-60 bg-gray-200 rounded-sm shadow-lg flex items-center justify-center">
              {/* Placeholder for actual product image */}
              <div className="text-gray-400 text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded"></div>
                <p className="text-xs font-light">{name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-lg font-light tracking-wide mb-2 group-hover:tracking-wider transition-all duration-300">
          {name}
        </h3>
        <p className="text-sm opacity-70 mb-1 tracking-[0.1em] uppercase font-light">
          {material}
        </p>
        <p className="text-lg font-light tracking-wide">
          {price}
        </p>
      </div>

      {/* Add to Cart Button (appears on hover) */}
      <div className={`mt-4 transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <button className="w-full py-2 border border-current text-sm tracking-[0.1em] uppercase font-light hover:bg-current hover:text-white transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductMockup