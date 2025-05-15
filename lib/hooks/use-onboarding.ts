"use client"

import { useState, useEffect } from "react"

export function useOnboarding() {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null)

  // Check if the user has seen the onboarding tour
  useEffect(() => {
    const storedValue = localStorage.getItem("hasSeenOnboarding")
    setHasSeenOnboarding(storedValue === "true")
  }, [])

  // Mark onboarding as seen
  const markOnboardingAsSeen = () => {
    localStorage.setItem("hasSeenOnboarding", "true")
    setHasSeenOnboarding(true)
  }

  // Reset onboarding status
  const resetOnboarding = () => {
    localStorage.removeItem("hasSeenOnboarding")
    setHasSeenOnboarding(false)
  }

  return {
    hasSeenOnboarding,
    markOnboardingAsSeen,
    resetOnboarding,
  }
}
