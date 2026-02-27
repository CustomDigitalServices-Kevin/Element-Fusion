import { describe, it, expect } from 'vitest'
import { getInitialAchievements, checkAchievements } from '@/lib/game/achievements'

describe('getInitialAchievements', () => {
  it('should return all achievements unlocked at null', () => {
    const achievements = getInitialAchievements()
    expect(achievements.length).toBeGreaterThan(0)
    expect(achievements.every(a => a.unlockedAt === null)).toBe(true)
  })

  it('should include required achievements', () => {
    const achievements = getInitialAchievements()
    const ids = achievements.map(a => a.id)
    expect(ids).toContain('first_element')
    expect(ids).toContain('first_fusion')
    expect(ids).toContain('elements_50')
  })
})

describe('checkAchievements', () => {
  const initial = getInitialAchievements()

  it('should unlock first_element at 1 discovered', () => {
    const result = checkAchievements(initial, 1, 0, 0, 0)
    const achievement = result.find(a => a.id === 'first_element')
    expect(achievement?.unlockedAt).not.toBeNull()
  })

  it('should not unlock elements_10 with only 5 discovered', () => {
    const result = checkAchievements(initial, 5, 0, 0, 0)
    const achievement = result.find(a => a.id === 'elements_10')
    expect(achievement?.unlockedAt).toBeNull()
  })

  it('should unlock first_fusion after 1 successful fusion', () => {
    const result = checkAchievements(initial, 0, 1, 0, 0)
    const achievement = result.find(a => a.id === 'first_fusion')
    expect(achievement?.unlockedAt).not.toBeNull()
  })

  it('should not re-unlock already unlocked achievements', () => {
    const firstPass = checkAchievements(initial, 1, 1, 0, 0)
    const firstAchievement = firstPass.find(a => a.id === 'first_element')
    const firstTime = firstAchievement?.unlockedAt

    // Wait a tiny bit (simulate time passing)
    const secondPass = checkAchievements(firstPass, 5, 5, 0, 0)
    const secondAchievement = secondPass.find(a => a.id === 'first_element')
    expect(secondAchievement?.unlockedAt).toBe(firstTime)
  })

  it('should unlock hint_used after using a hint', () => {
    const result = checkAchievements(initial, 0, 0, 1, 0)
    const achievement = result.find(a => a.id === 'hint_used')
    expect(achievement?.unlockedAt).not.toBeNull()
  })
})
