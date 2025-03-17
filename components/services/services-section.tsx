"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { serviceCategories } from "./service-data"
import { useClickSound } from "@/hooks/use-click-sound"
import { useTheme } from "next-themes"

export default function Services() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs font-medium">OUR SERVICES</h3>
          </motion.div>
          <div className="md:col-span-3 space-y-12">
            <motion.p
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide you with captivating design, interactive animations, reliable code, and immaculate project
              coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we&apos;ve
              got you covered.
            </motion.p>

            <div className="space-y-1">
              {serviceCategories.map((category, index) => (
                <ServiceAccordion key={category.title} category={category} index={index} />
              ))}
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm">
                Got a project in mind? Drop us a line at{" "}
                <a href="mailto:hello@thirtysixstudio.com" className="underline">
                  hello@thirtysixstudio.com
                </a>{" "}
                or use the form below.
              </p>
              <p className="text-xs text-muted-foreground">
                Not sure what you need? We&apos;re here to help you define the undefined. Let&apos;s explore all
                creative and technical possibilities together through one of our tailored labs, where we champion
                future-forward thinking within an ethical framework.
              </p>
              <motion.a
                href="#contact"
                className="inline-block mt-8 px-6 py-3 border border-foreground text-xs"
                whileHover={{ backgroundColor: "black", color: "white" }}
                transition={{ duration: 0.3 }}
              >
                TALK TO US
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceAccordion({ category, index }: { category: { title: string; services: string[] }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const playClickSound = useClickSound()

  const toggleAccordion = useCallback(() => {
    setIsOpen(!isOpen)
    playClickSound()
  }, [isOpen, playClickSound])

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
              {category.services.map((service: string, idx: number) => (
                <ServiceItem key={idx} service={service} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ServiceItem({ service }: { service: string }) {
  const playClickSound = useClickSound()
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  // Determine background and text colors based on theme
  let bgColor = "bg-foreground"
  const textColor = "text-background"

  if (theme === "red") {
    bgColor = "bg-black"
  }

  return (
    <div
      className="relative py-2 px-4 cursor-pointer overflow-hidden text-xs group"
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

