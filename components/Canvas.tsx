"use client"

import { useEffect, useRef, useState } from "react"
import canvasImages from "@/utils/canvasImages"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface CanvasDetails {
  startIndex: number
  numImages: number
  duration: number
  size: number
  top: number
  left: number
  zIndex: number
}

interface CanvasProps {
  details: CanvasDetails
}

function Canvas({ details }: CanvasProps) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details

  const [index, setIndex] = useState({ value: startIndex })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) })
      },
    })

    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    })
  })

  useEffect(() => {
    if (!canvasRef.current) return

    const scale = window.devicePixelRatio
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous" // Add this to avoid CORS issues
    img.src = canvasImages[index.value]
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale
      canvas.height = canvas.offsetHeight * scale
      canvas.style.width = canvas.offsetWidth + "px"
      canvas.style.height = canvas.offsetHeight + "px"

      ctx.scale(scale, scale)
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight)
    }
  }, [index])

  return (
    <canvas
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${size * 1.8}px`,
        height: `${size * 1.8}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    ></canvas>
  )
}

export default Canvas

