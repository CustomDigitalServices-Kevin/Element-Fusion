import { describe, it, expect, beforeEach } from 'vitest'
import { useGameStore } from '@/store/gameStore'
import type { Element, Category, Combination } from '@/types/database'

const mockCategories: Category[] = [
  { id: 1, name: 'Nature', color: '#4CAF50', icon: '🌿' },
]

const mockElements: Element[] = [
  { id: 1, name: 'Eau', emoji: '💧', category_id: 1, is_base: true, tier: 0, description: null, created_at: '' },
  { id: 2, name: 'Feu', emoji: '🔥', category_id: 1, is_base: true, tier: 0, description: null, created_at: '' },
  { id: 3, name: 'Terre', emoji: '🌍', category_id: 1, is_base: true, tier: 0, description: null, created_at: '' },
  { id: 4, name: 'Air', emoji: '💨', category_id: 1, is_base: true, tier: 0, description: null, created_at: '' },
  { id: 5, name: 'Vapeur', emoji: '♨️', category_id: 1, is_base: false, tier: 1, description: null, created_at: '' },
  { id: 6, name: 'Boue', emoji: '🟤', category_id: 1, is_base: false, tier: 1, description: null, created_at: '' },
]

const mockCombinations: Combination[] = [
  { id: 1, element1_id: 1, element2_id: 2, result_id: 5 }, // Eau + Feu = Vapeur
  { id: 2, element1_id: 1, element2_id: 3, result_id: 6 }, // Eau + Terre = Boue
]

