"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function SimplePepperParallax() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    setMounted(true)

    const frameInterval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 150)
    }, 100)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(frameInterval)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null
  if (theme !== "red") return null

  // Calculate positions based on mouse and scroll
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  const offsetX = (mousePosition.x - centerX) / 20
  const offsetY = (mousePosition.y - centerY) / 20
  const scrollOffset = scrollPosition / 10

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Pepper 1 */}
      <div
        className="absolute"
        style={{
          width: 120,
          height: 120,
          left: `calc(20% + ${offsetX * 0.8}px)`,
          top: `calc(20% + ${offsetY * 0.8 - scrollOffset * 0.8}px)`,
        }}
      >
        <img
          src={`https://thirtysixstudio.com/peppers/pepperA/${frame}.png`}
          alt="Pepper A"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Pepper 2 */}
      <div
        className="absolute"
        style={{
          width: 150,
          height: 150,
          left: `calc(70% + ${offsetX * 1.2}px)`,
          top: `calc(60% + ${offsetY * 1.2 - scrollOffset * 1.2}px)`,
        }}
      >
        <img
          src={`https://thirtysixstudio.com/peppers/pepperC/${(frame + 60) % 150}.png`}
          alt="Pepper C"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Pepper 3 */}
      <div
        className="absolute"
        style={{
          width: 130,
          height: 130,
          left: `calc(40% + ${offsetX * 0.5}px)`,
          top: `calc(40% + ${offsetY * 0.5 - scrollOffset * 0.5}px)`,
        }}
      >
        <img
          src={`https://thirtysixstudio.com/peppers/pepperE/${(frame + 120) % 150}.png`}
          alt="Pepper E"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

