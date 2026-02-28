import { clsx } from 'clsx'

type BadgeVariant = 'new' | 'count' | 'category'

interface BadgeProps {
  variant?: BadgeVariant
  label?: string
  color?: string
  className?: string
}

export function Badge({ variant = 'new', label, color, className }: BadgeProps) {
  if (variant === 'new') {
    return (
      <span className={clsx(
        'absolute top-0.5 right-0.5 z-10',
        'w-2.5 h-2.5 rounded-full',
        'bg-accent-glow',
        'ring-2 ring-accent-glow/30',
        className
      )}
      style={{
        animation: 'glow-pulse 2s ease-in-out infinite',
      }}
      />
    )
  }

  if (variant === 'count') {
    return (
      <span className={clsx(
        'inline-flex items-center justify-center',
        'bg-bg-secondary text-text-secondary text-xs font-medium',
        'px-2 py-0.5 rounded-full border border-border-color',
        className
      )}>
        {label}
      </span>
    )
  }

  if (variant === 'category') {
    return (
      <span
        className={clsx(
          'inline-flex items-center gap-1',
          'text-xs font-medium px-2 py-0.5 rounded-full',
          className
        )}
        style={{
          backgroundColor: color ? `${color}20` : undefined,
          color: color,
          border: `1px solid ${color}40`,
        }}
      >
        {label}
      </span>
    )
  }

  return null
}
