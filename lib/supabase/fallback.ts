import type { Element, Category, Combination } from '@/types/database'

interface FallbackData {
  categories: Category[]
  elements: Element[]
  combinations: Combination[]
}

const ts = new Date().toISOString()

const fallbackData: FallbackData = {
  categories: [
    { id: 1, name: 'Nature', color: '#4CAF50', icon: '🌿' },
    { id: 2, name: 'Technologie', color: '#2196F3', icon: '⚡' },
    { id: 3, name: 'Vie', color: '#E91E63', icon: '❤️' },
    { id: 4, name: 'Nourriture', color: '#FF9800', icon: '🍎' },
    { id: 5, name: 'Mythologie', color: '#9C27B0', icon: '✨' },
  ],
  elements: [
    // Tier 0
    { id: 1, name: 'Eau', emoji: '💧', category_id: 1, is_base: true, tier: 0, description: "L'élément fondamental de la vie", created_at: ts },
    { id: 2, name: 'Feu', emoji: '🔥', category_id: 1, is_base: true, tier: 0, description: 'La chaleur et la lumière primordiales', created_at: ts },
    { id: 3, name: 'Terre', emoji: '🌍', category_id: 1, is_base: true, tier: 0, description: 'La base solide de toute existence', created_at: ts },
    { id: 4, name: 'Air', emoji: '💨', category_id: 1, is_base: true, tier: 0, description: 'Le souffle invisible qui enveloppe tout', created_at: ts },
    // Tier 1
    { id: 5, name: 'Vapeur', emoji: '♨️', category_id: 1, is_base: false, tier: 1, description: 'Eau transformée par la chaleur', created_at: ts },
    { id: 6, name: 'Boue', emoji: '🟫', category_id: 1, is_base: false, tier: 1, description: "Mélange de terre et d'eau", created_at: ts },
    { id: 7, name: 'Fumée', emoji: '🌫️', category_id: 1, is_base: false, tier: 1, description: 'Air chargé de particules brûlées', created_at: ts },
    { id: 8, name: 'Lave', emoji: '🌋', category_id: 1, is_base: false, tier: 1, description: 'Roche en fusion ardente', created_at: ts },
    { id: 9, name: 'Pluie', emoji: '🌧️', category_id: 1, is_base: false, tier: 1, description: "L'eau qui tombe du ciel", created_at: ts },
    { id: 10, name: 'Poussière', emoji: '💫', category_id: 1, is_base: false, tier: 1, description: "Particules de terre dans l'air", created_at: ts },
    // Tier 2
    { id: 11, name: 'Pierre', emoji: '🪨', category_id: 1, is_base: false, tier: 2, description: 'Roche solide refroidie', created_at: ts },
    { id: 12, name: 'Obsidienne', emoji: '⬛', category_id: 1, is_base: false, tier: 2, description: 'Verre volcanique noir et tranchant', created_at: ts },
    { id: 13, name: 'Nuage', emoji: '☁️', category_id: 1, is_base: false, tier: 2, description: 'Vapeur condensée dans le ciel', created_at: ts },
    { id: 14, name: 'Brique', emoji: '🧱', category_id: 2, is_base: false, tier: 2, description: 'Boue cuite par le feu', created_at: ts },
    { id: 15, name: 'Plante', emoji: '🌱', category_id: 3, is_base: false, tier: 2, description: 'La vie végétale naissante', created_at: ts },
    { id: 16, name: 'Sable', emoji: '🏜️', category_id: 1, is_base: false, tier: 2, description: 'Grains fins de roche érodée', created_at: ts },
    { id: 17, name: 'Sel', emoji: '🧂', category_id: 4, is_base: false, tier: 2, description: 'Cristaux minéraux essentiels', created_at: ts },
    { id: 18, name: 'Glace', emoji: '🧊', category_id: 1, is_base: false, tier: 2, description: 'Eau solidifiée par le froid', created_at: ts },
    { id: 19, name: 'Neige', emoji: '❄️', category_id: 1, is_base: false, tier: 2, description: 'Cristaux de glace tombant du ciel', created_at: ts },
    { id: 20, name: 'Vent', emoji: '🌬️', category_id: 1, is_base: false, tier: 2, description: 'Air en mouvement puissant', created_at: ts },
    { id: 21, name: 'Tempête', emoji: '⛈️', category_id: 1, is_base: false, tier: 2, description: 'Déchaînement des éléments', created_at: ts },
    { id: 22, name: 'Rivière', emoji: '🏞️', category_id: 1, is_base: false, tier: 2, description: 'Eau qui coule à travers la terre', created_at: ts },
    { id: 23, name: 'Océan', emoji: '🌊', category_id: 1, is_base: false, tier: 2, description: "Immensité d'eau salée", created_at: ts },
    { id: 24, name: 'Volcan', emoji: '🌋', category_id: 1, is_base: false, tier: 2, description: 'Montagne crachant du feu', created_at: ts },
    { id: 25, name: 'Île', emoji: '🏝️', category_id: 1, is_base: false, tier: 2, description: "Terre entourée d'eau", created_at: ts },
    // Tier 3
    { id: 26, name: 'Métal', emoji: '⚙️', category_id: 2, is_base: false, tier: 3, description: 'Pierre fondue et raffinée', created_at: ts },
    { id: 27, name: 'Mur', emoji: '🏗️', category_id: 2, is_base: false, tier: 3, description: 'Barrière de pierres empilées', created_at: ts },
    { id: 28, name: 'Orage', emoji: '⚡', category_id: 1, is_base: false, tier: 3, description: 'Tempête électrique violente', created_at: ts },
    { id: 29, name: 'Arbre', emoji: '🌳', category_id: 3, is_base: false, tier: 3, description: 'Plante devenue majestueuse', created_at: ts },
    { id: 30, name: 'Champignon', emoji: '🍄', category_id: 3, is_base: false, tier: 3, description: "Vie née de l'humidité", created_at: ts },
    { id: 31, name: 'Rose', emoji: '🌹', category_id: 3, is_base: false, tier: 3, description: "Fleur d'une beauté épineuse", created_at: ts },
    { id: 32, name: 'Blé', emoji: '🌾', category_id: 4, is_base: false, tier: 3, description: 'Céréale nourricière', created_at: ts },
    { id: 33, name: 'Algue', emoji: '🌿', category_id: 3, is_base: false, tier: 3, description: 'Plante aquatique primitive', created_at: ts },
    { id: 34, name: 'Montagne', emoji: '⛰️', category_id: 1, is_base: false, tier: 3, description: 'Terre poussée vers le ciel', created_at: ts },
    { id: 35, name: 'Désert', emoji: '🏜️', category_id: 1, is_base: false, tier: 3, description: 'Étendue de sable aride', created_at: ts },
    { id: 36, name: 'Forêt', emoji: '🌲', category_id: 1, is_base: false, tier: 3, description: "Multitude d'arbres vivants", created_at: ts },
    { id: 37, name: 'Marais', emoji: '🐸', category_id: 1, is_base: false, tier: 3, description: "Terre gorgée d'eau stagnante", created_at: ts },
    { id: 38, name: 'Glacier', emoji: '🏔️', category_id: 1, is_base: false, tier: 3, description: 'Rivière de glace éternelle', created_at: ts },
    { id: 39, name: 'Arc-en-ciel', emoji: '🌈', category_id: 1, is_base: false, tier: 3, description: 'Lumière décomposée par la pluie', created_at: ts },
    { id: 40, name: 'Soleil', emoji: '☀️', category_id: 1, is_base: false, tier: 3, description: 'Boule de feu céleste', created_at: ts },
    { id: 41, name: 'Lune', emoji: '🌙', category_id: 1, is_base: false, tier: 3, description: 'Astre nocturne mystérieux', created_at: ts },
    { id: 42, name: 'Verre', emoji: '🪟', category_id: 2, is_base: false, tier: 3, description: 'Sable fondu transparent', created_at: ts },
    { id: 43, name: 'Charbon', emoji: '⚫', category_id: 1, is_base: false, tier: 3, description: 'Bois pétrifié combustible', created_at: ts },
    { id: 44, name: 'Fossile', emoji: '🦴', category_id: 1, is_base: false, tier: 3, description: 'Empreinte du passé dans la pierre', created_at: ts },
    { id: 45, name: 'Animal', emoji: '🐾', category_id: 3, is_base: false, tier: 3, description: 'Être vivant mobile', created_at: ts },
    { id: 46, name: 'Poisson', emoji: '🐟', category_id: 3, is_base: false, tier: 3, description: 'Animal aquatique', created_at: ts },
    { id: 47, name: 'Oiseau', emoji: '🐦', category_id: 3, is_base: false, tier: 3, description: 'Animal qui vole', created_at: ts },
  ],
  combinations: [
    // Tier 1
    { id: 1, element1_id: 1, element2_id: 2, result_id: 5 },   // Eau+Feu=Vapeur
    { id: 2, element1_id: 1, element2_id: 3, result_id: 6 },   // Eau+Terre=Boue
    { id: 3, element1_id: 2, element2_id: 4, result_id: 7 },   // Feu+Air=Fumée
    { id: 4, element1_id: 2, element2_id: 3, result_id: 8 },   // Feu+Terre=Lave
    { id: 5, element1_id: 1, element2_id: 4, result_id: 9 },   // Eau+Air=Pluie
    { id: 6, element1_id: 3, element2_id: 4, result_id: 10 },  // Terre+Air=Poussière
    // Tier 2
    { id: 7, element1_id: 1, element2_id: 8, result_id: 11 },  // Eau+Lave=Pierre
    { id: 8, element1_id: 4, element2_id: 8, result_id: 12 },  // Air+Lave=Obsidienne
    { id: 9, element1_id: 4, element2_id: 5, result_id: 13 },  // Air+Vapeur=Nuage
    { id: 10, element1_id: 2, element2_id: 6, result_id: 14 }, // Feu+Boue=Brique
    { id: 11, element1_id: 3, element2_id: 9, result_id: 15 }, // Terre+Pluie=Plante
    { id: 12, element1_id: 4, element2_id: 11, result_id: 16 }, // Air+Pierre=Sable
    { id: 13, element1_id: 4, element2_id: 4, result_id: 20 }, // Air+Air=Vent
    { id: 14, element1_id: 13, element2_id: 20, result_id: 21 }, // Nuage+Vent=Tempête
    { id: 15, element1_id: 9, element2_id: 9, result_id: 22 }, // Pluie+Pluie=Rivière
    { id: 16, element1_id: 1, element2_id: 1, result_id: 23 }, // Eau+Eau=Océan
    { id: 17, element1_id: 3, element2_id: 8, result_id: 24 }, // Terre+Lave=Volcan
    { id: 18, element1_id: 3, element2_id: 23, result_id: 25 }, // Terre+Océan=Île
    { id: 19, element1_id: 4, element2_id: 9, result_id: 19 }, // Air+Pluie=Neige
    { id: 20, element1_id: 1, element2_id: 19, result_id: 18 }, // Eau+Neige=Glace
    { id: 21, element1_id: 2, element2_id: 23, result_id: 17 }, // Feu+Océan=Sel
    // Tier 3
    { id: 22, element1_id: 2, element2_id: 11, result_id: 26 }, // Feu+Pierre=Métal
    { id: 23, element1_id: 11, element2_id: 11, result_id: 27 }, // Pierre+Pierre=Mur
    { id: 24, element1_id: 2, element2_id: 21, result_id: 28 }, // Feu+Tempête=Orage
    { id: 25, element1_id: 9, element2_id: 15, result_id: 29 }, // Pluie+Plante=Arbre
    { id: 26, element1_id: 6, element2_id: 15, result_id: 30 }, // Boue+Plante=Champignon
    { id: 27, element1_id: 1, element2_id: 15, result_id: 31 }, // Eau+Plante=Rose
    { id: 28, element1_id: 3, element2_id: 15, result_id: 32 }, // Terre+Plante=Blé
    { id: 29, element1_id: 15, element2_id: 23, result_id: 33 }, // Plante+Océan=Algue
    { id: 30, element1_id: 3, element2_id: 11, result_id: 34 }, // Terre+Pierre=Montagne
    { id: 31, element1_id: 16, element2_id: 16, result_id: 35 }, // Sable+Sable=Désert
    { id: 32, element1_id: 29, element2_id: 29, result_id: 36 }, // Arbre+Arbre=Forêt
    { id: 33, element1_id: 6, element2_id: 22, result_id: 37 }, // Boue+Rivière=Marais
    { id: 34, element1_id: 18, element2_id: 34, result_id: 38 }, // Glace+Montagne=Glacier
    { id: 35, element1_id: 9, element2_id: 40, result_id: 39 }, // Pluie+Soleil=Arc-en-ciel
    { id: 36, element1_id: 2, element2_id: 2, result_id: 40 },  // Feu+Feu=Soleil
    { id: 37, element1_id: 11, element2_id: 13, result_id: 41 }, // Pierre+Nuage=Lune
    { id: 38, element1_id: 2, element2_id: 16, result_id: 42 }, // Feu+Sable=Verre
    { id: 39, element1_id: 2, element2_id: 29, result_id: 43 }, // Feu+Arbre=Charbon
    { id: 40, element1_id: 11, element2_id: 29, result_id: 44 }, // Pierre+Arbre=Fossile
    { id: 41, element1_id: 15, element2_id: 22, result_id: 45 }, // Plante+Rivière=Animal
    { id: 42, element1_id: 1, element2_id: 45, result_id: 46 }, // Eau+Animal=Poisson
    { id: 43, element1_id: 4, element2_id: 45, result_id: 47 }, // Air+Animal=Oiseau
    // Alt paths
    { id: 44, element1_id: 14, element2_id: 14, result_id: 27 }, // Brique+Brique=Mur
    { id: 45, element1_id: 3, element2_id: 3, result_id: 34 },  // Terre+Terre=Montagne
    { id: 46, element1_id: 5, element2_id: 5, result_id: 13 },  // Vapeur+Vapeur=Nuage
    { id: 47, element1_id: 8, element2_id: 8, result_id: 24 },  // Lave+Lave=Volcan
    { id: 48, element1_id: 22, element2_id: 22, result_id: 23 }, // Rivière+Rivière=Océan
    { id: 49, element1_id: 15, element2_id: 40, result_id: 29 }, // Plante+Soleil=Arbre
    { id: 50, element1_id: 1, element2_id: 22, result_id: 23 }, // Eau+Rivière=Océan
    { id: 51, element1_id: 2, element2_id: 34, result_id: 24 }, // Feu+Montagne=Volcan
    { id: 52, element1_id: 1, element2_id: 36, result_id: 37 }, // Eau+Forêt=Marais
    { id: 53, element1_id: 19, element2_id: 34, result_id: 38 }, // Neige+Montagne=Glacier
    { id: 54, element1_id: 23, element2_id: 24, result_id: 25 }, // Océan+Volcan=Île
    { id: 55, element1_id: 2, element2_id: 18, result_id: 1 },  // Feu+Glace=Eau
  ],
}

export function getFallbackData(): FallbackData {
  return fallbackData
}
