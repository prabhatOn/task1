"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import { useTheme as useNextTheme } from "next-themes"

type ThemeContextType = {
  pendingTheme: string | null
  setPendingTheme: (theme: string | null) => void
  applyTheme: () => void
  currentTheme: string
}

const ThemeContext = createContext<ThemeContextType>({
  pendingTheme: null,
  setPendingTheme: () => {},
  applyTheme: () => {},
  currentTheme: "light",
})

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useNextTheme()
  const [pendingTheme, setPendingTheme] = useState<string | null>(null)
  const [currentTheme, setCurrentTheme] = useState<string>("light")

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme)
    }
  }, [theme])

  const applyTheme = () => {
    if (pendingTheme) {
      setTheme(pendingTheme)
      setPendingTheme(null)
    }
  }

  return (
    <ThemeContext.Provider value={{ pendingTheme, setPendingTheme, applyTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useCustomThemeContext = () => useContext(ThemeContext)