describe('gameStore', () => {
  beforeEach(() => {
    localStorage.clear()
    // Reset store state by re-initializing
    const store = useGameStore.getState()
    store.initializeGame(mockElements, mockCategories, mockCombinations)
  })

  describe('initializeGame', () => {
    it('should set isLoading to false after init', () => {
      const state = useGameStore.getState()
      expect(state.isLoading).toBe(false)
    })

    it('should load all elements into the map', () => {
      const state = useGameStore.getState()
      expect(state.elements.size).toBe(6)
    })

    it('should discover base elements automatically', () => {
      const state = useGameStore.getState()
      expect(state.discoveredElementIds.has(1)).toBe(true)
      expect(state.discoveredElementIds.has(2)).toBe(true)
      expect(state.discoveredElementIds.has(3)).toBe(true)
      expect(state.discoveredElementIds.has(4)).toBe(true)
    })

    it('should not discover non-base elements initially', () => {
      const state = useGameStore.getState()
      expect(state.discoveredElementIds.has(5)).toBe(false)
      expect(state.discoveredElementIds.has(6)).toBe(false)
    })

    it('should build combinations map', () => {
      const state = useGameStore.getState()
      expect(state.combinationsMap.size).toBe(2)
    })
  })

  describe('fuseElements', () => {
    it('should return success for valid combination', () => {
      const store = useGameStore.getState()
      const result = store.fuseElements(1, 2) // Eau + Feu = Vapeur
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.result.name).toBe('Vapeur')
        expect(result.isNewDiscovery).toBe(true)
      }
    })

    it('should return failure for invalid combination', () => {
      const store = useGameStore.getState()
      const result = store.fuseElements(1, 4) // Eau + Air = nothing
      expect(result.success).toBe(false)
    })

    it('should add discovered element to discoveredIds', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      const state = useGameStore.getState()
      expect(state.discoveredElementIds.has(5)).toBe(true)
    })

    it('should increment stats on fusion', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      const state = useGameStore.getState()
      expect(state.stats.totalFusions).toBe(1)
      expect(state.stats.successfulFusions).toBe(1)
    })

    it('should increment totalFusions even on failure', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 4)
      const state = useGameStore.getState()
      expect(state.stats.totalFusions).toBe(1)
      expect(state.stats.successfulFusions).toBe(0)
    })

    it('should work regardless of argument order', () => {
      const store = useGameStore.getState()
      const result = store.fuseElements(2, 1) // reversed: Feu + Eau = Vapeur
      expect(result.success).toBe(true)
    })

    it('should mark isNewDiscovery false on repeated fusion', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      const result = useGameStore.getState().fuseElements(1, 2)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.isNewDiscovery).toBe(false)
      }
    })
  })

  describe('workspace', () => {
    it('should add element to workspace', () => {
      const store = useGameStore.getState()
      const instanceId = store.addToWorkspace(1, 100, 200)
      const state = useGameStore.getState()
      expect(state.workspaceElements).toHaveLength(1)
      expect(state.workspaceElements[0].instanceId).toBe(instanceId)
      expect(state.workspaceElements[0].elementId).toBe(1)
    })

    it('should move workspace element', () => {
      const store = useGameStore.getState()
      const instanceId = store.addToWorkspace(1, 100, 200)
      useGameStore.getState().moveWorkspaceElement(instanceId, 300, 400)
      const state = useGameStore.getState()
      expect(state.workspaceElements[0].x).toBe(300)
      expect(state.workspaceElements[0].y).toBe(400)
    })

    it('should remove element from workspace', () => {
      const store = useGameStore.getState()
      const instanceId = store.addToWorkspace(1, 100, 200)
      useGameStore.getState().removeFromWorkspace(instanceId)
      const state = useGameStore.getState()
      expect(state.workspaceElements).toHaveLength(0)
    })

    it('should clear workspace', () => {
      const store = useGameStore.getState()
      store.addToWorkspace(1, 100, 200)
      store.addToWorkspace(2, 300, 400)
      useGameStore.getState().clearWorkspace()
      const state = useGameStore.getState()
      expect(state.workspaceElements).toHaveLength(0)
    })
  })

  describe('resetProgress', () => {
    it('should reset to base elements only', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2) // discover Vapeur
      useGameStore.getState().resetProgress()
      const state = useGameStore.getState()
      expect(state.discoveredElementIds.has(5)).toBe(false)
      expect(state.discoveredElementIds.has(1)).toBe(true)
    })

    it('should reset stats', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      useGameStore.getState().resetProgress()
      const state = useGameStore.getState()
      expect(state.stats.totalFusions).toBe(0)
      expect(state.stats.successfulFusions).toBe(0)
    })

    it('should clear workspace', () => {
      const store = useGameStore.getState()
      store.addToWorkspace(1, 100, 200)
      useGameStore.getState().resetProgress()
      const state = useGameStore.getState()
      expect(state.workspaceElements).toHaveLength(0)
    })

    it('should reset hints', () => {
      const store = useGameStore.getState()
      store.useHint()
      useGameStore.getState().resetProgress()
      const state = useGameStore.getState()
      expect(state.hintsUsed).toBe(0)
      expect(state.currentHint).toBeNull()
    })
  })

  describe('localStorage persistence', () => {
    it('should save progress after fusion', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      const saved = localStorage.getItem('element-fusion-progress')
      expect(saved).not.toBeNull()
      const parsed = JSON.parse(saved!)
      expect(parsed.discoveredElementIds).toContain(5)
    })

    it('should restore progress on re-init', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2) // discover Vapeur, saves to localStorage

      // Re-initialize (simulates page reload)
      useGameStore.getState().initializeGame(mockElements, mockCategories, mockCombinations)
      const state = useGameStore.getState()
      expect(state.discoveredElementIds.has(5)).toBe(true)
    })

    it('should clear localStorage on reset', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      useGameStore.getState().resetProgress()
      const saved = localStorage.getItem('element-fusion-progress')
      expect(saved).toBeNull()
    })
  })

  describe('useHint', () => {
    it('should return a hint suggestion', () => {
      const store = useGameStore.getState()
      const hint = store.useHint()
      expect(hint).not.toBeNull()
    })

    it('should increment hintsUsed', () => {
      const store = useGameStore.getState()
      store.useHint()
      const state = useGameStore.getState()
      expect(state.hintsUsed).toBe(1)
    })

    it('should set currentHint', () => {
      const store = useGameStore.getState()
      store.useHint()
      const state = useGameStore.getState()
      expect(state.currentHint).not.toBeNull()
    })
  })

  describe('markElementSeen', () => {
    it('should set isNew to false', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2) // discover Vapeur (isNew = true)
      useGameStore.getState().markElementSeen(5)
      const state = useGameStore.getState()
      expect(state.elements.get(5)?.isNew).toBe(false)
    })
  })

  describe('dismissFusionResult', () => {
    it('should clear lastFusionResult', () => {
      const store = useGameStore.getState()
      store.fuseElements(1, 2)
      expect(useGameStore.getState().lastFusionResult).not.toBeNull()
      useGameStore.getState().dismissFusionResult()
      expect(useGameStore.getState().lastFusionResult).toBeNull()
    })
  })
})
