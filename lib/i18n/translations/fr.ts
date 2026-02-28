import type { TranslationDict } from '../types'

export const fr: TranslationDict = {
  ui: {
    app_title: 'Element Fusion',
    get_hint: 'Obtenir un indice',
    hint: 'Indice',
    encyclopedia: 'Encyclopédie',
    reset_progress: 'Réinitialiser la progression',
    reset_confirm_title: 'Réinitialiser la progression ?',
    reset_confirm_message: 'Toute ta progression sera effacée. Seuls les 4 éléments de base resteront.',
    cancel: 'Annuler',
    reset: 'Réinitialiser',

    search_placeholder: 'Rechercher un élément...',
    sort_recent: 'Récent',
    sort_alpha: 'A → Z',
    sort_tier: 'Tier',
    category_all: 'Tous',
    no_results: 'Aucun résultat',
    no_elements: 'Aucun élément découvert',

    fusion_zone: 'Zone de fusion',
    clear: 'Vider',
    slot_1: 'Élément 1',
    slot_2: 'Élément 2',
    no_combination: 'Pas de combinaison',
    new_discovery: 'Nouveau !',
    already_known: 'Déjà découvert :',
    workspace_hint: 'Glisse 2 éléments ici pour les fusionner',
    workspace_hint_one: 'Ajoute un 2ème élément',

    click_to_continue: 'Cliquez pour continuer',

    onboarding_step1_title: 'Glisse un élément',
    onboarding_step1_desc: 'Sélectionne un élément dans ton inventaire et glisse-le dans la zone de fusion. Tu peux aussi taper dessus !',
    onboarding_step2_title: 'Ajoute un 2ème élément',
    onboarding_step2_desc: 'Combine 2 éléments ensemble pour découvrir de nouvelles créations.',
    onboarding_step3_title: 'Découvre des combinaisons !',
    onboarding_step3_desc: 'Eau + Feu = Vapeur, Terre + Eau = Boue... Trouve les 90+ éléments cachés !',
    skip: 'Passer',
    next: 'Suivant',
    lets_go: "C'est parti !",

    tier: 'Tier',
    undiscovered: '???',
    achievement_unlocked: 'Succès débloqué !',

    enable_sound: 'Activer le son',
    disable_sound: 'Couper le son',

    search_default: 'Rechercher...',
    clear_search: 'Effacer la recherche',
    close: 'Fermer',
  },

  elements: {
    1: 'Eau', 2: 'Feu', 3: 'Terre', 4: 'Air',
    5: 'Vapeur', 6: 'Boue', 7: 'Fumée', 8: 'Lave', 9: 'Pluie', 10: 'Poussière',
    11: 'Pierre', 12: 'Obsidienne', 13: 'Nuage', 14: 'Brique', 15: 'Plante',
    16: 'Sable', 17: 'Sel', 18: 'Glace', 19: 'Neige', 20: 'Vent',
    21: 'Tempête', 22: 'Rivière', 23: 'Océan', 24: 'Volcan', 25: 'Île',
    26: 'Métal', 27: 'Mur', 28: 'Orage', 29: 'Arbre', 30: 'Champignon',
    31: 'Rose', 32: 'Blé', 33: 'Algue', 34: 'Montagne', 35: 'Désert',
    36: 'Forêt', 37: 'Marais', 38: 'Glacier', 39: 'Arc-en-ciel', 40: 'Soleil',
    41: 'Lune', 42: 'Verre', 43: 'Charbon', 44: 'Fossile', 45: 'Animal',
    46: 'Poisson', 47: 'Oiseau',
  },

  categories: {
    1: 'Nature', 2: 'Technologie', 3: 'Vie', 4: 'Nourriture', 5: 'Mythologie',
  },

  achievements: {
    first_element: { name: 'Premier Pas', desc: 'Découvrir votre premier élément' },
    elements_10: { name: 'Explorateur', desc: 'Découvrir 10 éléments' },
    elements_25: { name: 'Alchimiste', desc: 'Découvrir 25 éléments' },
    elements_50: { name: 'Sage', desc: 'Découvrir 50 éléments' },
    elements_100: { name: 'Maître Alchimiste', desc: 'Découvrir 100 éléments' },
    elements_200: { name: 'Grand Sage', desc: 'Découvrir 200 éléments' },
    elements_500: { name: 'Dieu des Éléments', desc: 'Découvrir tous les éléments' },
    first_fusion: { name: 'Fusion Initiale', desc: 'Réaliser votre première fusion' },
    fusions_10: { name: 'Fusionneur', desc: '10 fusions réussies' },
    fusions_50: { name: 'Expert en Fusion', desc: '50 fusions réussies' },
    hint_used: { name: 'Coup de Pouce', desc: 'Utiliser un indice' },
    tier_5: { name: 'Architecte du Monde', desc: 'Créer un élément de tier 5' },
  },
}
