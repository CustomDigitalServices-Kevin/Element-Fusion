'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/store/gameStore'
import { fetchAllElements, fetchAllCategories, fetchAllCombinations } from '@/lib/supabase/queries'

export function useGameInit() {
  const initializeGame = useGameStore(state => state.initializeGame)
  const isLoading = useGameStore(state => state.isLoading)

  useEffect(() => {
    async function init() {
      const [elements, categories, combinations] = await Promise.all([
        fetchAllElements(),
        fetchAllCategories(),
        fetchAllCombinations(),
      ])
      initializeGame(elements, categories, combinations)
    }
    init()
  }, [initializeGame])

  return { isLoading }
}
