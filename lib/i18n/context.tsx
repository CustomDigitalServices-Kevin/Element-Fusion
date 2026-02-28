'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { Locale, TranslationDict } from './types'
import { translations } from './translations'

const STORAGE_KEY = 'element-fusion-lang'
const DEFAULT_LOCALE: Locale = 'fr'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationDict['ui']
  tElement: (id: number) => string
  tCategory: (id: number) => string
  tAchievement: (id: string, field: 'name' | 'desc') => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && stored in translations) return stored as Locale
  return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
  }, [])

  const dict = translations[locale]

  const tElement = useCallback((id: number): string => {
    return dict.elements[id] ?? `Element #${id}`
  }, [dict])

  const tCategory = useCallback((id: number): string => {
    return dict.categories[id] ?? `Category #${id}`
  }, [dict])

  const tAchievement = useCallback((id: string, field: 'name' | 'desc'): string => {
    return dict.achievements[id]?.[field] ?? id
  }, [dict])

  if (!mounted) {
    // SSR/hydration: use default locale to avoid mismatch
    const defaultDict = translations[DEFAULT_LOCALE]
    return (
      <LanguageContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          t: defaultDict.ui,
          tElement: (id) => defaultDict.elements[id] ?? `Element #${id}`,
          tCategory: (id) => defaultDict.categories[id] ?? `Category #${id}`,
          tAchievement: (id, field) => defaultDict.achievements[id]?.[field] ?? id,
        }}
      >
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dict.ui, tElement, tCategory, tAchievement }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
