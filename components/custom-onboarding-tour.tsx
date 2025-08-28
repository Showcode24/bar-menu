"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, X, Settings } from "lucide-react"

// Define the tour steps
interface TourStep {
  target: string
  title: string
  content: string
  placement: "top" | "bottom" | "left" | "right" | "center"
}

const tourSteps: TourStep[] = [
  {
    target: "body",
    title: "Welcome to DOCKERS' CLUB!",
    content: "Let's take a quick tour to help you get started with our digital menu.",
    placement: "center",
  },
  {
    target: ".search-bar",
    title: "Search for Drinks",
    content: "Search for your favorite drinks by name, ingredient, or category.",
    placement: "bottom",
  },
  {
    target: ".category-menu",
    title: "Browse Categories",
    content: "Browse drinks by category. We have lagers, spirits, cocktails, and more!",
    placement: "bottom",
  },
  {
    target: ".drink-card",
    title: "Explore Drinks",
    content: "Click on any drink to see more details, ingredients, and pricing.",
    placement: "top",
  },
  {
    target: ".reservation-btn",
    title: "Make a Reservation",
    content: "Make a reservation for your visit. Choose your date, time, and party size.",
    placement: "top",
  },
  {
    target: "body",
    title: "You're All Set!",
    content: "That's it! Enjoy exploring our menu and we look forward to serving you soon!",
    placement: "center",
  },
]

interface CustomOnboardingTourProps {
  className?: string
}

export default function CustomOnboardingTour({ className }: CustomOnboardingTourProps) {
  const [isActive, setIsActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetElement, setTargetElement] = useState<Element | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Check if the user has seen the onboarding tour
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding")

    // Wait a bit before showing the tour to ensure all elements are loaded
    const timer = setTimeout(() => {
      if (!hasSeenOnboarding) {
        setIsActive(true)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Find the target element and calculate tooltip position
  useEffect(() => {
    if (!isActive) return

    const step = tourSteps[currentStep]

    // For body or center placement, we don't need to find a specific element
    if (step.target === "body" || step.placement === "center") {
      setTargetElement(document.body)

      // Center the tooltip in the viewport
      setTooltipPosition({
        top: window.innerHeight / 2 - (tooltipRef.current?.offsetHeight || 0) / 2,
        left: window.innerWidth / 2 - (tooltipRef.current?.offsetWidth || 0) / 2,
      })
      return
    }

    // Find the target element
    const element = document.querySelector(step.target)
    if (!element) {
      console.warn(`Target element "${step.target}" not found`)
      handleNext()
      return
    }

    setTargetElement(element)

    // Calculate tooltip position based on element position and placement
    const rect = element.getBoundingClientRect()
    const tooltipHeight = tooltipRef.current?.offsetHeight || 200
    const tooltipWidth = tooltipRef.current?.offsetWidth || 300
    const margin = 20 // Margin between tooltip and target element

    let top = 0
    let left = 0

    switch (step.placement) {
      case "top":
        top = rect.top - tooltipHeight - margin
        left = rect.left + rect.width / 2 - tooltipWidth / 2
        break
      case "bottom":
        top = rect.bottom + margin
        left = rect.left + rect.width / 2 - tooltipWidth / 2
        break
      case "left":
        top = rect.top + rect.height / 2 - tooltipHeight / 2
        left = rect.left - tooltipWidth - margin
        break
      case "right":
        top = rect.top + rect.height / 2 - tooltipHeight / 2
        left = rect.right + margin
        break
    }

    // Ensure tooltip stays within viewport
    if (top < 0) top = margin
    if (left < 0) left = margin
    if (top + tooltipHeight > window.innerHeight) top = window.innerHeight - tooltipHeight - margin
    if (left + tooltipWidth > window.innerWidth) left = window.innerWidth - tooltipWidth - margin

    setTooltipPosition({ top, left })

    // Scroll to the element if it's not fully visible
    if (rect.top < 0 || rect.bottom > window.innerHeight || rect.left < 0 || rect.right > window.innerWidth) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [isActive, currentStep])

  // Handle next step
  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleFinish()
    }
  }

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Handle finish
  const handleFinish = () => {
    setIsActive(false)
    localStorage.setItem("hasSeenOnboarding", "true")
  }

  // Handle skip
  const handleSkip = () => {
    setIsActive(false)
    localStorage.setItem("hasSeenOnboarding", "true")
  }

  // Reset the tour (for developers/testing)
  const resetTour = () => {
    localStorage.removeItem("hasSeenOnboarding")
    setCurrentStep(0)
    setIsActive(true)
  }

  // Get current step
  const currentTourStep = tourSteps[currentStep]
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === tourSteps.length - 1
  const isCentered = currentTourStep.placement === "center" || currentTourStep.target === "body"

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/70 pointer-events-none"
            />

            {/* Spotlight for target element */}
            {targetElement && !isCentered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed z-[61] pointer-events-none"
                style={{
                  top: targetElement.getBoundingClientRect().top - 8,
                  left: targetElement.getBoundingClientRect().left - 8,
                  width: targetElement.getBoundingClientRect().width + 16,
                  height: targetElement.getBoundingClientRect().height + 16,
                  boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.75)",
                  borderRadius: "8px",
                }}
              />
            )}

            {/* Tooltip */}
            <motion.div
              ref={tooltipRef}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed z-[62] w-[300px] max-w-[calc(100vw-40px)] bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl"
              style={{
                top: `${tooltipPosition.top}px`,
                left: `${tooltipPosition.left}px`,
              }}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-amber-500">{currentTourStep.title}</h3>
                  <button
                    onClick={handleSkip}
                    className="text-zinc-400 hover:text-zinc-200 transition-colors"
                    aria-label="Skip tour"
                  >
                    <X size={18} />
                  </button>
                </div>
                <p className="text-zinc-300 mb-5">{currentTourStep.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {tourSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentStep ? "bg-amber-500" : "bg-zinc-600"}`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {!isFirstStep && (
                      <button
                        onClick={handlePrevious}
                        className="px-3 py-1.5 text-sm text-amber-500 hover:text-amber-400 transition-colors flex items-center"
                      >
                        <ChevronLeft size={16} className="mr-1" />
                        Back
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      className="px-4 py-1.5 text-sm bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors flex items-center"
                    >
                      {isLastStep ? "Finish" : "Next"}
                      {!isLastStep && <ChevronRight size={16} className="ml-1" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Developer reset button */}
      <button
        onClick={resetTour}
        className={`fixed bottom-4 left-4 z-10 p-2 bg-zinc-800 rounded-full opacity-50 hover:opacity-100 transition-opacity ${className}`}
        aria-label="Reset onboarding tour"
        title="Reset onboarding tour"
      >
        <Settings size={18} className="text-amber-500" />
      </button>
    </>
  )
}
