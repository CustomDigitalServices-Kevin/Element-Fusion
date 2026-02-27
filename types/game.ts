import type { Category } from './database'

export interface GameElement {
  id: number
  name: string
  emoji: string
  categoryId: number | null
  categoryColor: string
  categoryIcon: string
  isBase: boolean
  tier: number
  description: string | null
  isNew: boolean
  discoveredAt: number | null // timestamp
}

export interface WorkspaceElement {
  instanceId: string // unique ID per instance
  elementId: number
  x: number
  y: number
}

export interface FusionResult {
  success: true
  result: GameElement
  isNewDiscovery: boolean
} | {
  success: false
}

export interface GameStats {
  totalFusions: number
  successfulFusions: number
  playTimeMs: number
  sessionStartedAt: number
  elementsByCategory: Record<number, number>
}

export interface Achievement {
  id: string
  name: string
  description: string
  emoji: string
  unlockedAt: number | null
}

export interface HintSuggestion {
  element1Id: number
  element2Id: number
  element1Name: string
  element2Name: string
}

export interface GameState {
  // Data
  elements: Map<number, GameElement>
  categories: Map<number, Category>
  combinationsMap: Map<string, number>

  // Progress
  discoveredElementIds: Set<number>

  // Workspace
  workspaceElements: WorkspaceElement[]

  // UI State
  isLoading: boolean
  lastFusionResult: FusionResult | null
  hintsUsed: number
  currentHint: HintSuggestion | null

  // Stats & Achievements
  stats: GameStats
  achievements: Achievement[]

  // Actions
  initializeGame: (
    elements: import('./database').Element[],
    categories: import('./database').Category[],
    combinations: import('./database').Combination[]
  ) => void
  fuseElements: (id1: number, id2: number) => FusionResult
  addToWorkspace: (elementId: number, x: number, y: number) => string
  moveWorkspaceElement: (instanceId: string, x: number, y: number) => void
  removeFromWorkspace: (instanceId: string) => void
  clearWorkspace: () => void
  useHint: () => HintSuggestion | null
  resetProgress: () => void
  markElementSeen: (elementId: number) => void
  dismissFusionResult: () => void
}
