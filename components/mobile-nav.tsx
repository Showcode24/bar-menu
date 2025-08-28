"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, Calendar, Crown } from "lucide-react"
import type { DrinkCategory } from "@/lib/types"
import { drinks } from "@/lib/data"

interface MobileNavProps {
  categories: (DrinkCategory | "all")[]
  selectedCategory: DrinkCategory | "all"
  setSelectedCategory: (category: DrinkCategory | "all") => void
  onOpenSearch: () => void // Add this prop to control search from parent
}

export default function MobileNav({
  categories,
  selectedCategory,
  setSelectedCategory,
  onOpenSearch, // Add this prop
}: MobileNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCategorySelect = (category: DrinkCategory | "all") => {
    setSelectedCategory(category)
    setIsMenuOpen(false)
  }

  const scrollToReservations = () => {
    document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const scrollToMembership = () => {
    document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  // Get category display names
  const getCategoryDisplayName = (category: DrinkCategory | "all") => {
    switch (category) {
      case "all":
        return "All Drinks"
      case "lagers":
        return "Lagers & Stouts"
      case "spirits":
        return "Spirits"
      case "bitters":
        return "Bitters"
      case "cocktails":
        return "Cocktails"
      case "wines":
        return "Wines"
      case "non-alcoholic":
        return "Non-Alcoholic"
      case "traditional":
        return "Traditional"
      default:
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
  }

  return (
    <>
      {/* Fixed header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold text-amber-500">
              DOCKERS' CLUB
            </motion.h1>

            <div className="flex items-center space-x-3">
              <button
                onClick={scrollToReservations}
                className="reservation-btn p-2 text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Reservations"
              >
                <Calendar size={20} />
              </button>
              <button
                onClick={scrollToMembership}
                className="membership-btn p-2 text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Reservations"
              >
                <Crown size={20} />
              </button>
              <button
                onClick={onOpenSearch} // Use the prop from parent
                className="search-bar p-2 text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-zinc-400 hover:text-amber-500 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Category pills - visible on scroll */}
      <div
        className={`fixed top-16 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          } bg-zinc-900/90 backdrop-blur-md shadow-md py-3`}
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm transition-all ${selectedCategory === category ? "bg-amber-500 text-black font-medium" : "bg-zinc-800 text-zinc-400"
                  }`}
              >
                {getCategoryDisplayName(category)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full screen menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-amber-500">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-amber-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-medium">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                          className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCategory === category
                            ? "bg-amber-500/20 text-amber-500 font-medium"
                            : "text-white hover:bg-zinc-800"
                            }`}
                        >
                          {getCategoryDisplayName(category)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-medium">Popular Drinks</h3>
                    <div className="space-y-2">
                      {drinks
                        .filter((drink) => drink.popular)
                        .slice(0, 5)
                        .map((drink) => (
                          <button
                            key={drink.id}
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                          >
                            {drink.name}
                          </button>
                        ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-medium">Quick Links</h3>
                    <div className="space-y-2">
                      <button
                        onClick={scrollToReservations}
                        className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                      >
                        Make a Reservation
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-zinc-400">Open today</p>
                    <p className="text-white font-medium">6:00 PM - 2:00 AM</p>
                  </div>
                  <a href="tel:+15551234567" className="px-4 py-2 bg-amber-500 text-black rounded-lg font-medium">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay is now handled by the parent component */}
    </>
  )
}
