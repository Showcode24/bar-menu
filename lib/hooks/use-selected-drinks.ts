"use client"

import { useState, useEffect } from "react"

export function useSelectedDrink() {
  const [selectedDrinkId, setSelectedDrinkId] = useState<string | null>(null)

  // Clear the selection after a delay
  useEffect(() => {
    if (selectedDrinkId) {
      const timer = setTimeout(() => {
        setSelectedDrinkId(null)
      }, 5000) // Clear after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [selectedDrinkId])

  return {
    selectedDrinkId,
    setSelectedDrinkId,
    clearSelectedDrink: () => setSelectedDrinkId(null),
  }
}
