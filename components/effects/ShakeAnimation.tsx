'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface ShakeAnimationProps {
  isShaking: boolean
  children: React.ReactNode
  onComplete?: () => void
}

export function ShakeAnimation({ isShaking, children, onComplete }: ShakeAnimationProps) {
  useEffect(() => {
    if (isShaking) {
      // Mobile haptic feedback
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(200)
      }
    }
  }, [isShaking])

  return (
    <motion.div
      animate={isShaking ? {
        x: [-10, 10, -8, 8, -4, 4, 0],
        transition: { duration: 0.4, ease: 'easeInOut' }
      } : { x: 0 }}
      onAnimationComplete={() => { if (isShaking) onComplete?.() }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}
