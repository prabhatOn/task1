"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import CircularText from "./circular-text"
import { useTheme } from "next-themes"
import { hoverTransition } from "@/utils/animation-config"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const { theme, setTheme } = useTheme()

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => setIsLoaded(true), 1500) 
    return () => clearTimeout(timer)
  }, [])

  const toggleRedTheme = useCallback(() => {
    if (theme === "red") {
      setTheme("light")
    } else {
      setTheme("red")
    }
  }, [theme, setTheme])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  if (!isMounted) return null

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between">
      <motion.div
        style={{ y, opacity }}
        className="flex-1 pt-40 px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-12"
              variants={itemVariants}
            >
              At BridgeGroupSoultion, we build digital assets and immersive experiences for purposeful brands.
            </motion.h1>

            <motion.p className="text-lg md:text-xl mb-12 text-muted-foreground" variants={itemVariants}>
              We're a boutique production studio focused on design, animation, and technology, constantly rethinking
              what digital craft can do for present-day ads and campaigns.
            </motion.p>

            <motion.button
              className="text-base hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground rounded-sm"
              variants={itemVariants}
            >
              Scroll
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-48 right-56 md:right-56"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <CircularText />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="w-full pb-8"
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="overflow-hidden">
          <motion.h2
            className="text-[12vw] md:text-[10vw] lg:text-[23.5vh] lading-none tracking-tighter font-medium whitespace-nowrap cursor-pointer big-text-hover-target"
            onClick={toggleRedTheme}
            whileTap={{ scale: 0.98 }}
            transition={hoverTransition}
            style={{ willChange: "transform" }}
            tabIndex={0}
            role="button"
            aria-label="Toggle red theme"
            onKeyDown={(e) => e.key === "Enter" && toggleRedTheme()}
          >
            BridgeGroupSoultion
          </motion.h2>
        </div>
      </motion.div>
    </section>
  )
}

