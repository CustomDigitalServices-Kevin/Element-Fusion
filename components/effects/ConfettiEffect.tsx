'use client'

import { useEffect, useRef, useState } from 'react'
import { useGameStore } from '@/store/gameStore'

const MILESTONE_COUNTS = [10, 25, 50, 75]
const CONFETTI_COLORS = ['#6C63FF', '#00D2FF', '#34C759', '#FF9500', '#FF3B30', '#E91E63']

interface ConfettiPiece {
  id: number
  x: number
  color: string
  delay: number
  duration: number
  size: number
}

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 0.8,
    duration: 1.5 + Math.random() * 1.5,
    size: 6 + Math.random() * 6,
  }))
}

export function ConfettiEffect() {
  const discoveredCount = useGameStore(state => state.discoveredElementIds.size)
  const prevCountRef = useRef(discoveredCount)
  const [showConfetti, setShowConfetti] = useState(false)
  const [pieces] = useState(() => generateConfetti(40))

  useEffect(() => {
    const prev = prevCountRef.current
    prevCountRef.current = discoveredCount

    for (const milestone of MILESTONE_COUNTS) {
      if (prev < milestone && discoveredCount >= milestone) {
        setShowConfetti(true)
        const timer = setTimeout(() => setShowConfetti(false), 3000)
        return () => clearTimeout(timer)
      }
    }
  }, [discoveredCount])

  if (!showConfetti) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[70] overflow-hidden">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute top-0"
          style={{
            left: `${piece.x}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animation: `confetti-fall ${piece.duration}s ${piece.delay}s ease-in forwards`,
          }}
        />
      ))}
    </div>
  )
}
