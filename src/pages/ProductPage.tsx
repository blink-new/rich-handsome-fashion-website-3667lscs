import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ShoppingBag } from 'lucide-react'

const ProductPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

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
            onClick={() => navigate('/shop')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-rh-black hover:text-rh-red transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">BACK TO SHOP</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/cart')}
            className="p-2 hover:bg-rh-black/5 rounded-full transition-colors"
          >
            <ShoppingBag className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-ultra-wide">
              PRODUCT DETAIL
            </h1>
            <p className="text-rh-silver font-serif text-xl max-w-2xl mx-auto">
              3D garment previews, slow-motion rotations, and full-width modal zoom views 
              with metallic frame transitions. Product ID: {id}
            </p>
            <motion.div
              className="inline-block px-8 py-3 border-2 border-rh-red text-rh-red font-bold tracking-super-wide"
              whileHover={{ 
                backgroundColor: 'hsl(var(--rh-red))',
                color: 'hsl(var(--rh-white))'
              }}
            >
              COMING SOON
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage