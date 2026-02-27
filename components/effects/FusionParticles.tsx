'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  angle: number
  distance: number
  color: string
  size: number
}

interface FusionParticlesProps {
  isActive: boolean
  color?: string
  onComplete?: () => void
}

function generateParticles(count: number, color: string): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 0,
    y: 0,
    angle: (i / count) * 360 + Math.random() * 20,
    distance: 40 + Math.random() * 60,
    color: i % 3 === 0 ? '#00D2FF' : i % 3 === 1 ? color : '#6C63FF',
    size: 3 + Math.random() * 4,
  }))
}

export function FusionParticles({ isActive, color = '#6C63FF', onComplete }: FusionParticlesProps) {
  const particles = generateParticles(24, color)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isActive && onComplete) {
      timerRef.current = setTimeout(onComplete, 900)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isActive, onComplete])

  return (
    <AnimatePresence>
      {isActive && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {particles.map(p => {
            const rad = (p.angle * Math.PI) / 180
            const tx = Math.cos(rad) * p.distance
            const ty = Math.sin(rad) * p.distance
            return (
              <motion.div
                key={p.id}
                className="absolute rounded-full"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: tx,
                  y: ty,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  willChange: 'transform, opacity',
                }}
              />
            )
          })}
          {/* Central flash */}
          <motion.div
            className="absolute rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              width: 20,
              height: 20,
              background: `radial-gradient(circle, white, ${color})`,
              willChange: 'transform, opacity',
            }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}
