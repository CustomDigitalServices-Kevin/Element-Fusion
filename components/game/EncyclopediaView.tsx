'use client'

import { useMemo } from 'react'
import { useGameStore } from '@/store/gameStore'
import { clsx } from 'clsx'

export function EncyclopediaView() {
  const elements = useGameStore(state => state.elements)
  const discoveredElementIds = useGameStore(state => state.discoveredElementIds)
  const categories = useGameStore(state => state.categories)

  const byCategory = useMemo(() => {
    const map = new Map<number, { discovered: number; total: number; elements: typeof elements }>()
    for (const [, category] of categories) {
      map.set(category.id, { discovered: 0, total: 0, elements: new Map() })
    }
    for (const [id, el] of elements) {
      if (el.categoryId === null) continue
      const cat = map.get(el.categoryId)
      if (!cat) continue
      cat.total++
      cat.elements.set(id, el)
      if (discoveredElementIds.has(id)) cat.discovered++
    }
    return map
  }, [elements, discoveredElementIds, categories])

  return (
    <div className="max-h-[60vh] overflow-y-auto space-y-6 pr-1 -webkit-overflow-scrolling-touch">
      {Array.from(categories.values()).map(category => {
        const data = byCategory.get(category.id)
        if (!data || data.total === 0) return null
        return (
          <div key={category.id}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-sm" style={{ color: category.color }}>
                {category.icon} {category.name}
              </span>
              <span className="text-xs text-text-secondary">
                {data.discovered}/{data.total}
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {Array.from(data.elements.values())
                .sort((a, b) => a.tier - b.tier)
                .map(el => {
                  const isDiscovered = discoveredElementIds.has(el.id)
                  return (
                    <div
                      key={el.id}
                      className={clsx(
                        'flex flex-col items-center gap-1 p-2 rounded-xl border text-center',
                        isDiscovered
                          ? 'border-[rgba(255,255,255,0.08)] bg-bg-secondary'
                          : 'border-border-color bg-bg-primary opacity-40'
                      )}
                      title={isDiscovered ? el.name : '???'}
                    >
                      <span className="text-xl">{isDiscovered ? el.emoji : '&#x2753;'}</span>
                      <span className="text-[9px] text-text-secondary truncate w-full text-center">
                        {isDiscovered ? el.name : '???'}
                      </span>
                    </div>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
