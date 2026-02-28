'use client'

import { useMemo, useState } from 'react'
import { useGameStore } from '@/store/gameStore'
import { DraggableElement } from './DraggableElement'
import { SearchBar, CategoryPill } from '@/components/ui'
import { useLanguage } from '@/lib/i18n'
import { useResponsive } from '@/hooks/useResponsive'

type SortMode = 'recent' | 'alpha' | 'tier'

interface InventoryPanelProps {
  selectedElementId?: number | null
  onElementTap?: (elementId: number) => void
}

export function InventoryPanel({ selectedElementId, onElementTap }: InventoryPanelProps) {
  const { t, tElement, tCategory } = useLanguage()
  const breakpoint = useResponsive()
  const isMobile = breakpoint === 'mobile'
  const elements = useGameStore(state => state.elements)
  const discoveredElementIds = useGameStore(state => state.discoveredElementIds)
  const categories = useGameStore(state => state.categories)

  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [sortMode, setSortMode] = useState<SortMode>('recent')

  const discoveredElements = useMemo(() => {
    return Array.from(discoveredElementIds)
      .map(id => elements.get(id))
      .filter((el): el is NonNullable<typeof el> => el !== undefined)
  }, [elements, discoveredElementIds])

  const filtered = useMemo(() => {
    let result = discoveredElements

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(el => {
        const translatedName = tElement(el.id).toLowerCase()
        return translatedName.includes(q) || el.name.toLowerCase().includes(q)
      })
    }

    if (activeCategory !== null) {
      result = result.filter(el => el.categoryId === activeCategory)
    }

    switch (sortMode) {
      case 'alpha':
        result = [...result].sort((a, b) => tElement(a.id).localeCompare(tElement(b.id)))
        break
      case 'tier':
        result = [...result].sort((a, b) => a.tier - b.tier)
        break
      case 'recent':
        result = [...result].sort((a, b) => (b.discoveredAt ?? 0) - (a.discoveredAt ?? 0))
        break
    }

    return result
  }, [discoveredElements, search, activeCategory, sortMode, tElement])

  const categoryList = useMemo(() => Array.from(categories.values()), [categories])

  const totalElements = 90
  const discoveredCount = discoveredElementIds.size
  const progressPercent = Math.round((discoveredCount / totalElements) * 100)

  const sortLabels: Record<SortMode, string> = {
    recent: t.sort_recent,
    alpha: t.sort_alpha,
    tier: t.sort_tier,
  }

  return (
    <div className={`flex flex-col h-full px-4 gap-3 ${isMobile ? 'py-2' : 'py-4'}`}>
      {/* Search + Sort row on mobile, stacked on desktop */}
      {isMobile ? (
        <div className="shrink-0 flex gap-2 items-center">
          <div className="flex-1 min-w-0">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t.search_placeholder}
              className="[&_input]:h-9 [&_input]:text-xs"
            />
          </div>
          <div className="shrink-0 flex glass-panel rounded-lg p-0.5">
            {(['recent', 'alpha', 'tier'] as SortMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => setSortMode(mode)}
                className={`text-[11px] px-2 py-1.5 rounded-md transition-all duration-300 whitespace-nowrap font-semibold ${
                  sortMode === mode
                    ? 'text-white'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                style={sortMode === mode ? {
                  background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-glow))',
                  boxShadow: '0 0 12px rgba(108, 99, 255, 0.3)',
                } : undefined}
              >
                {sortLabels[mode]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Search bar */}
          <div className="shrink-0">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t.search_placeholder}
            />
          </div>

          {/* Sort buttons */}
          <div className="shrink-0">
            <div className="flex w-full glass-panel rounded-xl p-1">
              {(['recent', 'alpha', 'tier'] as SortMode[]).map(mode => (
                <button
                  key={mode}
                  onClick={() => setSortMode(mode)}
                  className={`flex-1 text-[13px] py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap font-semibold ${
                    sortMode === mode
                      ? 'text-white'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  style={sortMode === mode ? {
                    background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-glow))',
                    boxShadow: '0 0 12px rgba(108, 99, 255, 0.3)',
                  } : undefined}
                >
                  {sortLabels[mode]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Category filters - horizontal scroll on mobile, vertical on desktop/tablet */}
      <div className={
        isMobile
          ? 'shrink-0 flex flex-row gap-1.5 overflow-x-auto scrollbar-none -mx-4 px-4 pb-0.5'
          : 'shrink-0 flex flex-col gap-1.5'
      }>
        <CategoryPill
          name={t.category_all}
          icon="&#x1F310;"
          color="#6C63FF"
          isActive={activeCategory === null}
          onClick={() => setActiveCategory(null)}
          compact={isMobile}
        />
        {categoryList.map(cat => (
          <CategoryPill
            key={cat.id}
            name={tCategory(cat.id)}
            icon={cat.icon}
            color={cat.color}
            isActive={activeCategory === cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            compact={isMobile}
          />
        ))}
      </div>

      {/* Glow separator */}
      <div className="shrink-0 glow-line" />

      {/* Elements grid */}
      <div className="flex-1 overflow-y-auto min-h-0 scrollbar-none">
        <div
          className={`grid pb-2 ${isMobile ? 'gap-2' : 'gap-3'}`}
          style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? '72px' : '80px'}, 1fr))` }}
        >
          {filtered.map(element => (
            <DraggableElement
              key={element.id}
              element={element}
              dragId={`inventory-${element.id}`}
              size={isMobile ? 'sm' : 'md'}
              isSelected={selectedElementId === element.id}
              onTap={onElementTap ? () => onElementTap(element.id) : undefined}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-text-secondary text-sm py-8">
            {search ? t.no_results : t.no_elements}
          </p>
        )}
      </div>

      {/* Glow separator */}
      <div className="shrink-0 glow-line" />

      {/* Progress bar + count */}
      <div className="shrink-0 flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-glass-bg/60 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPercent}%`,
              background: 'linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-glow))',
              boxShadow: '0 0 8px rgba(108, 99, 255, 0.4)',
            }}
          />
        </div>
        <span className="text-[12px] text-text-secondary font-medium whitespace-nowrap">
          {discoveredCount}/{totalElements}
        </span>
      </div>
    </div>
  )
}
