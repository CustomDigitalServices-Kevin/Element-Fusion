import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import type { GameState, GameElement, FusionResult, HintSuggestion, GameStats, Achievement } from '@/types/game'
import type { Element, Category, Combination } from '@/types/database'
import { buildCombinationsMap, lookupCombination } from '@/lib/game/combinationsMap'
import { getInitialAchievements, checkAchievements } from '@/lib/game/achievements'
import { generateHint } from '@/lib/game/hints'
import { saveProgress, loadProgress, clearProgress } from '@/lib/game/localStorage'

function elementToGameElement(
  el: Element,
  categories: Map<number, Category>,
  isDiscovered: boolean,
  isNew = false
): GameElement {
  const category = el.category_id ? categories.get(el.category_id) : undefined
  return {
    id: el.id,
    name: el.name,
    emoji: el.emoji,
    categoryId: el.category_id,
    categoryColor: category?.color ?? '#8E8E93',
    categoryIcon: category?.icon ?? '❓',
    isBase: el.is_base,
    tier: el.tier,
    description: el.description,
    isNew: isNew && isDiscovered,
    discoveredAt: isDiscovered ? Date.now() : null,
  }
}

const defaultStats = (): GameStats => ({
  totalFusions: 0,
  successfulFusions: 0,
  playTimeMs: 0,
  sessionStartedAt: Date.now(),
  elementsByCategory: {},
})

export const useGameStore = create<GameState>((set, get) => ({
  elements: new Map(),
  categories: new Map(),
  combinationsMap: new Map(),
  discoveredElementIds: new Set(),
  workspaceElements: [],
  isLoading: true,
  lastFusionResult: null,
  hintsUsed: 0,
  currentHint: null,
  stats: defaultStats(),
  achievements: getInitialAchievements(),

  initializeGame: (rawElements: Element[], rawCategories: Category[], rawCombinations: Combination[]) => {
    const categoriesMap = new Map<number, Category>()
    for (const cat of rawCategories) categoriesMap.set(cat.id, cat)

    const combinationsMap = buildCombinationsMap(rawCombinations)

    // Load persisted progress
    const saved = typeof window !== 'undefined' ? loadProgress() : null
    const savedIds = new Set<number>(saved?.discoveredElementIds ?? [])

    // Always include base elements
    const baseElements = rawElements.filter(e => e.is_base)
    for (const base of baseElements) savedIds.add(base.id)

    const elementsMap = new Map<number, GameElement>()
    for (const el of rawElements) {
      elementsMap.set(el.id, elementToGameElement(el, categoriesMap, savedIds.has(el.id)))
    }

    const stats = saved?.stats
      ? { ...defaultStats(), ...saved.stats }
      : defaultStats()

    set({
      elements: elementsMap,
      categories: categoriesMap,
      combinationsMap,
      discoveredElementIds: savedIds,
      isLoading: false,
      stats,
      hintsUsed: saved?.hintsUsed ?? 0,
    })
  },

  fuseElements: (id1: number, id2: number): FusionResult => {
    const state = get()
    const resultId = lookupCombination(state.combinationsMap, id1, id2)

    const newStats = {
      ...state.stats,
      totalFusions: state.stats.totalFusions + 1,
    }

    if (resultId === null) {
      set({ stats: newStats, lastFusionResult: { success: false } })
      saveProgress(state.discoveredElementIds, newStats, state.hintsUsed)
      return { success: false }
    }

    const isNewDiscovery = !state.discoveredElementIds.has(resultId)
    const resultElement = state.elements.get(resultId)
    if (!resultElement) {
      set({ stats: newStats, lastFusionResult: { success: false } })
      return { success: false }
    }

    const newDiscoveredIds = new Set(state.discoveredElementIds)
    newDiscoveredIds.add(resultId)

    const updatedStats = {
      ...newStats,
      successfulFusions: newStats.successfulFusions + 1,
      elementsByCategory: {
        ...newStats.elementsByCategory,
        [resultElement.categoryId ?? 0]:
          (newStats.elementsByCategory[resultElement.categoryId ?? 0] ?? 0) + (isNewDiscovery ? 1 : 0),
      },
    }

    const updatedElements = new Map(state.elements)
    const updatedResult = { ...resultElement, isNew: isNewDiscovery, discoveredAt: Date.now() }
    updatedElements.set(resultId, updatedResult)

    const maxTier = Math.max(...Array.from(newDiscoveredIds).map(id => state.elements.get(id)?.tier ?? 0))

    const updatedAchievements = checkAchievements(
      state.achievements,
      newDiscoveredIds.size,
      updatedStats.successfulFusions,
      state.hintsUsed,
      maxTier
    )

    const fusionResult: FusionResult = { success: true, result: updatedResult, isNewDiscovery }

    set({
      elements: updatedElements,
      discoveredElementIds: newDiscoveredIds,
      stats: updatedStats,
      achievements: updatedAchievements,
      lastFusionResult: fusionResult,
      currentHint: null,
    })

    saveProgress(newDiscoveredIds, updatedStats, state.hintsUsed)
    return fusionResult
  },

  addToWorkspace: (elementId: number, x: number, y: number): string => {
    const instanceId = uuidv4()
    set(state => ({
      workspaceElements: [...state.workspaceElements, { instanceId, elementId, x, y }],
    }))
    return instanceId
  },

  moveWorkspaceElement: (instanceId: string, x: number, y: number) => {
    set(state => ({
      workspaceElements: state.workspaceElements.map(el =>
        el.instanceId === instanceId ? { ...el, x, y } : el
      ),
    }))
  },

  removeFromWorkspace: (instanceId: string) => {
    set(state => ({
      workspaceElements: state.workspaceElements.filter(el => el.instanceId !== instanceId),
    }))
  },

  clearWorkspace: () => set({ workspaceElements: [] }),

  useHint: (): HintSuggestion | null => {
    const state = get()
    const hint = generateHint(state.discoveredElementIds, state.elements, state.combinationsMap)
    const newHintsUsed = state.hintsUsed + 1

    const updatedAchievements = checkAchievements(
      state.achievements,
      state.discoveredElementIds.size,
      state.stats.successfulFusions,
      newHintsUsed,
      0
    )

    set({ currentHint: hint, hintsUsed: newHintsUsed, achievements: updatedAchievements })
    saveProgress(state.discoveredElementIds, state.stats, newHintsUsed)
    return hint
  },

  resetProgress: () => {
    clearProgress()
    const state = get()
    // Reset to base elements only
    const updatedElements = new Map(state.elements)
    const baseIds = new Set<number>()
    for (const [id, el] of state.elements) {
      if (el.isBase) {
        baseIds.add(id)
        updatedElements.set(id, { ...el, isNew: false, discoveredAt: Date.now() })
      } else {
        updatedElements.set(id, { ...el, isNew: false, discoveredAt: null })
      }
    }
    set({
      discoveredElementIds: baseIds,
      workspaceElements: [],
      stats: defaultStats(),
      hintsUsed: 0,
      currentHint: null,
      lastFusionResult: null,
      achievements: getInitialAchievements(),
      elements: updatedElements,
    })
  },

  markElementSeen: (elementId: number) => {
    set(state => {
      const el = state.elements.get(elementId)
      if (!el?.isNew) return state
      const updated = new Map(state.elements)
      updated.set(elementId, { ...el, isNew: false })
      return { elements: updated }
    })
  },

  dismissFusionResult: () => set({ lastFusionResult: null }),
}))
