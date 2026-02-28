'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { audioManager } from '@/lib/audio/audioManager'
import { useLanguage } from '@/lib/i18n'
import type { Achievement } from '@/types/game'

export function AchievementToast() {
  const { t, tAchievement } = useLanguage()
  const achievements = useGameStore(state => state.achievements)
  const [toast, setToast] = useState<Achievement | null>(null)
  const prevAchievementsRef = useRef(achievements)

  useEffect(() => {
    const prev = prevAchievementsRef.current
    prevAchievementsRef.current = achievements

    // Find newly unlocked achievements
    for (const achievement of achievements) {
      if (achievement.unlockedAt === null) continue
      const prevVersion = prev.find(a => a.id === achievement.id)
      if (prevVersion && prevVersion.unlockedAt === null) {
        // Newly unlocked
        setToast(achievement)
        audioManager.play('discovery')
        const timer = setTimeout(() => setToast(null), 3000)
        return () => clearTimeout(timer)
      }
    }
  }, [achievements])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -60, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -60, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed top-16 left-1/2 z-[60] glass-card rounded-2xl px-5 py-3 flex items-center gap-3 shadow-glow cursor-pointer"
          onClick={() => setToast(null)}
        >
          <span className="text-3xl">{toast.emoji}</span>
          <div>
            <div className="text-xs font-semibold text-accent-success uppercase tracking-wider">
              {t.achievement_unlocked}
            </div>
            <div className="text-sm font-bold text-text-primary">{tAchievement(toast.id, 'name')}</div>
            <div className="text-xs text-text-secondary">{tAchievement(toast.id, 'desc')}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
