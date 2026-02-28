import { clsx } from 'clsx'

interface CategoryPillProps {
  name: string
  icon: string
  color: string
  isActive?: boolean
  onClick?: () => void
  className?: string
  compact?: boolean
}

export function CategoryPill({ name, icon, color, isActive = false, onClick, className, compact = false }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center border transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
        compact
          ? 'gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap shrink-0'
          : 'gap-2 w-full px-4 py-2.5 rounded-xl text-[13px] font-medium',
        isActive
          ? 'text-white border-transparent shadow-lg'
          : 'text-text-secondary hover:text-text-primary border-glass-border bg-glass-bg/30 hover:bg-glass-bg/50',
        className
      )}
      style={
        isActive
          ? {
              background: `linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-glow))`,
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 3s ease infinite',
              boxShadow: `0 0 16px ${color}40, 0 0 32px ${color}20`,
            }
          : undefined
      }
      aria-pressed={isActive}
    >
      <span className={clsx('leading-none', compact ? 'text-sm' : 'text-base')}>{icon}</span>
      <span>{name}</span>
    </button>
  )
}
