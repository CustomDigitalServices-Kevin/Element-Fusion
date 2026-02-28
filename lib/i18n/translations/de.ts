import type { TranslationDict } from '../types'

export const de: TranslationDict = {
  ui: {
    app_title: 'Element Fusion',
    get_hint: 'Hinweis erhalten',
    hint: 'Hinweis',
    encyclopedia: 'Enzyklopädie',
    reset_progress: 'Fortschritt zurücksetzen',
    reset_confirm_title: 'Fortschritt zurücksetzen?',
    reset_confirm_message: 'Dein gesamter Fortschritt wird gelöscht. Nur die 4 Basiselemente bleiben erhalten.',
    cancel: 'Abbrechen',
    reset: 'Zurücksetzen',

    search_placeholder: 'Element suchen...',
    sort_recent: 'Neueste',
    sort_alpha: 'A → Z',
    sort_tier: 'Stufe',
    category_all: 'Alle',
    no_results: 'Keine Ergebnisse',
    no_elements: 'Keine Elemente entdeckt',

    fusion_zone: 'Fusionszone',
    clear: 'Leeren',
    slot_1: 'Element 1',
    slot_2: 'Element 2',
    no_combination: 'Keine Kombination',
    new_discovery: 'Neu!',
    already_known: 'Bereits entdeckt:',
    workspace_hint: 'Ziehe 2 Elemente hierher zum Verschmelzen',
    workspace_hint_one: 'Füge ein 2. Element hinzu',

    click_to_continue: 'Klicken um fortzufahren',

    onboarding_step1_title: 'Ziehe ein Element',
    onboarding_step1_desc: 'Wähle ein Element aus deinem Inventar und ziehe es in die Fusionszone. Du kannst auch darauf tippen!',
    onboarding_step2_title: 'Füge ein 2. Element hinzu',
    onboarding_step2_desc: 'Kombiniere 2 Elemente miteinander, um neue Kreationen zu entdecken.',
    onboarding_step3_title: 'Entdecke Kombinationen!',
    onboarding_step3_desc: 'Wasser + Feuer = Dampf, Erde + Wasser = Schlamm... Finde über 90 versteckte Elemente!',
    skip: 'Überspringen',
    next: 'Weiter',
    lets_go: 'Los geht\'s!',

    tier: 'Stufe',
    undiscovered: '???',
    achievement_unlocked: 'Erfolg freigeschaltet!',

    enable_sound: 'Ton aktivieren',
    disable_sound: 'Ton deaktivieren',

    search_default: 'Suchen...',
    clear_search: 'Suche löschen',
    close: 'Schließen',
  },

  elements: {
    1: 'Wasser', 2: 'Feuer', 3: 'Erde', 4: 'Luft',
    5: 'Dampf', 6: 'Schlamm', 7: 'Rauch', 8: 'Lava', 9: 'Regen', 10: 'Staub',
    11: 'Stein', 12: 'Obsidian', 13: 'Wolke', 14: 'Ziegel', 15: 'Pflanze',
    16: 'Sand', 17: 'Salz', 18: 'Eis', 19: 'Schnee', 20: 'Wind',
    21: 'Sturm', 22: 'Fluss', 23: 'Ozean', 24: 'Vulkan', 25: 'Insel',
    26: 'Metall', 27: 'Mauer', 28: 'Donner', 29: 'Baum', 30: 'Pilz',
    31: 'Rose', 32: 'Weizen', 33: 'Alge', 34: 'Berg', 35: 'Wüste',
    36: 'Wald', 37: 'Sumpf', 38: 'Gletscher', 39: 'Regenbogen', 40: 'Sonne',
    41: 'Mond', 42: 'Glas', 43: 'Kohle', 44: 'Fossil', 45: 'Tier',
    46: 'Fisch', 47: 'Vogel',
  },

  categories: {
    1: 'Natur', 2: 'Technologie', 3: 'Leben', 4: 'Nahrung', 5: 'Mythologie',
  },

  achievements: {
    first_element: { name: 'Erster Schritt', desc: 'Entdecke dein erstes Element' },
    elements_10: { name: 'Entdecker', desc: 'Entdecke 10 Elemente' },
    elements_25: { name: 'Alchemist', desc: 'Entdecke 25 Elemente' },
    elements_50: { name: 'Weiser', desc: 'Entdecke 50 Elemente' },
    elements_100: { name: 'Meisteralchemist', desc: 'Entdecke 100 Elemente' },
    elements_200: { name: 'Großer Weiser', desc: 'Entdecke 200 Elemente' },
    elements_500: { name: 'Gott der Elemente', desc: 'Entdecke alle Elemente' },
    first_fusion: { name: 'Erste Fusion', desc: 'Führe deine erste Fusion durch' },
    fusions_10: { name: 'Verschmelzer', desc: '10 erfolgreiche Fusionen' },
    fusions_50: { name: 'Fusionsexperte', desc: '50 erfolgreiche Fusionen' },
    hint_used: { name: 'Schubser', desc: 'Benutze einen Hinweis' },
    tier_5: { name: 'Weltarchitekt', desc: 'Erstelle ein Element der Stufe 5' },
  },
}
