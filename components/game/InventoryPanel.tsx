'use client'

import { useMemo, useState } from 'react'
import { useGameStore } from '@/store/gameStore'
import { DraggableElement } from './DraggableElement'
import { SearchBar, CategoryPill } from '@/components/ui'

type SortMode = 'recent' | 'alpha' | 'tier'

export function InventoryPanel() {
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
      result = result.filter(el => el.name.toLowerCase().includes(q))
    }

    if (activeCategory !== null) {
      result = result.filter(el => el.categoryId === activeCategory)
    }

    switch (sortMode) {
      case 'alpha':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name, 'fr'))
        break
      case 'tier':
        result = [...result].sort((a, b) => a.tier - b.tier)
        break
      case 'recent':
        result = [...result].sort((a, b) => (b.discoveredAt ?? 0) - (a.discoveredAt ?? 0))
        break
    }

    return result
  }, [discoveredElements, search, activeCategory, sortMode])

  const categoryList = useMemo(() => Array.from(categories.values()), [categories])

  return (
    <div className="flex flex-col h-full gap-3 p-3">
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Rechercher un element..."
      />

      {/* Sort buttons */}
      <div className="flex gap-1.5">
        {(['recent', 'alpha', 'tier'] as SortMode[]).map(mode => (
          <button
            key={mode}
            onClick={() => setSortMode(mode)}
            className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
              sortMode === mode
                ? 'bg-accent-primary text-white'
                : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
            }`}
          >
            {mode === 'recent' ? 'Recent' : mode === 'alpha' ? 'A->Z' : 'Tier'}
          </button>
        ))}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-1.5">
        <CategoryPill
          name="Tous"
          icon="&#x1F310;"
          color="#6C63FF"
          isActive={activeCategory === null}
          onClick={() => setActiveCategory(null)}
        />
        {categoryList.map(cat => (
          <CategoryPill
            key={cat.id}
            name={cat.name}
            icon={cat.icon}
            color={cat.color}
            isActive={activeCategory === cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
          />
        ))}
      </div>

      {/* Elements grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-3 gap-2 pb-4">
          {filtered.map(element => (
            <DraggableElement
              key={element.id}
              element={element}
              dragId={`inventory-${element.id}`}
              size="md"
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-text-secondary text-sm py-8">
            {search ? 'Aucun resultat' : 'Aucun element decouvert'}
          </p>
        )}
      </div>

      {/* Count */}
      <div className="text-xs text-text-secondary text-center pb-1">
        {discoveredElementIds.size} element{discoveredElementIds.size > 1 ? 's' : ''} decouvert{discoveredElementIds.size > 1 ? 's' : ''}
      </div>
    </div>
  )
}
