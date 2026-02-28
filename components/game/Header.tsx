'use client'

import { useState } from 'react'
import { Lightbulb, RotateCcw, BookOpen } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'
import { ProgressBar, Button, Tooltip, Modal, LanguageSelector } from '@/components/ui'
import { SoundToggle } from '@/components/effects/SoundToggle'
import { ProgressBarAnimation } from '@/components/effects/ProgressBarAnimation'
import { EncyclopediaView } from './EncyclopediaView'
import { useLanguage } from '@/lib/i18n'

const TOTAL_ELEMENTS = 90

export function Header() {
  const { t } = useLanguage()
  const discoveredElementIds = useGameStore(state => state.discoveredElementIds)
  const requestHint = useGameStore(state => state.useHint)
  const currentHint = useGameStore(state => state.currentHint)
  const resetProgress = useGameStore(state => state.resetProgress)
  const elements = useGameStore(state => state.elements)

  const [showEncyclopedia, setShowEncyclopedia] = useState(false)
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleHint = () => requestHint()

  return (
    <>
      <header className="h-14 flex items-center gap-2 sm:gap-4 px-3 sm:px-4 border-b border-border-color bg-bg-secondary/80 backdrop-blur-sm [-webkit-backdrop-filter:blur(8px)] sticky top-0 z-30">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-lg">&#x2728;</span>
          <span className="font-bold text-text-primary hidden sm:block">{t.app_title}</span>
        </div>

        {/* Progress */}
        <div className="flex-1 max-w-xs relative">
          <ProgressBar
            current={discoveredElementIds.size}
            total={TOTAL_ELEMENTS}
          />
          <ProgressBarAnimation
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

          <LanguageSelector />

          <SoundToggle />

          <Tooltip content={t.get_hint}>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleHint}
              leftIcon={<Lightbulb className="w-4 h-4" />}
              aria-label={t.hint}
            >
              <span className="hidden sm:inline">{t.hint}</span>
            </Button>
          </Tooltip>

          <Tooltip content={t.encyclopedia}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowEncyclopedia(true)}
              leftIcon={<BookOpen className="w-4 h-4" />}
              aria-label={t.encyclopedia}
            />
          </Tooltip>

          <Tooltip content={t.reset_progress}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowResetConfirm(true)}
              leftIcon={<RotateCcw className="w-4 h-4" />}
              aria-label={t.reset}
            />
          </Tooltip>
        </div>
      </header>

      {/* Encyclopedia Modal */}
      <Modal
        isOpen={showEncyclopedia}
        onClose={() => setShowEncyclopedia(false)}
        title={t.encyclopedia}
        size="lg"
      >
        <EncyclopediaView />
      </Modal>

      {/* Reset Confirm Modal */}
      <Modal
        isOpen={showResetConfirm}
        onClose={() => setShowResetConfirm(false)}
        title={t.reset_confirm_title}
        size="sm"
      >
        <p className="text-text-secondary text-sm mb-4">
          {t.reset_confirm_message}
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" size="sm" onClick={() => setShowResetConfirm(false)}>
            {t.cancel}
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => { resetProgress(); setShowResetConfirm(false) }}
          >
            {t.reset}
          </Button>
        </div>
      </Modal>
    </>
  )
}
