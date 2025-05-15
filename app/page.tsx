"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MobileNav from "@/components/mobile-nav"
import Hero from "@/components/hero"
import DrinkCard from "@/components/drink-card"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ReservationSection from "@/components/reservation-section"
import CustomOnboardingTour from "@/components/custom-onboarding-tour"
import type { DrinkCategory, Drink } from "@/lib/types"
import { drinks } from "@/lib/data"
import { ChevronUp } from "lucide-react"
import { preloadImages } from "@/lib/utils/image-preloader"
import SearchOverlay from "@/components/search-overlay"
import { useSelectedDrink } from "@/lib/hooks/use-selected-drinks"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<DrinkCategory | "all">("all")
  const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>(drinks)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { selectedDrinkId, setSelectedDrinkId } = useSelectedDrink()
  const mainRef = useRef<HTMLElement>(null)

  const categories: (DrinkCategory | "all")[] = [
    "all",
    "lagers",
    "spirits",
    "bitters",
    "cocktails",
    "wines",
    "non-alcoholic",
    "traditional",
  ]

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter drinks based on selected category - using memoization for performance
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredDrinks(drinks)
    } else {
      setFilteredDrinks(drinks.filter((drink) => drink.category === selectedCategory))
    }
  }, [selectedCategory])

  // Preload critical images during initial load
  useEffect(() => {
    const preloadCriticalImages = async () => {
      try {
        // Preload first 6 drink images for faster initial render
        const imagesToPreload = drinks.slice(0, 6).map((drink) => drink.image || "/placeholder.svg")
        await preloadImages(imagesToPreload)

        // Simulate loading with a minimum time to show the animation
        setTimeout(() => {
          setIsLoaded(true)
        }, 2500)
      } catch (error) {
        console.error("Failed to preload images:", error)
        setIsLoaded(true) // Ensure we still show content even if preloading fails
      }
    }

    preloadCriticalImages()
  }, [])

  // Effect to handle when a drink is selected from search
  useEffect(() => {
    if (selectedDrinkId) {
      // Find the selected drink
      const selectedDrink = drinks.find((drink) => drink.id === selectedDrinkId)

      if (selectedDrink) {
        // Update the category if needed
        if (selectedDrink.category !== selectedCategory && selectedCategory !== "all") {
          setSelectedCategory(selectedDrink.category as DrinkCategory)
        }

        // Small delay to ensure the DOM has updated with the new category
        setTimeout(() => {
          // Try to find the specific drink element
          const drinkElement = document.getElementById(`drink-${selectedDrinkId}`)
          if (drinkElement) {
            drinkElement.scrollIntoView({ behavior: "smooth", block: "center" })
          } else {
            // Fallback to scrolling to the menu section
            const menuSection = document.getElementById("menu")
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: "smooth" })
            }
          }
        }, 100) // Short delay to ensure DOM updates
      }
    }
  }, [selectedDrinkId, selectedCategory])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Function to open search overlay
  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  // Get category display name for the heading
  const getCategoryDisplayName = (category: DrinkCategory | "all") => {
    switch (category) {
      case "all":
        return "All Drinks"
      case "lagers":
        return "Lagers & Stouts"
      case "spirits":
        return "Premium & Regular Spirits"
      case "bitters":
        return "Bitters"
      case "cocktails":
        return "Cocktails & Bar Blends"
      case "wines":
        return "Wines"
      case "non-alcoholic":
        return "Malts & Non-Alcoholic Drinks"
      case "traditional":
        return "Traditional Favorites"
      default:
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
  }

  return (
    <main ref={mainRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Onboarding Tour */}
      {isLoaded && <CustomOnboardingTour />}

      <AnimatePresence>
        {!isLoaded && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <>
          <Hero />

          <MobileNav
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenSearch={handleOpenSearch} // Pass the search function
          />

          <section id="menu" className="pt-20 pb-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center items-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-center text-amber-400"
                >
                  {getCategoryDisplayName(selectedCategory)}
                </motion.h2>
              </div>

              <div className="category-menu mb-8 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 pb-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                        ? "bg-amber-500 text-black font-medium"
                        : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                        }`}
                    >
                      {getCategoryDisplayName(category)}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {filteredDrinks.map((drink, index) => (
                    <div key={drink.id} className={index === 0 ? "drink-card" : ""}>
                      <DrinkCard drink={drink} index={index} isSelected={drink.id === selectedDrinkId} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredDrinks.length === 0 && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-zinc-400 py-12">
                  No drinks found in this category.
                </motion.p>
              )}
            </div>
          </section>

          <ReservationSection />

          <Footer />

          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-amber-500 text-black p-3 rounded-full shadow-lg"
                aria-label="Scroll to top"
              >
                <ChevronUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Add SearchOverlay component */}
          <SearchOverlay
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            onDrinkSelect={setSelectedDrinkId}
          />
        </>
      )}
    </main>
  )
}
