'use client'

import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export function useAnimations() {
  const prefersReducedMotion = useReducedMotion()

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: prefersReducedMotion ? 0 : 0.2 } },
  }

  const slideUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' } },
  }

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: prefersReducedMotion ? 'tween' : 'spring', stiffness: 400, damping: 25 },
    },
  }

  const pulse: Variants = {
    idle: { scale: 1 },
    active: {
      scale: prefersReducedMotion ? 1 : [1, 1.05, 1],
      transition: { duration: 0.6, repeat: Infinity },
    },
  }

  return { fadeIn, slideUp, scaleIn, pulse, prefersReducedMotion }
}
