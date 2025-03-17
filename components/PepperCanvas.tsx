"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function PepperCanvas() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [pepperImages, setPepperImages] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)

    // Generate a smaller set of pepper images for testing
    const variants = ["A", "B", "C"]
    const images: string[] = []

    variants.forEach((variant) => {
      for (let i = 0; i < 5; i++) {
        images.push(`https://thirtysixstudio.com/peppers/pepper${variant}/${i}.png`)
      }
    })

    setPepperImages(images)
  }, [])

  if (!mounted) return null

  // Only render peppers when the theme is red
  if (theme !== "red") return null

  // Create multiple peppers with different positions
  const pepperPositions = [
    { top: "20%", left: "20%", size: 100, zIndex: 10 },
    { top: "60%", left: "70%", size: 80, zIndex: 11 },
    { top: "30%", left: "50%", size: 120, zIndex: 9 },
    { top: "70%", left: "30%", size: 90, zIndex: 12 },
    { top: "40%", left: "80%", size: 110, zIndex: 8 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Debug info */}
      <div className="fixed top-24 left-4 bg-black bg-opacity-50 text-white p-2 z-50">
        Theme: {theme}, Peppers should be visible
      </div>

      {/* Use simple image elements instead of canvas for testing */}
      {pepperPositions.map((position, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: position.top,
            left: position.left,
            zIndex: position.zIndex,
            width: `${position.size}px`,
            height: `${position.size}px`,
          }}
        >
          <img
            src={`https://thirtysixstudio.com/peppers/pepperA/0.png`}
            alt={`Pepper ${index}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

