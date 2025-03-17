"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useCallback, useRef } from "react"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHoveringBigText, setIsHoveringBigText] = useState(false)
  const [pepperFrame, setPepperFrame] = useState(0)
  const frameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

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
  const cursorSize = isHoveringBigText ? 80 : 0

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: position.x - cursorSize / 2,
        y: position.y - cursorSize / 2,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
    >
      <motion.div
        className="rounded-full overflow-hidden flex items-center justify-center"
        initial={{ width: cursorSize, height: cursorSize, opacity: 1 }}
        animate={{
          width: cursorSize,
          height: cursorSize,
          opacity: 1,
          backgroundColor: isRedTheme ? "rgba(0, 0, 0,0.2)" : "rgba(255, 0, 0, 0.2)",
        }}
        exit={{ width: 0, height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ willChange: "transform, opacity" }}
      >
        {isHoveringBigText && (
          <motion.img
            src={`https://thirtysixstudio.com/peppers/pepperA/${pepperFrame}.png`}
            alt=""
            aria-hidden="true"
            className="w-3/4 h-3/4 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ willChange: "transform" }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
