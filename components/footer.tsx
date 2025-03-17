"use client"

import { useTheme } from "next-themes"

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="py-20 mt-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="space-y-4">
            <a href="https://linkedin.com" className="block hover:opacity-70 transition-opacity">
              Linkedin
            </a>
            <a href="https://instagram.com" className="block hover:opacity-70 transition-opacity">
              Instagram
            </a>
          </div>

          <div className="space-y-4">
            <p>hello@BridgeGroupSolutions.com</p>
            <p>Amsterdam and worldwide</p>
          </div>

          <div className="space-y-4">
            <p>All Rights Reserved</p>
            <p>©2025, Thirtysixstudio</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mb-20">
          <button className="text-base underline hover:opacity-70 transition-opacity">PRIVACY STATEMENT ↓</button>
          <button className="text-base underline hover:opacity-70 transition-opacity">BACK TO TOP</button>
        </div>

        <p className="text-sm text-muted-foreground">
        BridgeGroupSolutions is registered with the Dutch Chamber of Commerce under registration number KVK 90310152.
        </p>
      </div>
    </footer>
  )
}

