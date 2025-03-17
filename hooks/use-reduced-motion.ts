"use client"

import { useState, useEffect } from "react"

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const onChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    // Use the appropriate event listener based on browser support
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onChange)
      return () => {
        mediaQuery.removeEventListener("change", onChange)
      }
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(onChange)
      return () => {
        mediaQuery.removeListener(onChange)
      }
    }
  }, [])

  return prefersReducedMotion
}

