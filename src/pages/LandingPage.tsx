import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const LandingPage = () => {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleEnter = () => {
    navigate('/shop')
  }

  return (
    <div className="relative min-h-screen bg-rh-black overflow-hidden">
      {/* Enhanced Background with Deep Contrast */}
      <div className="absolute inset-0">
        {/* Deep black base with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rh-black via-rh-black to-rh-dark-gray" />
        
        {/* Dramatic red accent lighting */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 40%)',
              'radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.15) 0%, transparent 40%)',
              'radial-gradient(circle at 50% 10%, rgba(220, 38, 38, 0.15) 0%, transparent 40%)',
              'radial-gradient(circle at 30% 90%, rgba(220, 38, 38, 0.15) 0%, transparent 40%)',
              'radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 40%)',
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Premium metallic shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-rh-silver/8 to-transparent"
          animate={{
            x: ['-120%', '120%']
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2
          }}
        />

        {/* Subtle grid pattern for texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">


        {/* Brand Logo with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mb-20"
        >
          {/* Main Logo */}
          <div className="relative mb-6">
            <img 
              src="/rich-handsome-logo.png" 
              alt="Rich Hand$ome" 
              className="h-32 md:h-48 lg:h-64 w-auto mx-auto filter invert brightness-0 contrast-100 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            />
            {/* Logo glow effect */}
            <img 
              src="/rich-handsome-logo.png" 
              alt="" 
              className="absolute inset-0 h-32 md:h-48 lg:h-64 w-auto mx-auto filter invert brightness-0 contrast-100 opacity-20 blur-sm"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-rh-silver font-serif text-xl md:text-2xl tracking-super-wide font-light"
          >
            ITS BETTER TO BE BOTH
          </motion.p>
        </motion.div>

        {/* Enhanced Enter Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="relative"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(220, 38, 38, 0.6), 0 0 80px rgba(220, 38, 38, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnter}
            className="group relative px-16 py-5 bg-transparent border-2 border-rh-red text-rh-red font-bold text-2xl tracking-super-wide transition-all duration-500 hover:bg-rh-red hover:text-rh-white overflow-hidden backdrop-blur-sm"
          >
            <span className="relative z-10 drop-shadow-lg">ENTER</span>
            
            {/* Button fill animation */}
            <motion.div
              className="absolute inset-0 bg-rh-red"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Button glow */}
            <div className="absolute inset-0 border-2 border-rh-red opacity-50 blur-sm" />
          </motion.button>
        </motion.div>

        {/* Refined Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-3 h-3 bg-rh-red rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)]"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/5 w-2 h-2 bg-rh-silver rounded-full shadow-[0_0_15px_rgba(192,192,192,0.6)]"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-rh-red rounded-full shadow-[0_0_10px_rgba(220,38,38,0.6)]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Additional premium accent elements */}
        <motion.div
          className="absolute top-1/2 left-1/12 w-px h-16 bg-gradient-to-b from-transparent via-rh-silver/40 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/12 w-px h-12 bg-gradient-to-b from-transparent via-rh-red/40 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Enhanced Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-rh-silver text-base tracking-wide font-light relative">
          <span className="relative z-10">YOUNG • YEARNING • SHARP</span>
          <div className="absolute inset-0 text-rh-silver opacity-30 blur-sm">
            YOUNG • YEARNING • SHARP
          </div>
        </p>
      </motion.div>

      {/* Subtle corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-rh-silver/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-rh-silver/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-rh-silver/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-rh-silver/20" />
    </div>
  )
}

export default LandingPage