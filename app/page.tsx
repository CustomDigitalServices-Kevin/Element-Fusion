'use client'

import { useCallback, useRef, useState } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
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
import { AchievementToast, ConfettiEffect } from '@/components/effects'
import { OnboardingOverlay } from '@/components/game/OnboardingOverlay'
import { audioManager } from '@/lib/audio/audioManager'
import type { GameElement } from '@/types/game'

export default function Home() {
  const { isLoading } = useGameInit()
  const breakpoint = useResponsive()

  const addToWorkspace = useGameStore(state => state.addToWorkspace)
  const moveWorkspaceElement = useGameStore(state => state.moveWorkspaceElement)
  const removeFromWorkspace = useGameStore(state => state.removeFromWorkspace)
  const fuseElements = useGameStore(state => state.fuseElements)
  const workspaceElements = useGameStore(state => state.workspaceElements)
  const clearWorkspace = useGameStore(state => state.clearWorkspace)

  const workspaceRef = useRef<HTMLDivElement>(null)
  const [activeDragElement, setActiveDragElement] = useState<GameElement | null>(null)
  const [selectedElementId, setSelectedElementId] = useState<number | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 8 } })
  )

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const data = event.active.data.current as { element?: GameElement } | undefined
    if (data?.element) {
      setActiveDragElement(data.element)
      audioManager.play('pickup')
    }
    // Clear tap selection on drag
    setSelectedElementId(null)
  }, [])

  // Tap-to-fuse: tap element in inventory → add to workspace slot → auto-fuse when 2 elements
  const handleElementTap = useCallback((elementId: number) => {
    // If workspace has < 2 elements, add this one
    if (workspaceElements.length < 2) {
      const x = 200
      const y = 150
      addToWorkspace(elementId, x, y)
      audioManager.play('pickup')
      setSelectedElementId(null)

      // If that was the 2nd element, auto-fuse
      if (workspaceElements.length === 1) {
        // Use setTimeout to let the state update
        setTimeout(() => {
          const state = useGameStore.getState()
          const wsEls = state.workspaceElements
          if (wsEls.length === 2) {
            const result = state.fuseElements(wsEls[0].elementId, wsEls[1].elementId)
            if (result.success && !result.isNewDiscovery) {
              audioManager.play('fusion_success')
            }
            // Remove both from workspace
            const ids = wsEls.map(el => el.instanceId)
            for (const id of ids) {
              state.removeFromWorkspace(id)
            }
          }
        }, 300)
      }
    } else {
      // Workspace full, clear and add this element
      clearWorkspace()
      setTimeout(() => {
        addToWorkspace(elementId, 200, 150)
        audioManager.play('pickup')
      }, 100)
    }
  }, [workspaceElements, addToWorkspace, clearWorkspace])

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over, delta } = event
    setActiveDragElement(null)

    const activeData = active.data.current as {
      element: GameElement
      isInWorkspace?: boolean
      instanceId?: string
    } | undefined

    if (!activeData) return

    // Dropped on workspace zone
    if (over?.id === 'workspace') {
      if (activeData.isInWorkspace && activeData.instanceId) {
        // Move existing workspace element
        const wsEl = workspaceElements.find(el => el.instanceId === activeData.instanceId)
        if (wsEl) {
          moveWorkspaceElement(activeData.instanceId, wsEl.x + delta.x, wsEl.y + delta.y)
        }
      } else {
        // Add new element from inventory (max 2)
        if (workspaceElements.length >= 2) {
          // Workspace full - clear first, then add
          clearWorkspace()
          setTimeout(() => {
            addToWorkspace(activeData.element.id, 200, 150)
          }, 50)
          return
        }
        const x = 200 + (workspaceElements.length === 0 ? -50 : 50)
        const y = 150
        addToWorkspace(activeData.element.id, x, y)

        // Auto-fuse if this was the 2nd element
        if (workspaceElements.length === 1) {
          setTimeout(() => {
            const state = useGameStore.getState()
            const wsEls = state.workspaceElements
            if (wsEls.length === 2) {
              const result = state.fuseElements(wsEls[0].elementId, wsEls[1].elementId)
              if (result.success && !result.isNewDiscovery) {
                audioManager.play('fusion_success')
              }
              const ids = wsEls.map(el => el.instanceId)
              for (const id of ids) {
                state.removeFromWorkspace(id)
              }
            }
          }, 400)
        }
      }
      return
    }

    // Dropped on another workspace element — try to fuse
    if (over?.id && typeof over.id === 'string' && over.id.startsWith('workspace-')) {
      const overData = over.data.current as { element: GameElement; instanceId?: string } | undefined
      if (overData?.element) {
        const result = fuseElements(activeData.element.id, overData.element.id)
        if (result.success && !result.isNewDiscovery) {
          audioManager.play('fusion_success')
        }
        // Remove both from workspace after fusion attempt
        if (activeData.instanceId) removeFromWorkspace(activeData.instanceId)
        if (overData.instanceId) removeFromWorkspace(overData.instanceId)
      }
    }
  }, [workspaceElements, addToWorkspace, moveWorkspaceElement, removeFromWorkspace, fuseElements, clearWorkspace])

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] bg-bg-primary flex items-center justify-center">
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

  const isMobile = breakpoint === 'mobile'
  const isTablet = breakpoint === 'tablet'
  const sidebarWidth = isTablet ? 360 : 420

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col h-[100dvh] bg-bg-primary overflow-hidden">
        <Header />

        {/* MOBILE: stacked layout - workspace on top, inventory bottom-sheet */}
        {isMobile && (
          <div className="flex flex-col flex-1 overflow-hidden min-h-0">
            {/* Workspace zone - takes remaining space */}
            <div className="flex-1 min-h-0" ref={workspaceRef}>
              <WorkspaceZone />
            </div>

            {/* Inventory - bottom-sheet style, max 50vh */}
            <div
              className="shrink-0 border-t border-transparent glass-panel overflow-hidden"
              style={{
                maxHeight: '50vh',
                height: '50vh',
                paddingBottom: 'env(safe-area-inset-bottom, 0px)',
              }}
            >
              <InventoryPanel
                selectedElementId={selectedElementId}
                onElementTap={handleElementTap}
              />
            </div>
          </div>
        )}

        {/* TABLET & DESKTOP: 2-column layout */}
        {!isMobile && (
          <div className="flex flex-1 overflow-hidden min-h-0">
            {/* Inventory sidebar */}
            <aside
              className="shrink-0 border-r border-transparent glass-panel overflow-hidden"
              style={{ width: sidebarWidth }}
            >
              <InventoryPanel
                selectedElementId={selectedElementId}
                onElementTap={handleElementTap}
              />
            </aside>

            {/* Workspace */}
            <main className="flex-1 overflow-hidden min-w-0" ref={workspaceRef}>
              <WorkspaceZone />
            </main>
          </div>
        )}
      </div>

      {/* Drag overlay for visual feedback */}
      <DragOverlay dropAnimation={null}>
        {activeDragElement && (
          <ElementCard
            element={activeDragElement}
            size="md"
            isDragging
          />
        )}
      </DragOverlay>

      <FusionResultModal />
      <AchievementToast />
      <ConfettiEffect />
      <OnboardingOverlay />
    </DndContext>
  )
}
