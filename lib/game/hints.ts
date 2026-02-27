import type { HintSuggestion } from '@/types/game'
import type { GameElement } from '@/types/game'
import { makeCombinationKey } from './combinationsMap'

export function generateHint(
  discoveredIds: Set<number>,
  elements: Map<number, GameElement>,
  combinationsMap: Map<string, number>
): HintSuggestion | null {
  const discoveredArray = Array.from(discoveredIds)

  // Try to find a combination with discovered elements that produces undiscovered result
  for (let i = 0; i < discoveredArray.length; i++) {
    for (let j = i; j < discoveredArray.length; j++) {
      const id1 = discoveredArray[i]
      const id2 = discoveredArray[j]
      const key = makeCombinationKey(id1, id2)
      const resultId = combinationsMap.get(key)

      if (resultId && !discoveredIds.has(resultId)) {
        const el1 = elements.get(id1)
        const el2 = elements.get(id2)
        if (el1 && el2) {
          return {
            element1Id: id1,
            element2Id: id2,
            element1Name: el1.name,
            element2Name: el2.name,
          }
        }
      }
    }
  }

  return null
}
