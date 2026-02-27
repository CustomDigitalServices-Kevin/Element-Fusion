import '@testing-library/jest-dom'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value },
    removeItem: (key: string) => { delete store[key] },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

// Mock AudioContext
Object.defineProperty(window, 'AudioContext', {
  value: class MockAudioContext {
    createOscillator() { return { connect: () => {}, start: () => {}, stop: () => {}, type: 'sine', frequency: { setValueAtTime: () => {} } } }
    createGain() { return { connect: () => {}, gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {}, value: 1 } } }
    get currentTime() { return 0 }
    get destination() { return {} }
  },
})

// Mock navigator.vibrate
Object.defineProperty(navigator, 'vibrate', { value: () => true, writable: true })
