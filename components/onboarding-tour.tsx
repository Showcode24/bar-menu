"use client"

import { useState, useEffect } from "react"
import Joyride, { type CallBackProps, STATUS, type Step } from "react-joyride"
import { Settings } from "lucide-react"

// Define the tour steps
const tourSteps: Step[] = [
  {
    target: "body",
    content: "Welcome to Docker Bar! Let's take a quick tour to help you get started.",
    placement: "center",
    disableBeacon: true,
  },
  {
    target: ".search-bar",
    content: "Search for your favorite drinks by name, ingredient, or category.",
    placement: "bottom",
  },
  {
    target: ".category-menu",
    content: "Browse drinks by category. We have lagers, spirits, cocktails, and more!",
    placement: "bottom",
  },
  {
    target: ".drink-card",
    content: "Click on any drink to see more details, ingredients, and pricing.",
    placement: "top",
  },
  {
    target: ".reservation-btn",
    content: "Make a reservation for your visit. Choose your date, time, and party size.",
    placement: "top",
  },
  {
    target: "body",
    content: "That's it! Enjoy exploring our menu and we look forward to serving you soon!",
    placement: "center",
  },
]

interface OnboardingTourProps {
  className?: string
}

export default function OnboardingTour({ className }: OnboardingTourProps) {
  const [run, setRun] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [tourFinished, setTourFinished] = useState(false)

  // Check if the user has seen the onboarding tour
  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding")

    // Wait a bit before showing the tour to ensure all elements are loaded
    const timer = setTimeout(() => {
      if (!hasSeenOnboarding) {
        setRun(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle tour callbacks
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, index } = data

    // Update the current step index
    setStepIndex(index)

    // Handle tour completion
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false)
      setTourFinished(true)
      localStorage.setItem("hasSeenOnboarding", "true")
    }
  }

  // Reset the tour (for developers/testing)
  const resetTour = () => {
    localStorage.removeItem("hasSeenOnboarding")
    setStepIndex(0)
    setRun(true)
    setTourFinished(false)
  }

  return (
    <>
      <Joyride
        steps={tourSteps}
        run={run}
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
        stepIndex={stepIndex}
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: "#f59e0b", // amber-500
            textColor: "#ffffff",
            backgroundColor: "#18181b", // zinc-900
            arrowColor: "#18181b", // zinc-900
            overlayColor: "rgba(0, 0, 0, 0.7)",
          },
          buttonNext: {
            backgroundColor: "#f59e0b", // amber-500
            color: "#000000",
            fontSize: "14px",
            borderRadius: "9999px",
            padding: "8px 16px",
          },
          buttonBack: {
            color: "#f59e0b", // amber-500
            fontSize: "14px",
            marginRight: "8px",
          },
          buttonSkip: {
            color: "#a1a1aa", // zinc-400
            fontSize: "14px",
          },
          tooltip: {
            borderRadius: "12px",
            fontSize: "15px",
          },
          tooltipTitle: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          tooltipContent: {
            padding: "16px 8px",
            fontSize: "14px",
            lineHeight: "1.5",
          },
          spotlight: {
            borderRadius: "8px",
          },
        }}
        locale={{
          back: "Back",
          close: "Close",
          last: "Finish",
          next: "Next",
          skip: "Skip tour",
        }}
      />

      {/* Developer reset button - can be placed in a developer menu or settings */}
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
