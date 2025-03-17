"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function ParallaxPeppers() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [frames, setFrames] = useState<Record<string, number>>({
    A: 0,
    B: 30,
    C: 60,
    D: 90,
    E: 120,
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 })

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)

    const frameInterval = setInterval(() => {
      setFrames((prev) => ({
        A: (prev.A + 1) % 150,
        B: (prev.B + 1) % 150,
        C: (prev.C + 1) % 150,
        D: (prev.D + 1) % 150,
        E: (prev.E + 1) % 150,
      }))
    }, 100)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to be relative to the center of the screen
      mouseX.set((e.clientX - window.innerWidth / 2) / 20)
      mouseY.set((e.clientY - window.innerHeight / 2) / 20)
    }

    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(frameInterval)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null
  if (theme !== "red") return null

  // Pepper configurations with different parallax factors
  const peppers = [
    { variant: "A", factor: 0.8, x: "20%", y: "20%", size: 120 },
    { variant: "B", factor: 0.5, x: "70%", y: "30%", size: 100 },
    { variant: "C", factor: 1.2, x: "30%", y: "70%", size: 150 },
    { variant: "D", factor: 0.7, x: "80%", y: "60%", size: 130 },
    { variant: "E", factor: 1.0, x: "50%", y: "40%", size: 110 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {peppers.map((pepper, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: pepper.size,
            height: pepper.size,
            left: `calc(${pepper.x} - ${pepper.size / 2}px)`,
            top: `calc(${pepper.y} - ${pepper.size / 2}px)`,
            x: springX.get() * pepper.factor,
            y: springY.get() * pepper.factor - scrollY * pepper.factor * 0.1,
          }}
        >
          <img
            src={`https://thirtysixstudio.com/peppers/pepper${pepper.variant}/${frames[pepper.variant]}.png`}
            alt={`Pepper ${pepper.variant}`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  )
}

