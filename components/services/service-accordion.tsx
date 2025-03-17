"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import type { ServiceCategory } from "./service-data"
import { useTheme } from "next-themes"
import { useClickSound } from "@/hooks/use-click-sound"

interface ServiceAccordionProps {
  category: ServiceCategory
  index: number
}

export default function ServiceAccordion({ category, index }: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const playClickSound = useClickSound()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleAccordion = useCallback(() => {
    setIsOpen(!isOpen)
    playClickSound()
  }, [isOpen, playClickSound])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-border"
    >
      <button onClick={toggleAccordion} className="w-full py-4 flex items-center justify-between text-left">
        <span className="text-sm font-medium">{category.title}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-1">
              {category.services.map((service, idx) => (
                <ServiceItem key={idx} service={service} index={idx} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ServiceItem({ service, index = 0 }: { service: string; index?: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()
  const playClickSound = useClickSound()

  // Determine background and text colors based on theme
  let bgColor = "bg-foreground"
  const textColor = "text-background"

  if (theme === "red") {
    bgColor = "bg-black"
  }

  return (
    <div
      className="relative py-2 px-4 cursor-pointer overflow-hidden text-xs"
      onMouseEnter={() => {
        setIsHovered(true)
        playClickSound()
      }}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-pressed={isHovered}
    >
      {/* Main background animation */}
      <motion.div
        className={`absolute inset-0 ${bgColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 1, willChange: "transform" }}
      />

      {/* Left side accent */}
      <motion.div
        className={`absolute left-0 top-0 bottom-0 w-[2px] ${bgColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1], delay: isHovered ? 0 : 0.1 }}
        style={{ originY: 0, willChange: "transform" }}
      />

      {/* Text with transition */}
      <motion.div
        className="relative flex items-center"
        animate={{ x: isHovered ? 2 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span className={`block transition-colors duration-200 ${isHovered ? textColor : ""}`}>
          {service}
        </motion.span>
      </motion.div>
    </div>
  )
}

