"use client"

import { useRef, useCallback } from "react"

export function useClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)

  const playClickSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      gainNodeRef.current = audioContextRef.current.createGain()
      gainNodeRef.current.connect(audioContextRef.current.destination)
    }

    const oscillator = audioContextRef.current.createOscillator()
    oscillator.type = "square" 
    oscillator.frequency.setValueAtTime(4000, audioContextRef.current.currentTime) 
    oscillator.connect(gainNodeRef.current!)

    gainNodeRef.current!.gain.setValueAtTime(0.2, audioContextRef.current.currentTime)
    gainNodeRef.current!.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.05) 

    oscillator.start()
    oscillator.stop(audioContextRef.current.currentTime + 0.05) 
  }, [])

  return playClickSound
}
