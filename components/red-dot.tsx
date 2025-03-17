"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import { useAudio } from "@/contexts/AudioContext"
import { useTheme } from "next-themes"

export default function RedDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { showPrompt, isAudioLoaded } = useAudio()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHoveringBigText, setIsHoveringBigText] = useState(false)
  const [pepperFrame, setPepperFrame] = useState(0)
  const frameRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const animatePepper = useCallback(() => {
    if (isHoveringBigText) {
      frameRef.current = (frameRef.current + 1) % 150
      setPepperFrame(frameRef.current)
    }
    rafRef.current = requestAnimationFrame(animatePepper)
  }, [isHoveringBigText])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })

    const target = e.target as HTMLElement
    const isBigText = target.closest(".big-text-hover-target") !== null
    setIsHoveringBigText(isBigText)
  }, [])

  useEffect(() => {
    setMounted(true)

    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", handleMouseMove)
      rafRef.current = requestAnimationFrame(animatePepper)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove, animatePepper])

  if (!mounted) return null

  const isRedTheme = theme === "red"
  const dotSize = isHoveringBigText ? 60 : 30
  const dotOffset = dotSize / 2

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      animate={{
        x: position.x - dotOffset,
        y: position.y - dotOffset,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
        mass: 0.5,
      }}
    >
      <motion.div
        className={`rounded-full flex items-center justify-center overflow-hidden ${isRedTheme ? "bg-black" : "bg-red-500"}`}
        animate={{
          width: dotSize,
          height: dotSize,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {isHoveringBigText && (
          <motion.img
            src={`https://thirtysixstudio.com/peppers/pepperA/${pepperFrame}.png`}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ willChange: "transform" }}
          />
        )}
      </motion.div>

      {showPrompt && isAudioLoaded && (
        <motion.span
          className={`absolute left-6 top-1/2 -translate-y-1/2 text-sm uppercase tracking-wide whitespace-nowrap ${isRedTheme ? "text-black" : "text-red-500"}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
        >
          Click for sound
        </motion.span>
      )}
    </motion.div>
  )
}

