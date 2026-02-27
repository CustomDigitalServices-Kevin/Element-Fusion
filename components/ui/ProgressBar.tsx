'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface ProgressBarProps {
  current: number
  total: number
  className?: string
  showLabel?: boolean
}

export function ProgressBar({ current, total, className, showLabel = true }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      {showLabel && (
        <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
          <span className="text-accent-primary font-bold">{current}</span>
          <span>/{total}</span>
        </span>
      )}
      <div className="relative flex-1 h-2 bg-bg-secondary rounded-full overflow-hidden border border-border-color">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #6C63FF, #00D2FF)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-text-secondary whitespace-nowrap">{percentage}%</span>
      )}
    </div>
  )
}
