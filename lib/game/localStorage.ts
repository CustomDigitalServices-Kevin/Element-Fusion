const STORAGE_KEY = 'element-fusion-progress'

interface PersistedState {
  discoveredElementIds: number[]
  stats: {
    totalFusions: number
    successfulFusions: number
    playTimeMs: number
  }
  hintsUsed: number
}

export function saveProgress(
  discoveredIds: Set<number>,
  stats: { totalFusions: number; successfulFusions: number; playTimeMs: number },
  hintsUsed: number
): void {
  try {
    const data: PersistedState = {
      discoveredElementIds: Array.from(discoveredIds),
      stats,
      hintsUsed,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage might be unavailable (SSR, private mode)
  }
}

export function loadProgress(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as PersistedState
  } catch {
    return null
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
