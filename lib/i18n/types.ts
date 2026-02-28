export type Locale = 'fr' | 'en' | 'es' | 'it' | 'pt' | 'de'

export const LOCALES: Locale[] = ['fr', 'en', 'es', 'it', 'pt', 'de']

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  de: 'Deutsch',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  it: '🇮🇹',
  pt: '🇧🇷',
  de: '🇩🇪',
}

export interface TranslationDict {
  ui: {
    // Header
    app_title: string
    get_hint: string
    hint: string
    encyclopedia: string
    reset_progress: string
    reset_confirm_title: string
    reset_confirm_message: string
    cancel: string
    reset: string

    // Inventory
    search_placeholder: string
    sort_recent: string
    sort_alpha: string
    sort_tier: string
    category_all: string
    no_results: string
    no_elements: string

    // Workspace
    fusion_zone: string
    clear: string
    slot_1: string
    slot_2: string
    no_combination: string
    new_discovery: string
    already_known: string
    workspace_hint: string
    workspace_hint_one: string

    // Fusion result
    click_to_continue: string

    // Onboarding
    onboarding_step1_title: string
    onboarding_step1_desc: string
    onboarding_step2_title: string
    onboarding_step2_desc: string
    onboarding_step3_title: string
    onboarding_step3_desc: string
    skip: string
    next: string
    lets_go: string

    // Element card
    tier: string

    // Encyclopedia
    undiscovered: string

    // Achievement
    achievement_unlocked: string

    // Sound
    enable_sound: string
    disable_sound: string

    // Search
    search_default: string
    clear_search: string

    // Modal
    close: string
  }

  elements: Record<number, string>

  categories: Record<number, string>

  achievements: Record<string, { name: string; desc: string }>
}
