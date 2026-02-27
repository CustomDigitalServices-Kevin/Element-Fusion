'use client'

import { clsx } from 'clsx'
import { Badge } from '@/components/ui'
import type { GameElement } from '@/types/game'

interface ElementCardProps {
  element: GameElement
  size?: 'sm' | 'md' | 'lg'
  isDragging?: boolean
  isInWorkspace?: boolean
  className?: string
  onClick?: () => void
}

const sizeConfig = {
  sm: { card: 'w-16 h-16', emoji: 'text-2xl', label: 'text-[9px]' },
  md: { card: 'w-20 h-20 md:w-24 md:h-24', emoji: 'text-3xl md:text-4xl', label: 'text-[10px] md:text-[11px]' },
  lg: { card: 'w-24 h-24', emoji: 'text-4xl', label: 'text-xs' },
}

export function ElementCard({
  element,
  size = 'md',
  isDragging = false,
  isInWorkspace = false,
  className,
  onClick,
}: ElementCardProps) {
  const { card, emoji, label } = sizeConfig[size]

  return (
    <div
      className={clsx(
        'relative flex flex-col items-center justify-center gap-1.5',
        'rounded-xl border transition-all duration-200 select-none',
        card,
        isDragging
          ? 'scale-110 opacity-90 shadow-[0_12px_40px_rgba(0,0,0,0.5)] border-accent-primary cursor-grabbing z-50'
          : 'border-[rgba(255,255,255,0.08)] shadow-element cursor-grab',
        !isDragging && !isInWorkspace && 'hover:scale-[1.08] hover:shadow-element-hover hover:border-[rgba(108,99,255,0.5)]',
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${element.categoryColor}18, ${element.categoryColor}08)`,
        willChange: isDragging ? 'transform' : undefined,
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`${element.emoji} ${element.name}`}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
    >
      {element.isNew && <Badge variant="new" />}
      <span className={clsx(emoji, 'leading-none')}>{element.emoji}</span>
      <span
        className={clsx(label, 'font-medium text-text-secondary text-center leading-tight px-1 w-full truncate text-center')}
        title={element.name}
      >
        {element.name}
      </span>
    </div>
  )
}
