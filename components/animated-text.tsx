"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedTextProps {
  text: string
  description: string
}

function AnimatedLetter({ letter, delay }: { letter: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
      >
        {letter}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, description }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-start">
      <div ref={ref} className="md:col-span-1">
        <h3 className="text-4xl md:text-5xl font-bold">
          {text.split("").map((letter, index) => (
            <AnimatedLetter key={index} letter={letter} delay={index * 0.05} />
          ))}
        </h3>
      </div>

      <motion.p
        className="text-sm text-muted-foreground md:col-span-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  )
}

