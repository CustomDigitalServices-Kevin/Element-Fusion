'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { AnimatePresence, motion } from 'framer-motion'
import { Trash2, Plus } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'
import { ElementCard } from './ElementCard'
import { Button } from '@/components/ui'
import { ShakeAnimation, FusionParticles } from '@/components/effects'
import { audioManager } from '@/lib/audio/audioManager'
import { clsx } from 'clsx'
import type { GameElement } from '@/types/game'

type FeedbackState =
  | { type: 'idle' }
  | { type: 'success'; element: GameElement; isNew: boolean }
  | { type: 'fail' }
  | { type: 'known'; element: GameElement }

export function WorkspaceZone() {
  const workspaceElements = useGameStore(state => state.workspaceElements)
  const elements = useGameStore(state => state.elements)
  const clearWorkspace = useGameStore(state => state.clearWorkspace)
  const lastFusionResult = useGameStore(state => state.lastFusionResult)
  const [shakeAll, setShakeAll] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackState>({ type: 'idle' })
  const [showParticles, setShowParticles] = useState(false)
  const prevFusionRef = useRef(lastFusionResult)
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { setNodeRef, isOver } = useDroppable({ id: 'workspace' })

  // Fusion feedback handling
  useEffect(() => {
    if (!lastFusionResult || lastFusionResult === prevFusionRef.current) {
      prevFusionRef.current = lastFusionResult
      return
    }
    prevFusionRef.current = lastFusionResult

    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current)

    if (!lastFusionResult.success) {
      setShakeAll(true)
      setFeedback({ type: 'fail' })
      audioManager.play('fusion_fail')
      feedbackTimerRef.current = setTimeout(() => {
        setFeedback({ type: 'idle' })
      }, 2000)
    } else if (lastFusionResult.isNewDiscovery) {
      setFeedback({ type: 'success', element: lastFusionResult.result, isNew: true })
      setShowParticles(true)
      // auto-clear handled by FusionResultModal
    } else {
      setFeedback({ type: 'known', element: lastFusionResult.result })
      audioManager.play('fusion_success')
      feedbackTimerRef.current = setTimeout(() => {
        setFeedback({ type: 'idle' })
      }, 2000)
    }

    return () => {
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current)
    }
  }, [lastFusionResult])

  // Get the 2 slot elements
  const slot1 = workspaceElements[0] ? elements.get(workspaceElements[0].elementId) : undefined
  const slot2 = workspaceElements[1] ? elements.get(workspaceElements[1].elementId) : undefined

  const handleClearFeedback = useCallback(() => {
    setFeedback({ type: 'idle' })
    clearWorkspace()
  }, [clearWorkspace])

  return (
    <div className="relative flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-color shrink-0">
        <span className="text-xs font-medium text-text-secondary">Zone de fusion</span>
        {(workspaceElements.length > 0 || feedback.type !== 'idle') && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFeedback}
            leftIcon={<Trash2 className="w-3.5 h-3.5" />}
            aria-label="Vider le workspace"
          >
            Vider
          </Button>
        )}
      </div>

      {/* Drop zone */}
      <ShakeAnimation isShaking={shakeAll} onComplete={() => setShakeAll(false)}>
        <div
          ref={setNodeRef}
          className={clsx(
            'relative flex-1 flex flex-col items-center justify-center gap-6 transition-all duration-300 min-h-[200px] p-4',
            isOver
              ? 'bg-accent-primary/8 ring-2 ring-accent-primary/30 ring-inset'
              : 'bg-bg-workspace',
            shakeAll && 'ring-2 ring-accent-error/30'
          )}
        >
          {/* Fusion slots area */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Slot 1 */}
            <div className={clsx(
              'w-20 h-[88px] sm:w-24 sm:h-[100px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-200',
              slot1 ? 'border-transparent' : isOver ? 'border-accent-primary/60 bg-accent-primary/5' : 'border-border-color/60'
            )}>
              <AnimatePresence mode="wait">
                {slot1 ? (
                  <motion.div
                    key={`slot1-${slot1.id}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <ElementCard element={slot1} size="lg" isInWorkspace />
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-slot1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-text-secondary/30 text-center"
                  >
                    <Plus className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-[10px]">Element 1</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Plus icon / fusion indicator */}
            <div className="flex flex-col items-center gap-1">
              <motion.span
                className={clsx(
                  'text-2xl sm:text-3xl font-light transition-colors',
                  slot1 && slot2 ? 'text-accent-primary' : 'text-text-secondary/30'
                )}
                animate={slot1 && slot2 ? { scale: [1, 1.2, 1], rotate: [0, 90, 0] } : {}}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                +
              </motion.span>
            </div>

            {/* Slot 2 */}
            <div className={clsx(
              'w-20 h-[88px] sm:w-24 sm:h-[100px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-200',
              slot2 ? 'border-transparent' : isOver ? 'border-accent-primary/60 bg-accent-primary/5' : 'border-border-color/60'
            )}>
              <AnimatePresence mode="wait">
                {slot2 ? (
                  <motion.div
                    key={`slot2-${slot2.id}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <ElementCard element={slot2} size="lg" isInWorkspace />
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-slot2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-text-secondary/30 text-center"
                  >
                    <Plus className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-[10px]">Element 2</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Equals sign + result */}
            <AnimatePresence>
              {feedback.type !== 'idle' && feedback.type !== 'fail' && (
                <>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-2xl sm:text-3xl font-light text-accent-glow"
                  >
                    =
                  </motion.span>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative"
                  >
                    {'element' in feedback && (
                      <div className="relative">
                        <ElementCard element={feedback.element} size="lg" isInWorkspace />
                        <FusionParticles
                          isActive={showParticles}
                          color={feedback.element.categoryColor}
                          onComplete={() => setShowParticles(false)}
                        />
                      </div>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Status text */}
          <AnimatePresence mode="wait">
            {feedback.type === 'fail' && (
              <motion.p
                key="fail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-accent-error text-sm font-medium"
              >
                Pas de combinaison
              </motion.p>
            )}
            {feedback.type === 'success' && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-accent-success text-sm font-medium"
              >
                Nouveau ! {feedback.element.emoji} {feedback.element.name}
              </motion.p>
            )}
            {feedback.type === 'known' && (
              <motion.p
                key="known"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-text-secondary text-sm"
              >
                Deja decouvert : {feedback.element.emoji} {feedback.element.name}
              </motion.p>
            )}
            {feedback.type === 'idle' && workspaceElements.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="text-text-secondary/60 text-xs sm:text-sm">
                  Glisse 2 elements ici pour les fusionner
                </p>
              </motion.div>
            )}
            {feedback.type === 'idle' && workspaceElements.length === 1 && (
              <motion.p
                key="one"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-accent-primary text-xs sm:text-sm animate-pulse"
              >
                Ajoute un 2eme element
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </ShakeAnimation>
    </div>
  )
}
