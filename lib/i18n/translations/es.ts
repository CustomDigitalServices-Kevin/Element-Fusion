import type { TranslationDict } from '../types'

export const es: TranslationDict = {
  ui: {
    app_title: 'Element Fusion',
    get_hint: 'Obtener una pista',
    hint: 'Pista',
    encyclopedia: 'Enciclopedia',
    reset_progress: 'Reiniciar el progreso',
    reset_confirm_title: '¿Reiniciar el progreso?',
    reset_confirm_message: 'Todo tu progreso será borrado. Solo quedarán los 4 elementos base.',
    cancel: 'Cancelar',
    reset: 'Reiniciar',

    search_placeholder: 'Buscar un elemento...',
    sort_recent: 'Reciente',
    sort_alpha: 'A → Z',
    sort_tier: 'Nivel',
    category_all: 'Todos',
    no_results: 'Sin resultados',
    no_elements: 'Ningún elemento descubierto',

    fusion_zone: 'Zona de fusión',
    clear: 'Vaciar',
    slot_1: 'Elemento 1',
    slot_2: 'Elemento 2',
    no_combination: 'Sin combinación',
    new_discovery: '¡Nuevo!',
    already_known: 'Ya descubierto:',
    workspace_hint: 'Arrastra 2 elementos aquí para fusionarlos',
    workspace_hint_one: 'Añade un 2do elemento',

    click_to_continue: 'Haz clic para continuar',

    onboarding_step1_title: 'Arrastra un elemento',
    onboarding_step1_desc: 'Selecciona un elemento de tu inventario y arrástralo a la zona de fusión. ¡También puedes tocarlo!',
    onboarding_step2_title: 'Añade un 2do elemento',
    onboarding_step2_desc: 'Combina 2 elementos juntos para descubrir nuevas creaciones.',
    onboarding_step3_title: '¡Descubre combinaciones!',
    onboarding_step3_desc: 'Agua + Fuego = Vapor, Tierra + Agua = Barro... ¡Encuentra más de 90 elementos ocultos!',
    skip: 'Saltar',
    next: 'Siguiente',
    lets_go: '¡Vamos!',

    tier: 'Nivel',
    undiscovered: '???',
    achievement_unlocked: '¡Logro desbloqueado!',

    enable_sound: 'Activar sonido',
    disable_sound: 'Silenciar',

    search_default: 'Buscar...',
    clear_search: 'Borrar búsqueda',
    close: 'Cerrar',
  },

  elements: {
    1: 'Agua', 2: 'Fuego', 3: 'Tierra', 4: 'Aire',
    5: 'Vapor', 6: 'Barro', 7: 'Humo', 8: 'Lava', 9: 'Lluvia', 10: 'Polvo',
    11: 'Piedra', 12: 'Obsidiana', 13: 'Nube', 14: 'Ladrillo', 15: 'Planta',
    16: 'Arena', 17: 'Sal', 18: 'Hielo', 19: 'Nieve', 20: 'Viento',
    21: 'Tormenta', 22: 'Río', 23: 'Océano', 24: 'Volcán', 25: 'Isla',
    26: 'Metal', 27: 'Muro', 28: 'Trueno', 29: 'Árbol', 30: 'Hongo',
    31: 'Rosa', 32: 'Trigo', 33: 'Alga', 34: 'Montaña', 35: 'Desierto',
    36: 'Bosque', 37: 'Pantano', 38: 'Glaciar', 39: 'Arcoíris', 40: 'Sol',
    41: 'Luna', 42: 'Vidrio', 43: 'Carbón', 44: 'Fósil', 45: 'Animal',
    46: 'Pez', 47: 'Pájaro',
  },

  categories: {
    1: 'Naturaleza', 2: 'Tecnología', 3: 'Vida', 4: 'Comida', 5: 'Mitología',
  },

  achievements: {
    first_element: { name: 'Primer Paso', desc: 'Descubrir tu primer elemento' },
    elements_10: { name: 'Explorador', desc: 'Descubrir 10 elementos' },
    elements_25: { name: 'Alquimista', desc: 'Descubrir 25 elementos' },
    elements_50: { name: 'Sabio', desc: 'Descubrir 50 elementos' },
    elements_100: { name: 'Gran Alquimista', desc: 'Descubrir 100 elementos' },
    elements_200: { name: 'Gran Sabio', desc: 'Descubrir 200 elementos' },
    elements_500: { name: 'Dios de los Elementos', desc: 'Descubrir todos los elementos' },
    first_fusion: { name: 'Primera Fusión', desc: 'Realizar tu primera fusión' },
    fusions_10: { name: 'Fusionador', desc: '10 fusiones exitosas' },
    fusions_50: { name: 'Experto en Fusión', desc: '50 fusiones exitosas' },
    hint_used: { name: 'Empujón', desc: 'Usar una pista' },
    tier_5: { name: 'Arquitecto del Mundo', desc: 'Crear un elemento de nivel 5' },
  },
}
