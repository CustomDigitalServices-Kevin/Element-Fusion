import { clsx } from 'clsx'

interface CategoryPillProps {
  name: string
  icon: string
  color: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export function CategoryPill({ name, icon, color, isActive = false, onClick, className }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium',
        'border transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary',
        isActive
          ? 'text-white'
          : 'text-text-secondary hover:text-text-primary',
        className
      )}
      style={
        isActive
          ? { backgroundColor: color, borderColor: color }
          : { backgroundColor: `${color}15`, borderColor: `${color}40`, color: color }
      }
      aria-pressed={isActive}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </button>
  )
}
