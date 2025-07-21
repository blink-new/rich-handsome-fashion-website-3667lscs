import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'

const ShopPage = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = ['ALL', 'TEES', 'SWEATERS', 'ACCESSORIES']
  
  const products = [
    {
      id: 1,
      name: 'RAZOR TEE',
      price: '$180',
      category: 'TEES',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FciyAh9tPtXMCXsAAaqqbD4EmNM12%2FRHandsome-Rozor__dade50c6.png?alt=media&token=df540d78-19a1-4d0d-9fdb-326096601076',
      size: 'large'
    },
    {
      id: 2,
      name: 'CHROME HOODIE',
      price: '$320',
      category: 'SWEATERS',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FciyAh9tPtXMCXsAAaqqbD4EmNM12%2FRHandsomeRazor1Chrome__8f546c73.png?alt=media&token=258a75fa-c768-48d5-b712-e5c3c887a4d0',
      size: 'medium'
    },
    {
      id: 3,
      name: 'MONO COLLECTION',
      price: '$240',
      category: 'TEES',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FciyAh9tPtXMCXsAAaqqbD4EmNM12%2FRHMONO__3ff00bfc.png?alt=media&token=3ca666e5-dccb-4964-a6ed-9358e0bf554e',
      size: 'small'
    },
    {
      id: 4,
      name: 'HARD RICH SERIES',
      price: '$280',
      category: 'SWEATERS',
      image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FciyAh9tPtXMCXsAAaqqbD4EmNM12%2Fhardrich__bfe6388e.png?alt=media&token=75ca47a2-1d26-4c69-b95a-5b35d8f301b9',
      size: 'large'
    }
  ]

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const getGridClass = (index: number, size: string) => {
    const patterns = [
      'col-span-2 row-span-2', // large
      'col-span-1 row-span-1', // small
      'col-span-1 row-span-2', // tall
      'col-span-2 row-span-1', // wide
    ]
    
    if (size === 'large') return 'col-span-2 row-span-2'
    if (size === 'small') return 'col-span-1 row-span-1'
    return patterns[index % patterns.length]
  }

  return (
    <div className="min-h-screen bg-rh-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-rh-white/95 backdrop-blur-sm border-b border-rh-black/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-ultra-wide"
          >
            RH<span className="text-rh-red">$</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                className={`font-medium tracking-wide transition-colors ${
                  selectedCategory === category
                    ? 'text-rh-red border-b-2 border-rh-red'
                    : 'text-rh-black hover:text-rh-red'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-rh-black/5 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-rh-white border-t border-rh-black/10"
          >
            <div className="px-6 py-4 space-y-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left font-medium tracking-wide transition-colors ${
                    selectedCategory === category
                      ? 'text-rh-red'
                      : 'text-rh-black hover:text-rh-red'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-ultra-wide mb-4">
            LUXURY STREETWEAR
          </h1>
          <p className="text-rh-silver font-serif text-lg md:text-xl max-w-2xl mx-auto">
            Disruptive designs for the forward-thinking elite. Each piece crafted with precision and artistic vision.
          </p>
        </motion.section>

        {/* Products Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`${getGridClass(index, product.size)} group cursor-pointer`}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                onClick={() => navigate(`/product/${product.id}`)}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <div className="relative w-full h-full bg-rh-black/5 overflow-hidden">
                  {/* Product Image */}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-rh-black/60 flex flex-col justify-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProduct === product.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-rh-white font-bold text-lg tracking-wide mb-1">
                      {product.name}
                    </h3>
                    <p className="text-rh-silver font-serif">
                      {product.price}
                    </p>
                    <motion.button
                      className="mt-2 px-4 py-2 bg-rh-red text-rh-white font-medium tracking-wide hover:bg-rh-red/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW DETAILS
                    </motion.button>
                  </motion.div>

                  {/* Metallic Frame Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-rh-silver/50"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProduct === product.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Collection CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center py-16 border-t border-rh-black/10"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-ultra-wide mb-6">
            EXPLORE THE FULL COLLECTION
          </h2>
          <motion.button
            onClick={() => navigate('/collection')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-rh-black text-rh-white font-bold tracking-super-wide hover:bg-rh-red transition-colors duration-300"
          >
            VIEW GALLERY
          </motion.button>
        </motion.section>
      </main>
    </div>
  )
}

export default ShopPage