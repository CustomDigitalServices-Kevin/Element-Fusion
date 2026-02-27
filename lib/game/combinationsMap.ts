import type { Combination } from '@/types/database'

/**
 * Build an O(1) lookup Map for combinations.
 * Key format: `${min(id1, id2)}-${max(id1, id2)}`
 * Value: result element ID
 */
export function buildCombinationsMap(combinations: Combination[]): Map<string, number> {
  const map = new Map<string, number>()
  for (const combo of combinations) {
    const key = makeCombinationKey(combo.element1_id, combo.element2_id)
    map.set(key, combo.result_id)
  }
  return map
}

export function makeCombinationKey(id1: number, id2: number): string {
  const min = Math.min(id1, id2)
  const max = Math.max(id1, id2)
  return `${min}-${max}`
}

export function lookupCombination(
  map: Map<string, number>,
  id1: number,
  id2: number
): number | null {
  const key = makeCombinationKey(id1, id2)
  return map.get(key) ?? null
}
