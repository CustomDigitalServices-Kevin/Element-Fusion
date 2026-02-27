'use client'

// Lazy-loaded audio manager using Web Audio API (no Howler dependency at module level)
type SoundName = 'pickup' | 'fusion_success' | 'fusion_fail' | 'discovery' | 'ambient'

class AudioManagerClass {
  private context: AudioContext | null = null
  private gainNode: GainNode | null = null
  private muted = false
  private volume = 0.5
  private initialized = false

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null
    if (!this.context) {
      try {
        this.context = new AudioContext()
        this.gainNode = this.context.createGain()
        this.gainNode.connect(this.context.destination)
        this.gainNode.gain.value = this.muted ? 0 : this.volume
      } catch {
        return null
      }
    }
    return this.context
  }

  private playTone(
    frequency: number,
    duration: number,
    type: OscillatorType = 'sine',
    gainValue = 0.3
  ) {
    const ctx = this.getContext()
    if (!ctx || this.muted) return

    try {
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()

      oscillator.connect(gain)
      gain.connect(this.gainNode ?? ctx.destination)

      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)

      gain.gain.setValueAtTime(gainValue * this.volume, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + duration)
    } catch {
      // Audio might fail silently
    }
  }

  play(sound: SoundName) {
    if (this.muted) return

    switch (sound) {
      case 'pickup':
        this.playTone(440, 0.1, 'sine', 0.2)
        break
      case 'fusion_success':
        // Ascending chord
        this.playTone(523, 0.15, 'sine', 0.25)
        setTimeout(() => this.playTone(659, 0.15, 'sine', 0.25), 80)
        setTimeout(() => this.playTone(784, 0.25, 'sine', 0.3), 160)
        break
      case 'discovery':
        // Fanfare
        this.playTone(523, 0.12, 'sine', 0.3)
        setTimeout(() => this.playTone(659, 0.12, 'sine', 0.3), 100)
        setTimeout(() => this.playTone(784, 0.12, 'sine', 0.3), 200)
        setTimeout(() => this.playTone(1047, 0.3, 'sine', 0.35), 300)
        break
      case 'fusion_fail':
        this.playTone(220, 0.2, 'sawtooth', 0.15)
        setTimeout(() => this.playTone(196, 0.2, 'sawtooth', 0.1), 100)
        break
      case 'ambient':
        // Soft ambient tone (very low volume)
        this.playTone(110, 2, 'sine', 0.03)
        break
    }
  }

  setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol))
    if (this.gainNode) {
      this.gainNode.gain.value = this.muted ? 0 : this.volume
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('ef-sound-volume', String(this.volume))
    }
  }

  mute() {
    this.muted = true
    if (this.gainNode) this.gainNode.gain.value = 0
    if (typeof window !== 'undefined') {
      localStorage.setItem('ef-sound-muted', 'true')
    }
  }

  unmute() {
    this.muted = false
    if (this.gainNode) this.gainNode.gain.value = this.volume
    if (typeof window !== 'undefined') {
      localStorage.setItem('ef-sound-muted', 'false')
    }
  }

  isMuted() { return this.muted }

  loadPreferences() {
    if (typeof window === 'undefined') return
    const muted = localStorage.getItem('ef-sound-muted')
    const volume = localStorage.getItem('ef-sound-volume')
    if (muted === 'true') this.muted = true
    if (volume) this.volume = parseFloat(volume)
  }
}

export const audioManager = new AudioManagerClass()
