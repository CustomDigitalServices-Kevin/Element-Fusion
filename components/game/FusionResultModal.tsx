'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { audioManager } from '@/lib/audio/audioManager'
import { FusionParticles } from '@/components/effects'
import { useLanguage } from '@/lib/i18n'

export function FusionResultModal() {
  const { t, tElement, tCategory } = useLanguage()
  const lastFusionResult = useGameStore(state => state.lastFusionResult)
  const dismissFusionResult = useGameStore(state => state.dismissFusionResult)
  const categories = useGameStore(state => state.categories)

  const show = lastFusionResult?.success === true && lastFusionResult.isNewDiscovery

  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    if (!show) return
    audioManager.play('discovery')
    setShowParticles(true)
    const timer = setTimeout(dismissFusionResult, 2500)
    return () => clearTimeout(timer)
  }, [show, dismissFusionResult])

  const result = show && lastFusionResult.success ? lastFusionResult.result : null
  const category = result?.categoryId ? categories.get(result.categoryId) : undefined

  return (
    <AnimatePresence>
      {show && result && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={dismissFusionResult}
          />
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div
              className="glass-card rounded-3xl p-8 flex flex-col items-center gap-4 text-center pointer-events-auto max-w-xs w-full mx-4 shadow-glow relative overflow-hidden"
              onClick={dismissFusionResult}
            >
              <FusionParticles
                isActive={showParticles}
                color={category?.color ?? '#6C63FF'}
                onComplete={() => setShowParticles(false)}
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                transition={{ duration: 1.2, repeat: 2 }}
                className="text-7xl"
              >
                {result.emoji}
              </motion.div>

              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-accent-success uppercase tracking-widest">
                    {t.new_discovery}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-text-primary">{tElement(result.id)}</h2>
                {category && (
                  <span className="text-xs mt-1 inline-block" style={{ color: category.color }}>
                    {category.icon} {tCategory(category.id)}
                  </span>
                )}
                {result.description && (
                  <p className="text-sm text-text-secondary mt-2">{result.description}</p>
                )}
              </div>

              <span className="text-xs text-text-secondary">{t.click_to_continue}</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
