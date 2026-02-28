'use client'

import { clsx } from 'clsx'
import { Badge } from '@/components/ui'
import { useLanguage } from '@/lib/i18n'
import type { GameElement } from '@/types/game'

interface ElementCardProps {
  element: GameElement
  size?: 'sm' | 'md' | 'lg' | 'list'
  isDragging?: boolean
  isInWorkspace?: boolean
  isSelected?: boolean
  className?: string
  onClick?: () => void
}

const sizeConfig = {
  sm: { card: 'w-[72px] h-[80px]', emoji: 'text-[28px]', label: 'text-[9px]' },
  md: { card: 'w-[80px] h-[88px]', emoji: 'text-[36px]', label: 'text-[11px]' },
  lg: { card: 'w-[88px] h-[96px]', emoji: 'text-[40px]', label: 'text-[12px]' },
}

export function ElementCard({
  element,
  size = 'md',
  isDragging = false,
  isInWorkspace = false,
  isSelected = false,
  className,
  onClick,
}: ElementCardProps) {
  const { t, tElement } = useLanguage()

  // List mode: horizontal row layout
  if (size === 'list') {
    return (
      <div
        className={clsx(
          'relative flex items-center gap-3 px-3 py-2.5',
          'rounded-xl transition-all duration-200 select-none',
          'glass-panel',
          isDragging
            ? 'scale-[1.02] opacity-90 shadow-[0_8px_30px_rgba(0,0,0,0.4)] cursor-grabbing z-50'
            : 'cursor-grab',
          isSelected
            ? 'ring-2 ring-accent-glow ring-offset-1 ring-offset-bg-primary'
            : '',
          !isDragging && !isInWorkspace && 'hover:scale-[1.01]',
          className
        )}
        style={{
          borderColor: isDragging
            ? 'var(--color-accent-primary)'
            : isSelected
              ? 'var(--color-accent-glow)'
              : 'rgba(255, 255, 255, 0.06)',
          borderLeftWidth: '3px',
          borderLeftColor: element.categoryColor,
          boxShadow: isDragging
            ? '0 8px 30px rgba(0,0,0,0.4)'
            : '0 2px 8px rgba(0, 0, 0, 0.15)',
          willChange: isDragging ? 'transform' : undefined,
        }}
        onMouseEnter={(e) => {
          if (!isDragging && !isInWorkspace) {
            e.currentTarget.style.boxShadow = `0 0 16px ${element.categoryColor}30, 0 4px 16px rgba(0, 0, 0, 0.2)`
          }
        }}
        onMouseLeave={(e) => {
          if (!isDragging) {
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)'
          }
        }}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={`${element.emoji} ${tElement(element.id)}`}
        onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      >
        {element.isNew && <Badge variant="new" />}
        <span className="text-[28px] leading-none shrink-0">{element.emoji}</span>
        <div className="flex-1 min-w-0">
          <span className="text-[13px] font-medium text-text-primary block truncate">
            {tElement(element.id)}
          </span>
          <span className="text-[10px] text-text-secondary/60 block">
            {t.tier} {element.tier}
          </span>
        </div>
        <div
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: element.categoryColor }}
          title={element.categoryIcon}
        />
      </div>
    )
  }

  // Card mode: square card layout
  const { card, emoji, label } = sizeConfig[size]

  return (
    <div
      className={clsx(
        'relative flex flex-col items-center justify-center gap-1',
        'rounded-xl transition-all duration-200 select-none',
        'glass-panel',
        card,
        isDragging
          ? 'scale-110 opacity-90 shadow-[0_12px_40px_rgba(0,0,0,0.5)] rotate-3 cursor-grabbing z-50'
          : 'cursor-grab',
        isSelected
          ? 'ring-2 ring-accent-glow ring-offset-1 ring-offset-bg-primary'
          : '',
        !isDragging && !isInWorkspace && 'hover:scale-105',
        className
      )}
      style={{
        borderColor: isDragging
          ? 'var(--color-accent-primary)'
          : isSelected
            ? 'var(--color-accent-glow)'
            : 'rgba(255, 255, 255, 0.06)',
        borderBottomWidth: '3px',
        borderBottomColor: element.categoryColor,
        boxShadow: isDragging
          ? '0 12px 40px rgba(0,0,0,0.5)'
          : '0 2px 12px rgba(0, 0, 0, 0.2)',
        willChange: isDragging ? 'transform' : undefined,
      }}
      onMouseEnter={(e) => {
        if (!isDragging && !isInWorkspace) {
          e.currentTarget.style.boxShadow = `0 0 20px ${element.categoryColor}40, 0 4px 24px rgba(0, 0, 0, 0.3)`
        }
      }}
      onMouseLeave={(e) => {
        if (!isDragging) {
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.2)'
        }
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`${element.emoji} ${tElement(element.id)}`}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
    >
      {element.isNew && <Badge variant="new" />}
      <span className={clsx(emoji, 'leading-none')}>{element.emoji}</span>
      <span
        className={clsx(label, 'font-medium text-text-primary text-center leading-tight px-0.5 w-full truncate')}
        title={tElement(element.id)}
      >
        {tElement(element.id)}
      </span>
    </div>
  )
}
