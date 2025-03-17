// Centralized animation configuration
export const hoverTransition = {
  duration: 0.3,
  ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for smoother motion
}

export const underlineAnimation = {
  initial: { width: 0 },
  hover: { width: "100%" },
  transition: hoverTransition,
}

export const backgroundAnimation = {
  initial: { scaleY: 0 },
  hover: { scaleY: 1 },
  transition: hoverTransition,
}

export const scaleAnimation = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
  transition: hoverTransition,
}

// Detect touch devices
export const isTouchDevice = () => {
  if (typeof window === "undefined") return false
  return !window.matchMedia("(hover: hover)").matches
}

