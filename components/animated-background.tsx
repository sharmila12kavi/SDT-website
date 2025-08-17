"use client"

import { useEffect } from "react"

export default function AnimatedBackground() {
  useEffect(() => {
    const handleResize = () => {
      // No need to recreate particles on resize for static elements
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static decorative elements only - no moving bubbles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-10"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-10"></div>
      <div className="absolute bottom-40 right-10 w-14 h-14 bg-pink-200 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-200 rounded-full opacity-10"></div>
      <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-orange-200 rounded-full opacity-10"></div>
    </div>
  )
}
