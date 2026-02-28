'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { useLanguage } from '@/lib/i18n'

const ONBOARDING_KEY = 'element-fusion-onboarding-done'

const stepEmojis = ['👆', '✌️', '🔮']

export function OnboardingOverlay() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [show, setShow] = useState(false)

  const steps = [
    { emoji: stepEmojis[0], title: t.onboarding_step1_title, description: t.onboarding_step1_desc },
    { emoji: stepEmojis[1], title: t.onboarding_step2_title, description: t.onboarding_step2_desc },
    { emoji: stepEmojis[2], title: t.onboarding_step3_title, description: t.onboarding_step3_desc },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return
    const done = localStorage.getItem(ONBOARDING_KEY)
    if (!done) {
      setShow(true)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleDismiss()
    }
  }

  const handleDismiss = () => {
    setShow(false)
    localStorage.setItem(ONBOARDING_KEY, 'true')
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-sm [-webkit-backdrop-filter:blur(8px)] p-4"
        >
          <motion.div
            key={currentStep}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="glass-card rounded-3xl p-8 max-w-sm w-full text-center space-y-5"
          >
            {/* Step indicator */}
            <div className="flex justify-center gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStep ? 'bg-accent-primary' : 'bg-border-color'
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <motion.div
              className="text-6xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {steps[currentStep].emoji}
            </motion.div>

            <div>
              <h2 className="text-lg font-bold text-text-primary mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                {steps[currentStep].description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-center">
              <Button variant="ghost" size="sm" onClick={handleDismiss}>
                {t.skip}
              </Button>
              <Button variant="primary" size="md" onClick={handleNext}>
                {currentStep === steps.length - 1 ? t.lets_go : t.next}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
