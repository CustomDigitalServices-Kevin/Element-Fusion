'use client'

import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
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
  const [isFocused, setIsFocused] = useState(false)
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
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={clsx(
          'w-full h-12 px-4 text-sm',
          'bg-glass-bg/40 border border-glass-border rounded-xl',
          'text-text-primary placeholder:text-text-secondary/50',
          'focus:outline-none transition-all duration-300',
          isFocused && 'neon-focus border-accent-primary/50'
        )}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        aria-label={placeholder}
      />
      {localValue && (
        <button
          onClick={handleClear}
          className="absolute right-3 p-1 text-text-secondary hover:text-accent-glow transition-colors duration-200"
          aria-label="Effacer la recherche"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
