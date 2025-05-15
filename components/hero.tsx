"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="object-cover w-full h-full opacity-40">
          <source src="/videos/bar-ambiance.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-20 h-20 mx-auto mb-4">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" stroke="#F59E0B" strokeWidth="2" />
              <path d="M30 35H70M35 65H65M40 35V65M60 35V65" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500"
        >
          DOCKER BAR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={inView ? { opacity: 1, width: "100px" } : { opacity: 0, width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-amber-500 mx-auto mb-6"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl font-light mb-8 text-zinc-300"
        >
          Nigerian Premium Drinks Experience
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button
            onClick={scrollToMenu}
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button onClick={scrollToMenu} className="animate-bounce p-2" aria-label="Scroll down">
          <ChevronDown className="text-amber-500" size={28} />
        </button>
      </motion.div>
    </div>
  )
}
