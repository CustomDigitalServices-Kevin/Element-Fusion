import type { TranslationDict } from '../types'

export const it: TranslationDict = {
  ui: {
    app_title: 'Element Fusion',
    get_hint: 'Ottieni un suggerimento',
    hint: 'Suggerimento',
    encyclopedia: 'Enciclopedia',
    reset_progress: 'Ripristina i progressi',
    reset_confirm_title: 'Ripristinare i progressi?',
    reset_confirm_message: 'Tutti i tuoi progressi saranno cancellati. Rimarranno solo i 4 elementi base.',
    cancel: 'Annulla',
    reset: 'Ripristina',

    search_placeholder: 'Cerca un elemento...',
    sort_recent: 'Recente',
    sort_alpha: 'A → Z',
    sort_tier: 'Livello',
    category_all: 'Tutti',
    no_results: 'Nessun risultato',
    no_elements: 'Nessun elemento scoperto',

    fusion_zone: 'Zona di fusione',
    clear: 'Svuota',
    slot_1: 'Elemento 1',
    slot_2: 'Elemento 2',
    no_combination: 'Nessuna combinazione',
    new_discovery: 'Nuovo!',
    already_known: 'Già scoperto:',
    workspace_hint: 'Trascina 2 elementi qui per fonderli',
    workspace_hint_one: 'Aggiungi un 2° elemento',

    click_to_continue: 'Clicca per continuare',

    onboarding_step1_title: 'Trascina un elemento',
    onboarding_step1_desc: "Seleziona un elemento dall'inventario e trascinalo nella zona di fusione. Puoi anche toccarlo!",
    onboarding_step2_title: 'Aggiungi un 2° elemento',
    onboarding_step2_desc: 'Combina 2 elementi insieme per scoprire nuove creazioni.',
    onboarding_step3_title: 'Scopri le combinazioni!',
    onboarding_step3_desc: 'Acqua + Fuoco = Vapore, Terra + Acqua = Fango... Trova oltre 90 elementi nascosti!',
    skip: 'Salta',
    next: 'Avanti',
    lets_go: 'Andiamo!',

    tier: 'Livello',
    undiscovered: '???',
    achievement_unlocked: 'Obiettivo sbloccato!',

    enable_sound: 'Attiva audio',
    disable_sound: 'Disattiva audio',

    search_default: 'Cerca...',
    clear_search: 'Cancella ricerca',
    close: 'Chiudi',
  },

  elements: {
    1: 'Acqua', 2: 'Fuoco', 3: 'Terra', 4: 'Aria',
    5: 'Vapore', 6: 'Fango', 7: 'Fumo', 8: 'Lava', 9: 'Pioggia', 10: 'Polvere',
    11: 'Pietra', 12: 'Ossidiana', 13: 'Nuvola', 14: 'Mattone', 15: 'Pianta',
    16: 'Sabbia', 17: 'Sale', 18: 'Ghiaccio', 19: 'Neve', 20: 'Vento',
    21: 'Tempesta', 22: 'Fiume', 23: 'Oceano', 24: 'Vulcano', 25: 'Isola',
    26: 'Metallo', 27: 'Muro', 28: 'Tuono', 29: 'Albero', 30: 'Fungo',
    31: 'Rosa', 32: 'Grano', 33: 'Alga', 34: 'Montagna', 35: 'Deserto',
    36: 'Foresta', 37: 'Palude', 38: 'Ghiacciaio', 39: 'Arcobaleno', 40: 'Sole',
    41: 'Luna', 42: 'Vetro', 43: 'Carbone', 44: 'Fossile', 45: 'Animale',
    46: 'Pesce', 47: 'Uccello',
  },

  categories: {
    1: 'Natura', 2: 'Tecnologia', 3: 'Vita', 4: 'Cibo', 5: 'Mitologia',
  },

  achievements: {
    first_element: { name: 'Primo Passo', desc: 'Scopri il tuo primo elemento' },
    elements_10: { name: 'Esploratore', desc: 'Scopri 10 elementi' },
    elements_25: { name: 'Alchimista', desc: 'Scopri 25 elementi' },
    elements_50: { name: 'Saggio', desc: 'Scopri 50 elementi' },
    elements_100: { name: 'Maestro Alchimista', desc: 'Scopri 100 elementi' },
    elements_200: { name: 'Gran Saggio', desc: 'Scopri 200 elementi' },
    elements_500: { name: 'Dio degli Elementi', desc: 'Scopri tutti gli elementi' },
    first_fusion: { name: 'Prima Fusione', desc: 'Completa la tua prima fusione' },
    fusions_10: { name: 'Fusore', desc: '10 fusioni riuscite' },
    fusions_50: { name: 'Esperto di Fusione', desc: '50 fusioni riuscite' },
    hint_used: { name: 'Aiutino', desc: 'Usa un suggerimento' },
    tier_5: { name: 'Architetto del Mondo', desc: 'Crea un elemento di livello 5' },
  },
}
