"use client"

import { motion } from "framer-motion"

export default function CircularText() {
  return (
    <motion.div
      className="relative w-32 h-32 md:w-40 md:h-40"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
      >
        <defs>
          <path id="circlePath" d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 " />
        </defs>
        <g>
          <use xlinkHref="#circlePath" fill="none" />
          <text fill="currentColor" className="text-[20px] md:text-2xl">
            <textPath xlinkHref="#circlePath">DIGITAL PRODUCTION — THIRTYSIXSTUDIO — FOR ALL THINGS</textPath>
          </text>
        </g>
      </svg>
    </motion.div>
  )
}

