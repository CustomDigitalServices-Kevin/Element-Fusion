import type { TranslationDict } from '../types'

export const pt: TranslationDict = {
  ui: {
    app_title: 'Element Fusion',
    get_hint: 'Obter uma dica',
    hint: 'Dica',
    encyclopedia: 'Enciclopédia',
    reset_progress: 'Reiniciar o progresso',
    reset_confirm_title: 'Reiniciar o progresso?',
    reset_confirm_message: 'Todo o seu progresso será apagado. Apenas os 4 elementos base permanecerão.',
    cancel: 'Cancelar',
    reset: 'Reiniciar',

    search_placeholder: 'Procurar um elemento...',
    sort_recent: 'Recente',
    sort_alpha: 'A → Z',
    sort_tier: 'Nível',
    category_all: 'Todos',
    no_results: 'Sem resultados',
    no_elements: 'Nenhum elemento descoberto',

    fusion_zone: 'Zona de fusão',
    clear: 'Limpar',
    slot_1: 'Elemento 1',
    slot_2: 'Elemento 2',
    no_combination: 'Sem combinação',
    new_discovery: 'Novo!',
    already_known: 'Já descoberto:',
    workspace_hint: 'Arraste 2 elementos aqui para fundi-los',
    workspace_hint_one: 'Adicione um 2º elemento',

    click_to_continue: 'Clique para continuar',

    onboarding_step1_title: 'Arraste um elemento',
    onboarding_step1_desc: 'Selecione um elemento do seu inventário e arraste-o para a zona de fusão. Você também pode tocar nele!',
    onboarding_step2_title: 'Adicione um 2º elemento',
    onboarding_step2_desc: 'Combine 2 elementos juntos para descobrir novas criações.',
    onboarding_step3_title: 'Descubra combinações!',
    onboarding_step3_desc: 'Água + Fogo = Vapor, Terra + Água = Lama... Encontre mais de 90 elementos escondidos!',
    skip: 'Pular',
    next: 'Próximo',
    lets_go: 'Vamos lá!',

    tier: 'Nível',
    undiscovered: '???',
    achievement_unlocked: 'Conquista desbloqueada!',

    enable_sound: 'Ativar som',
    disable_sound: 'Desativar som',

    search_default: 'Procurar...',
    clear_search: 'Limpar busca',
    close: 'Fechar',
  },

  elements: {
    1: 'Água', 2: 'Fogo', 3: 'Terra', 4: 'Ar',
    5: 'Vapor', 6: 'Lama', 7: 'Fumaça', 8: 'Lava', 9: 'Chuva', 10: 'Poeira',
    11: 'Pedra', 12: 'Obsidiana', 13: 'Nuvem', 14: 'Tijolo', 15: 'Planta',
    16: 'Areia', 17: 'Sal', 18: 'Gelo', 19: 'Neve', 20: 'Vento',
    21: 'Tempestade', 22: 'Rio', 23: 'Oceano', 24: 'Vulcão', 25: 'Ilha',
    26: 'Metal', 27: 'Muro', 28: 'Trovão', 29: 'Árvore', 30: 'Cogumelo',
    31: 'Rosa', 32: 'Trigo', 33: 'Alga', 34: 'Montanha', 35: 'Deserto',
    36: 'Floresta', 37: 'Pântano', 38: 'Geleira', 39: 'Arco-íris', 40: 'Sol',
    41: 'Lua', 42: 'Vidro', 43: 'Carvão', 44: 'Fóssil', 45: 'Animal',
    46: 'Peixe', 47: 'Pássaro',
  },

  categories: {
    1: 'Natureza', 2: 'Tecnologia', 3: 'Vida', 4: 'Comida', 5: 'Mitologia',
  },

  achievements: {
    first_element: { name: 'Primeiro Passo', desc: 'Descubra seu primeiro elemento' },
    elements_10: { name: 'Explorador', desc: 'Descubra 10 elementos' },
    elements_25: { name: 'Alquimista', desc: 'Descubra 25 elementos' },
    elements_50: { name: 'Sábio', desc: 'Descubra 50 elementos' },
    elements_100: { name: 'Mestre Alquimista', desc: 'Descubra 100 elementos' },
    elements_200: { name: 'Grande Sábio', desc: 'Descubra 200 elementos' },
    elements_500: { name: 'Deus dos Elementos', desc: 'Descubra todos os elementos' },
    first_fusion: { name: 'Primeira Fusão', desc: 'Complete sua primeira fusão' },
    fusions_10: { name: 'Fundidor', desc: '10 fusões bem-sucedidas' },
    fusions_50: { name: 'Especialista em Fusão', desc: '50 fusões bem-sucedidas' },
    hint_used: { name: 'Mãozinha', desc: 'Use uma dica' },
    tier_5: { name: 'Arquiteto do Mundo', desc: 'Crie um elemento de nível 5' },
  },
}
