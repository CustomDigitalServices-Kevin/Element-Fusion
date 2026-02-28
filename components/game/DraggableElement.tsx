'use client'

import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { ElementCard } from './ElementCard'
import type { GameElement } from '@/types/game'

interface DraggableElementProps {
  element: GameElement
  dragId: string
  data?: Record<string, unknown>
  size?: 'sm' | 'md' | 'lg' | 'list'
  isInWorkspace?: boolean
  instanceId?: string
  isSelected?: boolean
  onTap?: () => void
}

export function DraggableElement({
  element,
  dragId,
  data,
  size = 'md',
  isInWorkspace = false,
  instanceId,
  isSelected = false,
  onTap,
}: DraggableElementProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: dragId,
    data: { element, instanceId, isInWorkspace, ...data },
  })

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 1000 : undefined,
    position: 'relative' as const,
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <ElementCard
        element={element}
        size={size}
        isDragging={isDragging}
        isInWorkspace={isInWorkspace}
        isSelected={isSelected}
        onClick={onTap}
      />
    </div>
  )
}
