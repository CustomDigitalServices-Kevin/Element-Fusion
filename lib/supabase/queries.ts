import type { Element, Category, Combination } from '@/types/database'
import { getSupabaseClient } from './client'
import { getFallbackData } from './fallback'

// In-memory cache
let cachedElements: Element[] | null = null
let cachedCategories: Category[] | null = null
let cachedCombinations: Combination[] | null = null

export async function fetchAllCategories(): Promise<Category[]> {
  if (cachedCategories) return cachedCategories

  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('id')

    if (error) throw error
    cachedCategories = data
    return data
  } catch {
    const fallback = getFallbackData()
    cachedCategories = fallback.categories
    return fallback.categories
  }
}

export async function fetchAllElements(): Promise<Element[]> {
  if (cachedElements) return cachedElements

  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('elements')
      .select('*')
      .order('tier', { ascending: true })

    if (error) throw error
    cachedElements = data
    return data
  } catch {
    const fallback = getFallbackData()
    cachedElements = fallback.elements
    return fallback.elements
  }
}

export async function fetchAllCombinations(): Promise<Combination[]> {
  if (cachedCombinations) return cachedCombinations

  try {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('combinations')
      .select('*')

    if (error) throw error
    cachedCombinations = data
    return data
  } catch {
    const fallback = getFallbackData()
    cachedCombinations = fallback.combinations
    return fallback.combinations
  }
}

export function clearCache() {
  cachedElements = null
  cachedCategories = null
  cachedCombinations = null
}
