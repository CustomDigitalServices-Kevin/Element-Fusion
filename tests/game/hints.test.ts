import { describe, it, expect } from 'vitest'
import { generateHint } from '@/lib/game/hints'
import { buildCombinationsMap } from '@/lib/game/combinationsMap'
import type { GameElement } from '@/types/game'
import type { Combination } from '@/types/database'

const mockElements = new Map<number, GameElement>([
  [1, { id: 1, name: 'Eau', emoji: '💧', categoryId: 1, categoryColor: '#4CAF50', categoryIcon: '🌿', isBase: true, tier: 0, description: null, isNew: false, discoveredAt: Date.now() }],
  [2, { id: 2, name: 'Feu', emoji: '🔥', categoryId: 1, categoryColor: '#4CAF50', categoryIcon: '🌿', isBase: true, tier: 0, description: null, isNew: false, discoveredAt: Date.now() }],
  [3, { id: 3, name: 'Terre', emoji: '🌍', categoryId: 1, categoryColor: '#4CAF50', categoryIcon: '🌿', isBase: true, tier: 0, description: null, isNew: false, discoveredAt: Date.now() }],
  [5, { id: 5, name: 'Vapeur', emoji: '♨️', categoryId: 1, categoryColor: '#4CAF50', categoryIcon: '🌿', isBase: false, tier: 1, description: null, isNew: false, discoveredAt: null }],
])

const mockCombinations: Combination[] = [
  { id: 1, element1_id: 1, element2_id: 2, result_id: 5 }, // Eau + Feu = Vapeur
]

describe('generateHint', () => {
  it('should return a hint when an undiscovered combination exists', () => {
    const discoveredIds = new Set([1, 2]) // Eau et Feu découverts, Vapeur non
    const map = buildCombinationsMap(mockCombinations)
    const hint = generateHint(discoveredIds, mockElements, map)

    expect(hint).not.toBeNull()
    expect(hint?.element1Id).toBe(1)
    expect(hint?.element2Id).toBe(2)
  })

  it('should return null when all combinations are discovered', () => {
    const discoveredIds = new Set([1, 2, 5]) // Tout découvert
    const map = buildCombinationsMap(mockCombinations)
    const hint = generateHint(discoveredIds, mockElements, map)

    expect(hint).toBeNull()
  })

  it('should return null when no combinations available', () => {
    const discoveredIds = new Set([1])
    const map = buildCombinationsMap([])
    const hint = generateHint(discoveredIds, mockElements, map)

    expect(hint).toBeNull()
  })

  it('should include element names in the hint', () => {
    const discoveredIds = new Set([1, 2])
    const map = buildCombinationsMap(mockCombinations)
    const hint = generateHint(discoveredIds, mockElements, map)

    expect(hint?.element1Name).toBe('Eau')
    expect(hint?.element2Name).toBe('Feu')
  })
})
