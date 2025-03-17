"use client"

import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function RedThemeTransition() {
  const { theme } = useTheme()
  const [prevTheme, setPrevTheme] = useState<string | null>(null)
  const [showTransition, setShowTransition] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (prevTheme !== theme) {
      if (theme === "red") {
        setShowTransition(true)
        const timer = setTimeout(() => {
          setShowTransition(false)
        }, 1200)
        return () => clearTimeout(timer)
      }
      setPrevTheme(theme)
    }
  }, [theme, prevTheme, mounted])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {showTransition && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ backgroundColor: "hsl(0, 84%, 60%)" }}
          />

          <motion.div
            className="fixed inset-0 z-[99] pointer-events-none"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            style={{ backgroundColor: "hsl(0, 84%, 65%)" }}
          />

          <motion.div
            className="fixed inset-0 z-[98] pointer-events-none"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            style={{ backgroundColor: "hsl(0, 84%, 70%)" }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

