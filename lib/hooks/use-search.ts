"use client"

import { useState, useEffect, useMemo } from "react"
import { useDebounce } from "./use-debounce"
import { drinks } from "@/lib/data"
import type { Drink } from "@/lib/types"

// Create a cache object outside the hook to persist between renders
const searchCache: Record<string, Drink[]> = {}

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Drink[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Debounce the search query to avoid excessive filtering
  const debouncedQuery = useDebounce(searchQuery, 300)

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches))
      } catch (error) {
        console.error("Failed to parse recent searches:", error)
      }
    }
  }, [])

  // Save recent searches to localStorage when they change
  useEffect(() => {
    if (recentSearches.length > 0) {
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
    }
  }, [recentSearches])

  // Perform the search when the debounced query changes
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsLoading(true)

    // Check if we have cached results for this query
    if (searchCache[debouncedQuery]) {
      setSearchResults(searchCache[debouncedQuery])
      setIsLoading(false)
      return
    }

    // Simulate a slight delay to show loading state (remove in production)
    const timer = setTimeout(() => {
      const results = performSearch(debouncedQuery)

      // Cache the results
      searchCache[debouncedQuery] = results

      setSearchResults(results)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [debouncedQuery])

  // Add a search term to recent searches
  const addToRecentSearches = (term: string) => {
    if (!term.trim()) return

    setRecentSearches((prev) => {
      // Remove the term if it already exists
      const filtered = prev.filter((item) => item !== term)
      // Add the term to the beginning and limit to 5 items
      return [term, ...filtered].slice(0, 5)
    })
  }

  // Clear all recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  // Perform the actual search
  const performSearch = (query: string): Drink[] => {
    const normalizedQuery = query.toLowerCase().trim()

    return drinks.filter((drink) => {
      // Search in name, description, category, and tags
      return (
        drink.name.toLowerCase().includes(normalizedQuery) ||
        drink.description.toLowerCase().includes(normalizedQuery) ||
        drink.category.toLowerCase().includes(normalizedQuery) ||
        drink.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        drink.ingredients?.some((ingredient) => ingredient.toLowerCase().includes(normalizedQuery))
      )
    })
  }

  // Memoize popular search terms to avoid recalculation
  const popularSearchTerms = useMemo(() => {
    // This could be dynamically generated based on analytics in a real app
    return ["Whiskey", "Martini", "Wine", "Mocktail", "Beer"]
  }, [])

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    recentSearches,
    addToRecentSearches,
    clearRecentSearches,
    popularSearchTerms,
  }
}
