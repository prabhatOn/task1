"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useClickSound } from "@/hooks/use-click-sound"
import { ChevronDown } from "lucide-react"

const topics = ["General Inquiry", "Project Collaboration", "Career Opportunities", "Partnership", "Other"]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)
  const { theme = "default" } = useTheme()
  const playClickSound = useClickSound()

  // Determine background and text colors based on theme
  let bgColor = "bg-foreground"
  const textColor = "text-background"

  if (theme === "red") {
    bgColor = "bg-black"
  }

  const handleTopicSelect = (topic: string) => {
    setFormData({ ...formData, topic })
    setIsDropdownOpen(false)
  }

  const inputClasses = `w-full p-4 bg-transparent border-b border-border focus:border-foreground outline-none transition-colors text-sm ${theme === "red" ? "text-black placeholder-black/70" : ""}`

  return (
    <form className="w-full space-y-10">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className={inputClasses}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className={inputClasses}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Custom dropdown trigger */}
          <div
            className={`${inputClasses} flex items-center justify-between cursor-pointer`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className={`${formData.topic ? "" : "text-muted-foreground"} ${theme === "red" ? "text-black" : ""}`}>
              {formData.topic || "Topic*"}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </div>

          {/* Dropdown menu */}
          <AnimatedDropdown
            isOpen={isDropdownOpen}
            topics={topics}
            onSelect={handleTopicSelect}
            bgColor={bgColor}
            textColor={textColor}
            onHover={setHoveredTopic}
            hoveredTopic={hoveredTopic}
            playClickSound={playClickSound}
            theme={theme}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className={`${inputClasses} resize-none`}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </motion.div>
      </div>

      <motion.button
        type="submit"
        className="text-xs underline hover:opacity-70 transition-opacity"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        SEND
      </motion.button>
    </form>
  )
}

interface AnimatedDropdownProps {
  isOpen: boolean;
  topics: string[];
  onSelect: (topic: string) => void;
  bgColor: string;
  textColor: string;
  onHover: (topic: string | null) => void;
  hoveredTopic: string | null;
  playClickSound: () => void;
  theme: string;
}

function AnimatedDropdown({
  isOpen,
  topics,
  onSelect,
  bgColor,
  textColor,
  onHover,
  hoveredTopic,
  playClickSound,
  theme,
}: AnimatedDropdownProps) {
  return (
    <motion.div
      className="absolute left-0 right-0 z-10 mt-1 overflow-hidden rounded-md border border-border shadow-sm"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="py-1">
        {topics.map((topic, index) => (
          <div
            key={topic}
            className="relative py-2 px-4 cursor-pointer overflow-hidden text-xs"
            onClick={() => onSelect(topic)}
            onMouseEnter={() => {
              onHover(topic)
              playClickSound()
            }}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(topic)}
            onBlur={() => onHover(null)}
            tabIndex={isOpen ? 0 : -1}
            role="option"
            aria-selected={topic === hoveredTopic}
          >
            {/* Main background animation */}
            <motion.div
              className={`absolute inset-0 ${bgColor}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: topic === hoveredTopic ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 1, willChange: "transform" }}
            />

            {/* Left side accent */}
            <motion.div
              className={`absolute left-0 top-0 bottom-0 w-[2px] ${bgColor}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: topic === hoveredTopic ? 1 : 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1], delay: topic === hoveredTopic ? 0 : 0.1 }}
              style={{ originY: 0, willChange: "transform" }}
            />

            {/* Text with transition */}
            <motion.div
              className="relative flex items-center"
              animate={{ x: topic === hoveredTopic ? 2 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className={`block transition-colors duration-200 ${topic === hoveredTopic ? textColor : ""} ${theme === "red" && !hoveredTopic ? "text-black" : ""}`}
              >
                {topic}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

