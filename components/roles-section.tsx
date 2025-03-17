"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { useClickSound } from "@/hooks/use-click-sound"
import { useTheme } from "next-themes"

const roles = [
  "Project Managers",
  "Digital Producers",
  "Designers",
  "Illustrators",
  "Animators",
  "3D Artists",
  "Motion Designers",
  "Developers and Coders",
  "Creative Technologists",
  "Sound Engineers",
]

export default function RolesSection() {
  const [isOpen, setIsOpen] = useState(true)
  const playClickSound = useClickSound()

  const toggleAccordion = useCallback(() => {
    setIsOpen(!isOpen)
    playClickSound()
  }, [isOpen, playClickSound])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t border-b border-border w-full"
    >
      <button onClick={toggleAccordion} className="w-full py-4 flex items-center justify-between text-left">
        <span className="text-sm font-medium">ROLES OPEN</span>
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
              {roles.map((role, idx) => (
                <RoleItem key={idx} role={role} index={idx} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function RoleItem({ role, index = 0 }: { role: string; index?: number }) {
  const playClickSound = useClickSound()
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  let bgColor = "bg-foreground"
  const textColor = "text-background"

  if (theme === "red") {
    bgColor = "bg-black"
  }

  return (
    <motion.div
      className="relative py-2 px-4 cursor-pointer overflow-hidden text-xs"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
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
      <motion.div
        className={`absolute inset-0 ${bgColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 1, willChange: "transform" }}
      />

      <motion.div
        className={`absolute right-0 top-0 bottom-0 w-[2px] ${bgColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1], delay: isHovered ? 0 : 0.1 }}
        style={{ originY: 1, willChange: "transform" }}
      />

      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-[1px] ${bgColor}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: isHovered ? 0.1 : 0 }}
        style={{ originX: 0, willChange: "transform" }}
      />

      <motion.div
        className="relative flex items-center"
        animate={{ x: isHovered ? 2 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span className={`block transition-colors duration-200 ${isHovered ? textColor : ""}`}>
          {role}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

