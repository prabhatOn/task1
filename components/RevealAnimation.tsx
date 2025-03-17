"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function RevealAnimation() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => setIsRevealed(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {!isRevealed && (
        <>
          <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />
          <motion.div
            className="fixed inset-0 bg-white z-50"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ originY: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

