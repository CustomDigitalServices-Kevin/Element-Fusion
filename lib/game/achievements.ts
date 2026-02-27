import type { Achievement } from '@/types/game'

const ACHIEVEMENT_DEFINITIONS: Omit<Achievement, 'unlockedAt'>[] = [
  { id: 'first_element', name: 'Premier Pas', description: 'Découvrir votre premier élément', emoji: '🌱' },
  { id: 'elements_10', name: 'Explorateur', description: 'Découvrir 10 éléments', emoji: '🔍' },
  { id: 'elements_25', name: 'Alchimiste', description: 'Découvrir 25 éléments', emoji: '⚗️' },
  { id: 'elements_50', name: 'Sage', description: 'Découvrir 50 éléments', emoji: '📚' },
  { id: 'elements_100', name: 'Maître Alchimiste', description: 'Découvrir 100 éléments', emoji: '🏆' },
  { id: 'elements_200', name: 'Grand Sage', description: 'Découvrir 200 éléments', emoji: '🌟' },
  { id: 'elements_500', name: 'Dieu des Éléments', description: 'Découvrir tous les éléments', emoji: '👑' },
  { id: 'first_fusion', name: 'Fusion Initiale', description: 'Réaliser votre première fusion', emoji: '✨' },
  { id: 'fusions_10', name: 'Fusionneur', description: '10 fusions réussies', emoji: '💥' },
  { id: 'fusions_50', name: 'Expert en Fusion', description: '50 fusions réussies', emoji: '🔥' },
  { id: 'hint_used', name: 'Coup de Pouce', description: 'Utiliser un indice', emoji: '💡' },
  { id: 'tier_5', name: 'Architecte du Monde', description: 'Créer un élément de tier 5', emoji: '🏗️' },
]

export function getInitialAchievements(): Achievement[] {
  return ACHIEVEMENT_DEFINITIONS.map(def => ({ ...def, unlockedAt: null }))
}

export function checkAchievements(
  currentAchievements: Achievement[],
  discoveredCount: number,
  successfulFusions: number,
  hintsUsed: number,
  maxTierDiscovered: number
): Achievement[] {
  const now = Date.now()
  return currentAchievements.map(achievement => {
    if (achievement.unlockedAt !== null) return achievement

    let shouldUnlock = false
    switch (achievement.id) {
      case 'first_element': shouldUnlock = discoveredCount >= 1; break
      case 'elements_10': shouldUnlock = discoveredCount >= 10; break
      case 'elements_25': shouldUnlock = discoveredCount >= 25; break
      case 'elements_50': shouldUnlock = discoveredCount >= 50; break
      case 'elements_100': shouldUnlock = discoveredCount >= 100; break
      case 'elements_200': shouldUnlock = discoveredCount >= 200; break
      case 'elements_500': shouldUnlock = discoveredCount >= 500; break
      case 'first_fusion': shouldUnlock = successfulFusions >= 1; break
      case 'fusions_10': shouldUnlock = successfulFusions >= 10; break
      case 'fusions_50': shouldUnlock = successfulFusions >= 50; break
      case 'hint_used': shouldUnlock = hintsUsed >= 1; break
      case 'tier_5': shouldUnlock = maxTierDiscovered >= 5; break
    }

    return shouldUnlock ? { ...achievement, unlockedAt: now } : achievement
  })
}
