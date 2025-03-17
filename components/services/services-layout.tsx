"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ServiceAccordion from "./service-accordion"
import { serviceCategories } from "./service-data"

export default function ServicesLayout() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        className="text-xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        OUR SERVICES
      </motion.h2>

      <motion.p
        className="text-2xl md:text-3xl lg:text-4xl max-w-4xl mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We provide you with captivating design, interactive animations, reliable code, and immaculate project
        coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we&apos;ve got
        you covered.
      </motion.p>

      <div className="space-y-1">
        {serviceCategories.map((category, index) => (
          <ServiceAccordion key={category.title} category={category} index={index} />
        ))}
      </div>

      <motion.div
        className="mt-24 space-y-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-lg">
          Got a project in mind? Drop us a line at{" "}
          <a href="mailto:hello@thirtysixstudio.com" className="underline">
            hello@thirtysixstudio.com
          </a>{" "}
          or use the form below.
        </p>
        <p className="text-muted-foreground">
          Not sure what you need? We&apos;re here to help you define the undefined. Let&apos;s explore all creative and
          technical possibilities together through one of our tailored labs, where we champion future-forward thinking
          within an ethical framework.
        </p>
        <motion.a
          href="/contact"
          className="inline-block mt-8 px-6 py-3 border border-foreground"
          whileHover={{ backgroundColor: "black", color: "white" }}
          transition={{ duration: 0.3 }}
        >
          TALK TO US
        </motion.a>
      </motion.div>
    </div>
  )
}

