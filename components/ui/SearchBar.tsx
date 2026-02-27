'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { clsx } from 'clsx'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  debounceMs?: number
}

export function SearchBar({ value, onChange, placeholder = 'Rechercher...', className, debounceMs = 150 }: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setLocalValue(newValue)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => onChange(newValue), debounceMs)
  }

  const handleClear = () => {
    setLocalValue('')
    onChange('')
  }

  return (
    <div className={clsx('relative flex items-center', className)}>
      <Search className="absolute left-3 w-4 h-4 text-text-secondary pointer-events-none" />
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={clsx(
          'w-full h-9 pl-9 pr-8 text-sm',
          'bg-bg-secondary border border-border-color rounded-xl',
          'text-text-primary placeholder:text-text-secondary',
          'focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary',
          'transition-colors duration-200'
        )}
        aria-label={placeholder}
      />
      {localValue && (
        <button
          onClick={handleClear}
          className="absolute right-2.5 p-0.5 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Effacer la recherche"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  )
}
