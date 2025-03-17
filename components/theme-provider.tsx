"use client"

import type React from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { createContext, useState, useContext, useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

type ThemeContextType = {
  redTheme: boolean
  toggleRedTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  redTheme: false,
  toggleRedTheme: () => {},
})

export const useCustomTheme = () => useContext(ThemeContext)

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const [redTheme, setRedTheme] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleRedTheme = () => {
    setRedTheme((prev) => !prev)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return <ThemeContext.Provider value={{ redTheme, toggleRedTheme }}>{children}</ThemeContext.Provider>
}

