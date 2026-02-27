'use client'

import { useCallback, useRef } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core'
import { useGameStore } from '@/store/gameStore'
import { useGameInit } from '@/hooks/useGameInit'
import { useResponsive } from '@/hooks/useResponsive'
import { Header } from '@/components/game/Header'
import { InventoryPanel } from '@/components/game/InventoryPanel'
import { WorkspaceZone } from '@/components/game/WorkspaceZone'
import { FusionResultModal } from '@/components/game/FusionResultModal'
import { ElementCard } from '@/components/game/ElementCard'

export default function Home() {
  const { isLoading } = useGameInit()
  const breakpoint = useResponsive()

  const elements = useGameStore(state => state.elements)
  const addToWorkspace = useGameStore(state => state.addToWorkspace)
  const moveWorkspaceElement = useGameStore(state => state.moveWorkspaceElement)
  const removeFromWorkspace = useGameStore(state => state.removeFromWorkspace)
  const fuseElements = useGameStore(state => state.fuseElements)
  const workspaceElements = useGameStore(state => state.workspaceElements)

  const workspaceRef = useRef<HTMLDivElement>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  )

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over, delta } = event
    const activeData = active.data.current as {
      element: NonNullable<ReturnType<typeof elements.get>>
      isInWorkspace?: boolean
      instanceId?: string
    } | undefined

    if (!activeData) return

    const workspaceRect = workspaceRef.current?.getBoundingClientRect()

    // Dropped on workspace zone
    if (over?.id === 'workspace') {
      if (activeData.isInWorkspace && activeData.instanceId) {
        // Move existing workspace element
        const wsEl = workspaceElements.find(el => el.instanceId === activeData.instanceId)
        if (wsEl) {
          moveWorkspaceElement(activeData.instanceId, wsEl.x + delta.x, wsEl.y + delta.y)
        }
      } else {
        // Add new element from inventory
        const x = workspaceRect ? (workspaceRect.width / 2) + (Math.random() - 0.5) * 200 : 200
        const y = workspaceRect ? (workspaceRect.height / 2) + (Math.random() - 0.5) * 100 : 150
        addToWorkspace(activeData.element.id, x, y)
      }
      return
    }

    // Dropped on another workspace element — try to fuse
    if (over?.id && typeof over.id === 'string' && over.id.startsWith('workspace-')) {
      const overData = over.data.current as { element: NonNullable<ReturnType<typeof elements.get>>; instanceId?: string } | undefined
      if (overData?.element && activeData.element.id !== overData.element.id) {
        fuseElements(activeData.element.id, overData.element.id)
        // Remove both from workspace after fusion attempt
        if (activeData.instanceId) removeFromWorkspace(activeData.instanceId)
        if (overData.instanceId) removeFromWorkspace(overData.instanceId)
      }
    }
  }, [workspaceElements, addToWorkspace, moveWorkspaceElement, removeFromWorkspace, fuseElements, elements])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-5xl animate-float">&#x2728;</div>
          <h1 className="text-xl font-bold text-accent-primary">Element Fusion</h1>
          <div className="flex gap-1.5 justify-center">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-2 h-2 bg-accent-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-screen bg-bg-primary overflow-hidden">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          {/* Inventory - hidden on mobile (bottom sheet TODO) */}
          {breakpoint !== 'mobile' && (
            <aside className="w-[280px] shrink-0 border-r border-border-color bg-bg-secondary/50 overflow-hidden">
              <InventoryPanel />
            </aside>
          )}

          {/* Workspace */}
          <main className="flex-1 overflow-hidden" ref={workspaceRef}>
            <WorkspaceZone />
          </main>
        </div>

        {/* Mobile inventory as bottom bar */}
        {breakpoint === 'mobile' && (
          <div className="h-48 border-t border-border-color bg-bg-secondary overflow-hidden">
            <InventoryPanel />
          </div>
        )}
      </div>

      <DragOverlay>
        {/* Overlay rendered during drag */}
      </DragOverlay>

      <FusionResultModal />
    </DndContext>
  )
}
