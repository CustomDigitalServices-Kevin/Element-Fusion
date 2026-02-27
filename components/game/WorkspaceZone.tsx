'use client'

import { useState, useCallback } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { AnimatePresence, motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'
import { DraggableElement } from './DraggableElement'
import { Button } from '@/components/ui'
import { ShakeAnimation } from '@/components/effects'
import { clsx } from 'clsx'

export function WorkspaceZone() {
  const workspaceElements = useGameStore(state => state.workspaceElements)
  const elements = useGameStore(state => state.elements)
  const clearWorkspace = useGameStore(state => state.clearWorkspace)
  const [shakingInstanceId, setShakingInstanceId] = useState<string | null>(null)

  const { setNodeRef, isOver } = useDroppable({ id: 'workspace' })

  return (
    <div className="relative flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-color">
        <span className="text-sm font-medium text-text-secondary">Zone de fusion</span>
        {workspaceElements.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearWorkspace}
            leftIcon={<Trash2 className="w-3.5 h-3.5" />}
            aria-label="Vider le workspace"
          >
            Vider
          </Button>
        )}
      </div>

      {/* Drop zone */}
      <div
        ref={setNodeRef}
        className={clsx(
          'relative flex-1 transition-colors duration-200',
          isOver ? 'bg-accent-primary/5' : 'bg-bg-workspace'
        )}
      >
        {/* Empty state */}
        {workspaceElements.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
            <div className={clsx(
              'w-20 h-20 rounded-2xl border-2 border-dashed flex items-center justify-center transition-colors duration-200',
              isOver ? 'border-accent-primary' : 'border-border-color'
            )}>
              <span className="text-3xl opacity-30">&#x2728;</span>
            </div>
            <p className="text-text-secondary text-sm text-center px-8">
              Deposez des elements ici pour les fusionner
            </p>
          </div>
        )}

        {/* Workspace elements */}
        <AnimatePresence>
          {workspaceElements.map(wsEl => {
            const element = elements.get(wsEl.elementId)
            if (!element) return null
            return (
              <motion.div
                key={wsEl.instanceId}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute"
                style={{ left: wsEl.x, top: wsEl.y, transform: 'translate(-50%, -50%)' }}
              >
                <ShakeAnimation
                  isShaking={shakingInstanceId === wsEl.instanceId}
                  onComplete={() => setShakingInstanceId(null)}
                >
                  <DraggableElement
                    element={element}
                    dragId={`workspace-${wsEl.instanceId}`}
                    instanceId={wsEl.instanceId}
                    isInWorkspace
                  />
                </ShakeAnimation>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
