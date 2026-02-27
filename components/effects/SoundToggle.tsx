'use client'

import { useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'
import { audioManager } from '@/lib/audio/audioManager'
import { Tooltip } from '@/components/ui'

export function SoundToggle() {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    audioManager.loadPreferences()
    setIsMuted(audioManager.isMuted())
  }, [])

  const toggle = () => {
    if (isMuted) {
      audioManager.unmute()
      setIsMuted(false)
    } else {
      audioManager.mute()
      setIsMuted(true)
    }
  }

  return (
    <Tooltip content={isMuted ? 'Activer le son' : 'Couper le son'}>
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
        aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
      >
        <motion.div
          key={isMuted ? 'muted' : 'unmuted'}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.div>
      </motion.button>
    </Tooltip>
  )
}
