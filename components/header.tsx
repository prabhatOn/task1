"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { MoreHorizontal } from "lucide-react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { motion, AnimatePresence } from "framer-motion"
import { smoothScroll } from "@/utils/smoothScroll"
import AudioPlayer from "./AudioPlayer"
import { hoverTransition } from "@/utils/animation-config"

interface NavItemProps {
  href: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const showUnderline = isHovered || isFocused

  return (
    <div className="relative">
      <a
        href={href}
        className="text-base transition-colors py-1 outline-none"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label={label}
      >
        {label}
      </a>
      <AnimatePresence>
        {showUnderline && (
          <motion.div
            className="absolute bottom-0 left-0 h-[1px] bg-foreground"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={hoverTransition}
            style={{ transformOrigin: "left" }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  const navItems = [
    { href: "#what-we-do", label: "What we do" },
    { href: "#who-we-are", label: "Who we are" },
    { href: "#how-we-give-back", label: "How we give back" },
    { href: "#talk-to-us", label: "Talk to us" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border"
        style={{
          backgroundColor: "hsla(var(--background), 0.8)",
          color: "hsl(var(--foreground))",
        }}
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" ? "-100%" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-base">
            BridgeGroupSolutions
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={(e) => smoothScroll(e, item.href.substring(1))}
                />
              ))}

              <button className="text-base hover:opacity-70 transition-opacity" aria-label="More options">
                ...
              </button>
            </nav>

            <div className="flex items-center gap-6">
              <button
                onClick={handleThemeToggle}
                className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground"
                style={{
                  backgroundColor: theme === "dark" ? "hsl(var(--foreground))" : "hsl(var(--muted))",
                }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 rounded-full"
                  animate={{
                    x: theme === "dark" ? 2 : 26,
                    backgroundColor: theme === "dark" ? "hsl(var(--background))" : "hsl(var(--foreground))",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              </button>
              <AudioPlayer />
            </div>

            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-foreground rounded-md p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <MoreHorizontal className="h-6 w-6" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden px-6 py-4 border-t border-border"
              style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base py-2 focus:outline-none focus:underline"
                    onClick={(e) => {
                      smoothScroll(e, item.href.substring(1))
                      setMobileMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  )
}

