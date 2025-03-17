"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useAudio } from "@/contexts/AudioContext"

const AudioPlayer: React.FC = () => {
  const { isPlaying, togglePlay, isAudioLoaded } = useAudio()

  return (
    <motion.button
      onClick={togglePlay}
      className="flex items-center space-x-1"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={!isAudioLoaded}
    >
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className={`w-[2px] h-4 bg-current ${isPlaying && isAudioLoaded ? "animate-pulse" : ""}`}
          animate={
            isPlaying && isAudioLoaded
              ? {
                  height: [16, 8, 16],
                  transition: {
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: i * 0.2,
                    ease: "easeInOut",
                  },
                }
              : { height: 16 }
          }
        />
      ))}
    </motion.button>
  )
}

export default AudioPlayer

