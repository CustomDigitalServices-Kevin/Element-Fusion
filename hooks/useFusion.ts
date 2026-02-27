'use client'

import { useCallback } from 'react'
import { useGameStore } from '@/store/gameStore'
import type { FusionResult } from '@/types/game'

interface UseFusionOptions {
  onSuccess?: (result: FusionResult & { success: true }) => void
  onFail?: () => void
}

export function useFusion({ onSuccess, onFail }: UseFusionOptions = {}) {
  const fuseElements = useGameStore(state => state.fuseElements)

  const fuse = useCallback((id1: number, id2: number): FusionResult => {
    const result = fuseElements(id1, id2)
    if (result.success) {
      onSuccess?.(result)
    } else {
      onFail?.()
    }
    return result
  }, [fuseElements, onSuccess, onFail])

  return { fuse }
}
