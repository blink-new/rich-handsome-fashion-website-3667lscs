import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const CollectionPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-rh-black text-rh-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-rh-black/95 backdrop-blur-sm border-b border-rh-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <motion.button
            onClick={() => navigate('/shop')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-rh-white hover:text-rh-red transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">BACK TO SHOP</span>
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
            <h1 className="text-6xl md:text-8xl font-bold tracking-ultra-wide">
              GALLERY
            </h1>
            <p className="text-rh-silver font-serif text-xl max-w-2xl mx-auto">
              High-concept art exhibit styling with scrolling parallax, video loops, and layered overlays. 
              Coming soon to showcase the complete Rich Hand$ome universe.
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

export default CollectionPage