'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { audioManager } from '@/lib/audio/audioManager'

interface ProgressBarAnimationProps {
  current: number
  total: number
}

const MILESTONES = [25, 50, 75, 100]

export function ProgressBarAnimation({ current, total }: ProgressBarAnimationProps) {
  const prevPercentage = useRef(0)
  const [celebration, setCelebration] = useState<number | null>(null)

  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  useEffect(() => {
    const prev = prevPercentage.current
    prevPercentage.current = percentage

    // Check if we crossed a milestone
    for (const milestone of MILESTONES) {
      if (prev < milestone && percentage >= milestone) {
        setCelebration(milestone)
        audioManager.play('discovery')
        const timer = setTimeout(() => setCelebration(null), 1500)
        return () => clearTimeout(timer)
      }
    }
  }, [percentage])

  return (
    <AnimatePresence>
      {celebration !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: -8, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-accent-primary whitespace-nowrap pointer-events-none"
        >
          {celebration}% !
        </motion.div>
      )}
    </AnimatePresence>
  )
}
