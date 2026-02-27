import { describe, it, expect } from 'vitest'
import { buildCombinationsMap, makeCombinationKey, lookupCombination } from '@/lib/game/combinationsMap'
import type { Combination } from '@/types/database'

const mockCombinations: Combination[] = [
  { id: 1, element1_id: 1, element2_id: 2, result_id: 5 }, // Eau + Feu = Vapeur
  { id: 2, element1_id: 1, element2_id: 3, result_id: 6 }, // Eau + Terre = Boue
  { id: 3, element1_id: 2, element2_id: 4, result_id: 7 }, // Feu + Air = Fumée
  { id: 4, element1_id: 3, element2_id: 3, result_id: 8 }, // Terre + Terre = ???
]

describe('makeCombinationKey', () => {
  it('should always produce the same key regardless of order', () => {
    expect(makeCombinationKey(1, 2)).toBe(makeCombinationKey(2, 1))
    expect(makeCombinationKey(5, 10)).toBe(makeCombinationKey(10, 5))
  })

  it('should use format min-max', () => {
    expect(makeCombinationKey(3, 7)).toBe('3-7')
    expect(makeCombinationKey(7, 3)).toBe('3-7')
  })

  it('should handle identical ids', () => {
    expect(makeCombinationKey(4, 4)).toBe('4-4')
  })
})

describe('buildCombinationsMap', () => {
  it('should build a map with correct size', () => {
    const map = buildCombinationsMap(mockCombinations)
    expect(map.size).toBe(4)
  })

  it('should store result_id as value', () => {
    const map = buildCombinationsMap(mockCombinations)
    expect(map.get('1-2')).toBe(5)
    expect(map.get('1-3')).toBe(6)
    expect(map.get('2-4')).toBe(7)
  })

  it('should handle empty combinations', () => {
    const map = buildCombinationsMap([])
    expect(map.size).toBe(0)
  })
})

describe('lookupCombination', () => {
  const map = buildCombinationsMap(mockCombinations)

  it('should find combination regardless of argument order', () => {
    expect(lookupCombination(map, 1, 2)).toBe(5)
    expect(lookupCombination(map, 2, 1)).toBe(5)
  })

  it('should return null for unknown combination', () => {
    expect(lookupCombination(map, 1, 99)).toBeNull()
    expect(lookupCombination(map, 10, 20)).toBeNull()
  })

  it('should handle same element fusion', () => {
    expect(lookupCombination(map, 3, 3)).toBe(8)
  })
})
