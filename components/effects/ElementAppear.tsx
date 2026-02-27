'use client'

import { motion } from 'framer-motion'

interface ElementAppearProps {
  children: React.ReactNode
  delay?: number
  color?: string
}

export function ElementAppear({ children, delay = 0, color = '#6C63FF' }: ElementAppearProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 0.95, 1], opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        times: [0, 0.6, 0.8, 1],
        ease: 'easeOut',
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.div
        animate={{
          boxShadow: [
            `0 0 0px ${color}00`,
            `0 0 30px ${color}80`,
            `0 0 15px ${color}40`,
            `0 0 0px ${color}00`,
          ],
        }}
        transition={{ duration: 1.2, delay: delay + 0.2, times: [0, 0.3, 0.6, 1] }}
        className="rounded-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
