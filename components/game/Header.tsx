'use client'

import { useState } from 'react'
import { Lightbulb, RotateCcw, BookOpen } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'
import { ProgressBar, Button, Tooltip, Modal } from '@/components/ui'
import { SoundToggle } from '@/components/effects/SoundToggle'
import { EncyclopediaView } from './EncyclopediaView'

const TOTAL_ELEMENTS = 90

export function Header() {
  const discoveredElementIds = useGameStore(state => state.discoveredElementIds)
  const useHint = useGameStore(state => state.useHint)
  const currentHint = useGameStore(state => state.currentHint)
  const resetProgress = useGameStore(state => state.resetProgress)
  const elements = useGameStore(state => state.elements)

  const [showEncyclopedia, setShowEncyclopedia] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleHint = () => useHint()

  return (
    <>
      <header className="h-14 flex items-center gap-4 px-4 border-b border-border-color bg-bg-secondary/80 backdrop-blur-sm sticky top-0 z-30">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-lg">&#x2728;</span>
          <span className="font-bold text-text-primary hidden sm:block">Element Fusion</span>
        </div>

        {/* Progress */}
        <div className="flex-1 max-w-xs">
          <ProgressBar
            current={discoveredElementIds.size}
            total={TOTAL_ELEMENTS}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 ml-auto">
          {currentHint && (
            <div className="text-xs text-accent-warning bg-accent-warning/10 border border-accent-warning/30 rounded-lg px-2.5 py-1 hidden md:block">
              &#x1F4A1; {elements.get(currentHint.element1Id)?.emoji} + {elements.get(currentHint.element2Id)?.emoji}
            </div>
          )}

          <SoundToggle />

          <Tooltip content="Obtenir un indice">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleHint}
              leftIcon={<Lightbulb className="w-4 h-4" />}
              aria-label="Indice"
            >
              <span className="hidden sm:inline">Indice</span>
            </Button>
          </Tooltip>

          <Tooltip content="Encyclopedie">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowEncyclopedia(true)}
              leftIcon={<BookOpen className="w-4 h-4" />}
              aria-label="Encyclopedie"
            />
          </Tooltip>

          <Tooltip content="Reinitialiser la progression">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowResetConfirm(true)}
              leftIcon={<RotateCcw className="w-4 h-4" />}
              aria-label="Reset"
            />
          </Tooltip>
        </div>
      </header>

      {/* Encyclopedia Modal */}
      <Modal
        isOpen={showEncyclopedia}
        onClose={() => setShowEncyclopedia(false)}
        title="Encyclopedie"
        size="lg"
      >
        <EncyclopediaView />
      </Modal>

      {/* Reset Confirm Modal */}
      <Modal
        isOpen={showResetConfirm}
        onClose={() => setShowResetConfirm(false)}
        title="Reinitialiser la progression ?"
        size="sm"
      >
        <p className="text-text-secondary text-sm mb-4">
          Toute ta progression sera effacee. Seuls les 4 elements de base resteront.
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" size="sm" onClick={() => setShowResetConfirm(false)}>
            Annuler
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => { resetProgress(); setShowResetConfirm(false) }}
          >
            Reinitialiser
          </Button>
        </div>
      </Modal>
    </>
  )
}
