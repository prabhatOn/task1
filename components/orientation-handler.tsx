"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import Header from "./header"

export default function OrientationHandler() {
  const [isPortrait, setIsPortrait] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    checkOrientation()
    window.addEventListener("resize", checkOrientation)

    return () => {
      window.removeEventListener("resize", checkOrientation)
    }
  }, [])

  const checkOrientation = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsPortrait(true)
    } else {
      setIsPortrait(false)
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      {isMobile && isPortrait ? (
        <motion.div
          className="flex-1 flex flex-col justify-center items-start px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl font-light mb-2"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Please rotate your device.
          </motion.h1>
          <motion.p
            className="text-2xl font-light"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Thank you.
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-light">Welcome to Thirtysixstudio</h1>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

